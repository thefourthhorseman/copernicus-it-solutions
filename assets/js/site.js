/* Copernicus IT Solutions — minimal vanilla JS
   0. Homepage video play button
   1. Mobile navigation toggle and "Solutions" submenu, homepage mission cards
   2. Contact page: two ways to start (call / inquiry), topic carried over from ?topic=, meeting details per topic,
      optional Calendly scheduling, time-zone detection, validation, then POST to the form service, or fall back
      to a pre-filled mailto: link when the endpoint is still the placeholder (or the POST fails).        */
(function () {
  "use strict";

  /* 0. Homepage video: show a clean poster with one play button; native controls appear once it plays.
        Without JS the <video> keeps its native controls. */
  var heroVideo = document.querySelector(".hero-video video");
  var heroPlay = document.querySelector(".hero-video-play");
  if (heroVideo && heroPlay) {
    heroVideo.controls = false;
    heroPlay.hidden = false;
    heroPlay.addEventListener("click", function () {
      heroPlay.hidden = true;
      heroVideo.controls = true;
      var started = heroVideo.play();
      if (started && started.catch) { started.catch(function () {}); }
      heroVideo.focus();
    });
  }

  /* 1. Mobile navigation ------------------------------------------------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav-main");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", open ? "false" : "true");
      nav.classList.toggle("is-open", !open);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  // Desktop submenu: disclosure button next to the "Solutions" link.
  Array.prototype.forEach.call(document.querySelectorAll(".has-sub"), function (item) {
    var btn = item.querySelector(".sub-toggle");
    if (!btn) { return; }
    function setOpen(open) {
      item.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    }
    btn.addEventListener("click", function () { setOpen(btn.getAttribute("aria-expanded") !== "true"); });
    item.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && item.classList.contains("is-open")) { e.stopPropagation(); setOpen(false); btn.focus(); }
    });
    document.addEventListener("click", function (e) { if (!item.contains(e.target)) { setOpen(false); } });
    item.addEventListener("focusout", function (e) { if (!item.contains(e.relatedTarget)) { setOpen(false); } });
  });

  /* Homepage mission cards: accessible tabs (arrow keys, Home/End). Without JS every panel stays visible. */
  var missions = document.querySelectorAll("[data-mission]");
  if (missions.length) {
    var selectMission = function (tab, focus) {
      Array.prototype.forEach.call(missions, function (t) {
        var on = t === tab;
        t.setAttribute("aria-selected", on ? "true" : "false");
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
      });
      if (focus) { tab.focus(); }
    };
    Array.prototype.forEach.call(missions, function (tab, i) {
      tab.addEventListener("click", function () {
        selectMission(tab, false);
        // On small screens the panel sits below the cards: bring it into view.
        var panelEl = document.getElementById(tab.getAttribute("aria-controls"));
        var r = panelEl.getBoundingClientRect();
        if (r.top > window.innerHeight - 120) { panelEl.scrollIntoView({ block: "nearest", behavior: "smooth" }); }
      });
      tab.addEventListener("keydown", function (e) {
        var n = missions.length, next = null;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") { next = (i + 1) % n; }
        else if (e.key === "ArrowLeft" || e.key === "ArrowUp") { next = (i - 1 + n) % n; }
        else if (e.key === "Home") { next = 0; }
        else if (e.key === "End") { next = n - 1; }
        if (next !== null) { e.preventDefault(); selectMission(missions[next], true); }
      });
    });
    selectMission(missions[0], false);
  }

  /* 2. Contact page ----------------------------------------------------- */
  var form = document.getElementById("contact-form");
  if (!form) { return; }

  // Online scheduling. Paste your Calendly event link here (e.g. "https://calendly.com/your-name/30min")
  // to switch the first option to "Choose a meeting time". Leave empty to keep "Request a call".
  var CALENDLY_URL = "https://calendly.com/rarnouxp/copernicus-it-solutions-introduction-call";

  // One name, one duration and one next step per inquiry type. Keys match ?topic= links across the site.
  var DEFAULT_TOPIC = {
    name: "30-minute introductory call",
    outcome: "A candid read on your situation and a recommended next step, whether or not it involves us.",
    next: "A short written note within a few days: scope, approach, delivery milestones, and indicative budget.",
    prompt: "What are you trying to deliver, and what is in the way?"
  };
  var TOPICS = {
    "architecture-strategy": {
      name: "30-minute Architecture & Technology Strategy call",
      outcome: "A first view of your architecture constraints, business priorities, and the decisions needed next.",
      next: "A scoped architecture and technology strategy engagement, with clear outcomes and a practical delivery roadmap.",
      prompt: "Which business objectives, architecture decisions, or investment priorities need a clear technology direction?"
    },
    "legacy-modernization": {
      name: "30-minute Legacy System Risk Review",
      outcome: "A first read on the risk and the opportunity in one system, and whether a full assessment is worth it.",
      next: "A fixed-price Legacy System Modernization Assessment: about 2 weeks, from $12,500, scope and price agreed before we start.",
      prompt: "Which system is holding you back, what does it run, and what is at stake if it fails or cannot change?"
    },
    "process-automation": {
      name: "30-minute Automation Opportunity Review",
      outcome: "A first read on where automation would pay off, and whether a full assessment is worth it.",
      next: "A fixed-price AI Business Process Automation Assessment: from $7,500, ending with a defined pilot.",
      prompt: "Which process costs you the most time, which tools does it touch, and how many people work on it?"
    },
    "opportunity-review": {
      name: "30-minute Technology Opportunity Review",
      outcome: "A candid view of what is holding your technology or operations back, and which assessment, if any, fits.",
      next: "The fixed-price assessment that fits your situation, with scope and price agreed before we start.",
      prompt: "What is holding your technology or operations back, and what would you like to change?"
    },
    "leadership": {
      name: "30-minute introductory call",
      outcome: DEFAULT_TOPIC.outcome,
      next: "A short written proposal: an assessment, a monthly advisory retainer or interim program leadership.",
      prompt: "What is the program or decision in front of you, and what is getting in the way?"
    },
    "engineering": {
      name: "30-minute introductory call",
      outcome: DEFAULT_TOPIC.outcome,
      next: "A short written note within a few days: delivery scope, technical approach, milestones, and indicative budget.",
      prompt: "What needs to be built, integrated, modernized, or migrated, and what must be true before it goes into production?"
    },
    "travel": {
      name: "30-minute introductory call",
      outcome: DEFAULT_TOPIC.outcome,
      next: DEFAULT_TOPIC.next,
      prompt: "Which platform or program is it (PSS, NDC, Altea, GDS, TPF...), and what is at stake?"
    }
  };

  var topicSelect = form.elements.topic;
  var modeInputs = form.querySelectorAll('input[name="request_type"]');
  var scheduler = document.getElementById("scheduler");
  var panel = document.getElementById("form-panel");
  var status = document.getElementById("form-status");
  var submitBtn = form.querySelector('button[type="submit"]');
  var MAILTO_ADDRESS = "info@copernicus-it.solutions";
  var currentTopic = DEFAULT_TOPIC;

  function each(selector, fn) { Array.prototype.forEach.call(document.querySelectorAll(selector), fn); }
  function value(name) { var el = form.elements[name]; return el ? String(el.value).trim() : ""; }
  function mode() { var m = form.querySelector('input[name="request_type"]:checked'); return m && m.value === "Inquiry" ? "inquiry" : "call"; }

  // Time zone: shown to the visitor and sent with the request so we propose times that suit them.
  var tz = "";
  try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (err) { tz = ""; }
  if (tz) {
    form.elements.timezone.value = tz;
    var tzLabel = " (" + tz.replace(/_/g, " ") + ")";
    var tzName = document.getElementById("tz-name");
    if (tzName) { tzName.textContent = tzLabel; }
    each("[data-tz-hint]", function (el) { el.textContent = tzLabel; });
  }

  function keyFromSelect() {
    var opt = topicSelect && topicSelect.options[topicSelect.selectedIndex];
    return opt ? opt.getAttribute("data-key") : null;
  }

  function applyTopic(key, fromUrl) {
    currentTopic = key && TOPICS.hasOwnProperty(key) ? TOPICS[key] : DEFAULT_TOPIC;
    each('[data-topic="name"]', function (el) { el.textContent = currentTopic.name; });
    each('[data-topic="outcome"]', function (el) { el.textContent = currentTopic.outcome; });
    each('[data-topic="next"]', function (el) { el.textContent = currentTopic.next; });
    if (form.elements.message) { form.elements.message.placeholder = currentTopic.prompt; }
    var note = document.getElementById("topic-note");
    if (note && fromUrl) { note.hidden = false; }
    updateSubject();
  }

  function updateSubject() {
    var label = value("topic");
    var kind = mode() === "call" ? "Call request" : "Inquiry";
    form.elements._subject.value = kind + (label ? " (" + label + ")" : "") + " — copernicus-it.solutions";
  }

  // Carry the topic over from the page the visitor came from: /contact/?topic=legacy-modernization
  var topicKey = (window.location.search.match(/[?&]topic=([a-z-]+)/) || [])[1];
  if (topicKey && TOPICS.hasOwnProperty(topicKey) && topicSelect) {
    Array.prototype.forEach.call(topicSelect.options, function (opt) {
      if (opt.getAttribute("data-key") === topicKey) { opt.selected = true; }
    });
    applyTopic(topicKey, true);
  } else {
    applyTopic(null, false);
  }
  if (topicSelect) { topicSelect.addEventListener("change", function () { applyTopic(keyFromSelect(), false); }); }

  // Calendly: loaded only when the visitor picks "Choose a meeting time". Calendly detects the time zone itself.
  var calendlyLoaded = false;
  function loadCalendly() {
    if (calendlyLoaded) { return; }
    calendlyLoaded = true;
    var slot = document.getElementById("calendly-slot");
    var url = CALENDLY_URL + (CALENDLY_URL.indexOf("?") === -1 ? "?" : "&") + "hide_gdpr_banner=1";
    if (value("topic")) { url += "&a1=" + encodeURIComponent("Topic: " + value("topic")); }
    var widget = document.createElement("div");
    widget.className = "calendly-inline-widget";
    widget.setAttribute("data-url", url);
    slot.appendChild(widget);
    var script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }

  // Confirmation once a slot is booked inside the Calendly widget.
  window.addEventListener("message", function (e) {
    if (e.origin === "https://calendly.com" && e.data && e.data.event === "calendly.event_scheduled") {
      var done = document.getElementById("schedule-status");
      if (done) { done.hidden = false; done.focus(); }
    }
  });

  if (CALENDLY_URL) {
    each('[data-label="call"]', function (el) { el.textContent = "Choose a meeting time"; });
    each('[data-label="call-desc"]', function (el) { el.textContent = "30-minute Zoom call with Renaud Arnoux-Prost. Pick a slot in your time zone."; });
  }

  function applyMode() {
    var m = mode();
    var scheduling = m === "call" && !!CALENDLY_URL;
    if (scheduler) { scheduler.hidden = !scheduling; }
    if (panel) { panel.hidden = scheduling; }
    if (scheduling) { loadCalendly(); }
    each("[data-mode-only]", function (el) { el.hidden = el.getAttribute("data-mode-only") !== m; });
    // A call request only needs contact details; an inquiry needs the question itself.
    var msg = form.elements.message;
    msg.required = m === "inquiry";
    if (m === "inquiry") { msg.setAttribute("minlength", "20"); } else { msg.removeAttribute("minlength"); }
    each('[data-label="message"]', function (el) { el.textContent = m === "inquiry" ? "Your question" : "What would you like to discuss?"; });
    each('[data-label="message-flag"]', function (el) {
      el.textContent = m === "inquiry" ? "(required)" : "(optional)";
      el.className = m === "inquiry" ? "req" : "opt";
    });
    if (submitBtn) { submitBtn.textContent = m === "inquiry" ? "Send inquiry" : "Request a call"; }
    updateSubject();
  }
  Array.prototype.forEach.call(modeInputs, function (input) { input.addEventListener("change", applyMode); });
  applyMode();

  // Validation: inline messages next to each field, focus on the first problem.
  function fieldError(el) {
    if (el.validity.valueMissing) { return "Please fill in this field."; }
    if (el.validity.typeMismatch) { return "Please enter a valid email address."; }
    if (el.validity.tooShort) { return "Please add a little more detail (at least " + el.getAttribute("minlength") + " characters)."; }
    return "";
  }
  function setError(el, text) {
    var id = el.id + "-error";
    var msg = document.getElementById(id);
    if (text) {
      if (!msg) {
        msg = document.createElement("p");
        msg.id = id;
        msg.className = "field-error";
        el.parentNode.appendChild(msg);
      }
      msg.textContent = text;
      el.setAttribute("aria-invalid", "true");
      el.setAttribute("aria-describedby", id);
    } else {
      if (msg) { msg.parentNode.removeChild(msg); }
      el.removeAttribute("aria-invalid");
      el.removeAttribute("aria-describedby");
    }
  }
  function validate() {
    var first = null;
    Array.prototype.forEach.call(panel.querySelectorAll("input, select, textarea"), function (el) {
      if (el.type === "hidden" || el.name === "_gotcha") { return; }
      var text = el.willValidate ? fieldError(el) : "";
      // minlength is not enforced by browsers on untouched values, so check it here too.
      var min = parseInt(el.getAttribute("minlength") || "0", 10);
      if (!text && min && el.value.trim() && el.value.trim().length < min) { text = "Please add a little more detail (at least " + min + " characters)."; }
      setError(el, text);
      if (text && !first) { first = el; }
    });
    if (first) { first.focus(); }
    return !first;
  }
  form.addEventListener("input", function (e) { if (e.target.getAttribute("aria-invalid") === "true") { setError(e.target, fieldError(e.target)); } });

  function successText() {
    return mode() === "call"
      ? "Thank you — we will propose times in your time zone within one business day."
      : "Thank you — we will reply within one business day.";
  }

  function showStatus(text, kind) {
    if (!status) { return; }
    status.textContent = text;
    status.className = "form-status is-" + kind;
    status.hidden = false;
    status.focus();
  }

  function mailtoLink() {
    var subject = (mode() === "call" ? "Call request" : "Inquiry") + (value("topic") ? " (" + value("topic") + ")" : "") + " from " + value("company");
    var lines = [value("name"), value("email")];
    if (value("phone")) { lines.push(value("phone")); }
    if (value("timezone")) { lines.push("Time zone: " + value("timezone")); }
    if (mode() === "call" && value("preferred_times")) { lines.push("Preferred times: " + value("preferred_times")); }
    var body = lines.join("\n") + "\n\n" + value("message");
    return "mailto:" + MAILTO_ADDRESS +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
  }

  function fallbackToMailto() {
    window.location.href = mailtoLink();
    showStatus("Your email client should now open with your message pre-filled. If it does not, write to " +
      MAILTO_ADDRESS + " directly.", "success");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Honeypot: a filled hidden field means a bot; pretend success and stop.
    if (value("_gotcha")) { showStatus(successText(), "success"); return; }
    if (!validate()) { return; }
    updateSubject();

    var action = form.getAttribute("action") || "";
    if (action.indexOf("REPLACE_WITH_FORM_ID") !== -1 || typeof window.fetch !== "function") {
      // No form endpoint configured yet: degrade to a pre-filled mailto: link.
      fallbackToMailto();
      return;
    }

    if (submitBtn) { submitBtn.disabled = true; }
    fetch(action, { method: "POST", body: new FormData(form), headers: { "Accept": "application/json" } })
      .then(function (res) {
        if (res.ok) {
          var kind = mode();
          form.reset();
          form.querySelector('input[name="request_type"][value="' + (kind === "call" ? "Call request" : "Inquiry") + '"]').checked = true;
          if (tz) { form.elements.timezone.value = tz; }
          showStatus(kind === "call"
            ? "Thank you — we will propose times in your time zone within one business day."
            : "Thank you — we will reply within one business day.", "success");
        } else {
          fallbackToMailto();
        }
      })
      .catch(function () { fallbackToMailto(); })
      .then(function () { if (submitBtn) { submitBtn.disabled = false; } });
  });
})();
