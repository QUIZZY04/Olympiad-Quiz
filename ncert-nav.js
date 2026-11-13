/**
 * OlympiadQuiz Uniform NCERT Solutions Navigation Script
 * Provides clean mobile menu toggle, mobile dropdown support, and outside click dismissal.
 */
(function() {
  function initNav() {
    var toggleBtn = document.getElementById('mobile-menu-toggle');
    var navLinks = document.getElementById('navLinks');

    if (toggleBtn && navLinks) {
      // Clone button to cleanly strip any legacy conflicting event listeners
      var cleanBtn = toggleBtn.cloneNode(true);
      // Remove any legacy inline onclick attribute so it doesn't fire twice
      cleanBtn.removeAttribute('onclick');
      toggleBtn.parentNode.replaceChild(cleanBtn, toggleBtn);

      cleanBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        var isActive = navLinks.classList.toggle('active');
        cleanBtn.classList.toggle('active', isActive);
      });

      // Expose globally for backward compatibility
      window.toggleMobileNav = function() {
        var isActive = navLinks.classList.toggle('active');
        cleanBtn.classList.toggle('active', isActive);
      };
    }

    // Dropdown accordion behavior on mobile screens
    var dropdownLinks = document.querySelectorAll('.nav-dropdown > .nav-link');
    dropdownLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        if (window.innerWidth <= 900) {
          e.preventDefault();
          e.stopPropagation();
          var dd = this.closest('.nav-dropdown');
          if (dd) dd.classList.toggle('open');
        }
      });
    });

    // Close mobile drawer when clicking outside
    document.addEventListener('click', function(e) {
      var currentNavLinks = document.getElementById('navLinks');
      var currentBtn = document.getElementById('mobile-menu-toggle');
      if (currentNavLinks && currentNavLinks.classList.contains('active')) {
        if (!currentNavLinks.contains(e.target) && (!currentBtn || !currentBtn.contains(e.target))) {
          currentNavLinks.classList.remove('active');
          if (currentBtn) currentBtn.classList.remove('active');
        }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }
})();
