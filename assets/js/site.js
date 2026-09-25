/* Copernicus IT Solutions — minimal vanilla JS
   1. Mobile navigation toggle
   2. Contact form: POST to the form service, or fall back to a pre-filled mailto:
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

  /* 2. Contact form ------------------------------------------------------ */
  var form = document.getElementById("contact-form");
  if (!form) { return; }

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
    var subject = "Website enquiry from " + value("company");
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
