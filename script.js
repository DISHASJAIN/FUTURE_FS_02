'use strict';

/* -------------------------------
   MODAL (Subscribe Popup)
--------------------------------*/
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');
const newsletterForm = document.querySelector('[data-newsletter-form]');

// Close modal function
const modalCloseFunc = function () {
  if (modal) modal.classList.add('closed');
};

// Close when clicking X
if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', modalCloseFunc);
}

// Close when clicking overlay
if (modalCloseOverlay) {
  modalCloseOverlay.addEventListener('click', modalCloseFunc);
}

// Close when clicking SUBSCRIBE button — prevent page reload
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();              // Stop page refresh
    modalCloseFunc();                // Close modal
    console.log("Subscribed!");      // Optional
  });
}



/* -------------------------------
   NOTIFICATION TOAST
--------------------------------*/
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

if (toastCloseBtn) {
  toastCloseBtn.addEventListener('click', function () {
    if (notificationToast) notificationToast.classList.add('closed');
  });
}



/* -------------------------------
   MOBILE MENU
--------------------------------*/
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // Close mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  // Open menu
  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  // Close menu (X button)
  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);

  // Close when clicking overlay
  overlay.addEventListener('click', mobileMenuCloseFunc);
}



/* -------------------------------
   ACCORDION
--------------------------------*/
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const isOpen = this.nextElementSibling.classList.contains('active');

    for (let j = 0; j < accordion.length; j++) {

      if (isOpen) break;

      if (accordion[j].classList.contains('active')) {
        accordion[j].classList.remove('active');
        accordionBtn[j].classList.remove('active');
      }
    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}
