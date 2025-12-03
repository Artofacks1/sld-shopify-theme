/**
 * SportsLiveDecals Theme - Main JavaScript
 * Vanilla JS for theme functionality
 */

(function() {
  'use strict';

  /**
   * Mobile Navigation Toggle
   */
  class MobileNav {
    constructor() {
      this.navToggle = document.querySelector('[data-mobile-nav-toggle]');
      this.navMenu = document.querySelector('[data-mobile-nav-menu]');
      this.navOverlay = document.querySelector('[data-mobile-nav-overlay]');
      this.isOpen = false;

      if (this.navToggle && this.navMenu) {
        this.init();
      }
    }

    init() {
      // Toggle button click
      this.navToggle.addEventListener('click', () => {
        this.toggle();
      });

      // Overlay click to close
      if (this.navOverlay) {
        this.navOverlay.addEventListener('click', () => {
          this.close();
        });
      }

      // Close on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.close();
        }
      });

      // Close on window resize (if mobile menu is open and window becomes desktop size)
      window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && this.isOpen) {
          this.close();
        }
      });
    }

    toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }

    open() {
      this.isOpen = true;
      this.navMenu.classList.add('is-open');
      this.navToggle.classList.add('is-active');
      if (this.navOverlay) {
        this.navOverlay.classList.add('is-active');
      }
      document.body.style.overflow = 'hidden';
      
      // Update aria attributes
      this.navToggle.setAttribute('aria-expanded', 'true');
      this.navMenu.setAttribute('aria-hidden', 'false');
    }

    close() {
      this.isOpen = false;
      this.navMenu.classList.remove('is-open');
      this.navToggle.classList.remove('is-active');
      if (this.navOverlay) {
        this.navOverlay.classList.remove('is-active');
      }
      document.body.style.overflow = '';
      
      // Update aria attributes
      this.navToggle.setAttribute('aria-expanded', 'false');
      this.navMenu.setAttribute('aria-hidden', 'true');
    }
  }

  /**
   * Initialize on DOM ready
   */
  function init() {
    // Initialize mobile navigation
    new MobileNav();

    // Add any other initialization here
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Export for potential use elsewhere
  window.SportsLiveDecalsTheme = {
    MobileNav: MobileNav
  };
})();

