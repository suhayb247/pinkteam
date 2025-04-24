document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq');
  
    faqItems.forEach(faq => {
      faq.querySelector('.faq-question').addEventListener('click', () => {
        faq.classList.toggle('open');
      });
    });
  
    const backArrow = document.getElementById('backArrow');
    if (backArrow) {
      backArrow.addEventListener('click', () => {
        window.history.back();
      });
    }
  
    const issueForm = document.getElementById('issueForm');
    issueForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const bookingId = document.getElementById('bookingId').value.trim();
      const message = document.getElementById('issueMessage').value.trim();
  
      if (bookingId && message) {
        alert("Your issue has been submitted. Thank you!");
        issueForm.reset();
      }
    });
  });
  