/* FAQ accordion */

const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
      const currentItem = button.closest('.faq-item');
      
// Close other accordion items
    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== currentItem) {
        item.classList.remove('active');
      }
    });

    // Toggle current item
    currentItem.classList.toggle('active');
  });
});