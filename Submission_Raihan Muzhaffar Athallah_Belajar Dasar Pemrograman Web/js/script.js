// Portfolio script: mobile menu toggle and page-style section switcher

(function () {
  "use strict";

  // Mobile navigation toggle
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("primaryNav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the mobile menu after picking a link
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Page switcher (About / Experience / Skills)
  var pages = document.querySelectorAll(".section-block[data-page]");
  var pageLinks = document.querySelectorAll(".nav-link[data-page-link]");
  var EXIT_MS = 240;

  // Scroll to the sections area when it is out of view
  function scrollToSections() {
    var target = document.querySelector(".sections");
    if (!target) return;
    var rect = target.getBoundingClientRect();
    if (rect.top < 0 || rect.top > 130) {
      window.scrollTo({ top: window.scrollY + rect.top - 96, behavior: "smooth" });
    }
  }

  // Highlight the active navigation link
  function setActiveLink(pageId) {
    pageLinks.forEach(function (l) {
      l.classList.toggle("is-active", l.getAttribute("data-page-link") === pageId);
    });
  }

  // Show a page with a fade and slide transition
  function showPage(pageId) {
    var current = document.querySelector(".section-block[data-page].is-visible");
    var next = document.querySelector('.section-block[data-page="' + pageId + '"]');
    if (!next) return;

    setActiveLink(pageId);
    scrollToSections();

    if (next === current) return;

    // Reveal the next page
    function revealNext() {
      next.hidden = false;
      void next.offsetWidth; // Force reflow so the transition plays
      next.classList.add("is-visible");
    }

    if (current) {
      current.classList.remove("is-visible");
      current.classList.add("is-leaving");
      window.setTimeout(function () {
        current.hidden = true;
        current.classList.remove("is-leaving");
        revealNext();
      }, EXIT_MS);
    } else {
      revealNext();
    }

    if (history.replaceState) history.replaceState(null, "", "#" + pageId);
  }

  // Initialize pages and navigation links
  if (pages.length && pageLinks.length) {
    var ids = Array.prototype.map.call(pages, function (p) { return p.dataset.page; });
    var initial = window.location.hash.replace("#", "");
    if (ids.indexOf(initial) === -1) initial = ids[0];

    pages.forEach(function (p) {
      var isInitial = p.dataset.page === initial;
      p.hidden = !isInitial;
      p.classList.toggle("is-visible", isInitial);
    });
    setActiveLink(initial);

    pageLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        showPage(link.getAttribute("data-page-link"));
      });
    });
  }
})();
