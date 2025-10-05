document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelectorAll('.text-content, .image-content');

  content.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, index * 300);
  });
});
