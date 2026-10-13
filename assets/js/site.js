/* Copernicus IT Solutions — minimal vanilla JS
   1. Mobile navigation toggle and Solutions submenu
   2. Contact form: topic pre-selection from ?topic= (20-minute opportunity reviews), then POST to the form service, or fall back to a pre-filled mailto:
      link when the endpoint is still the placeholder (or the POST fails).        */
(function () {
  "use strict";

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

  /* 2. Contact form ------------------------------------------------------ */
  var form = document.getElementById("contact-form");
  if (!form) { return; }

  // Topic links from the Solutions pages: /contact/?topic=legacy-modernization
  var TOPICS = {
    "legacy-modernization": {
      label: "Legacy System Modernization",
      prompt: "Which system is holding you back, what does it run, and what is at stake if it fails or cannot change?"
    },
    "process-automation": {
      label: "AI & Business Process Automation",
      prompt: "Which process costs you the most time, which tools does it touch, and how many people work on it?"
    },
    "opportunity-review": {
      label: "Technology Opportunity Review",
      prompt: "What is holding your technology or operations back, and what would you like to change?"
    }
  };
  var topicKey = (window.location.search.match(/[?&]topic=([a-z-]+)/) || [])[1];
  var topic = topicKey && TOPICS.hasOwnProperty(topicKey) ? TOPICS[topicKey] : null;
  if (topic) {
    var note = document.getElementById("topic-note");
    var topicField = form.elements.topic;
    if (note) {
      note.querySelector("strong").textContent = "20-Minute Technology Opportunity Review — " + topic.label;
      note.hidden = false;
    }
    if (topicField) { topicField.value = topic.label; }
    if (form.elements._subject) { form.elements._subject.value = "20-minute review request (" + topic.label + ") — copernicus-it.solutions"; }
    if (form.elements.message) { form.elements.message.placeholder = topic.prompt; }
  }

  var status = document.getElementById("form-status");
  var submitBtn = form.querySelector('button[type="submit"]');
  var MAILTO_ADDRESS = "rarnoux-prost@copernicus-it.solutions";
  var SUCCESS_TEXT = "Thank you — we will get back to you within one business day.";

  function value(name) {
    var el = form.elements[name];
    return el ? el.value.trim() : "";
  }

  function showStatus(text, kind) {
    if (!status) { return; }
    status.textContent = text;
    status.className = "form-status is-" + kind;
    status.hidden = false;
    status.focus();
  }

  function mailtoLink() {
    var subject = (value("topic") ? "20-minute review (" + value("topic") + ") from " : "Website enquiry from ") + value("company");
    var body = value("name") + "\n" + value("email") + "\n\n" + value("message");
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
    // Honeypot: a filled hidden field means a bot; pretend success and stop.
    if (value("_gotcha")) { e.preventDefault(); showStatus(SUCCESS_TEXT, "success"); return; }

    var action = form.getAttribute("action") || "";
    var placeholderStillSet = action.indexOf("REPLACE_WITH_FORM_ID") !== -1;

    if (placeholderStillSet || typeof window.fetch !== "function") {
      // No form endpoint configured yet: degrade to a pre-filled mailto: link.
      e.preventDefault();
      fallbackToMailto();
      return;
    }

    e.preventDefault();
    if (submitBtn) { submitBtn.disabled = true; }
    var data = new FormData(form);
    fetch(action, { method: "POST", body: data, headers: { "Accept": "application/json" } })
      .then(function (res) {
        if (res.ok) {
          form.reset();
          showStatus(SUCCESS_TEXT, "success");
        } else {
          fallbackToMailto();
        }
      })
      .catch(function () { fallbackToMailto(); })
      .then(function () { if (submitBtn) { submitBtn.disabled = false; } });
  });
})();
