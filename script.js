document.addEventListener('DOMContentLoaded', () => {
  // Tabs functionality
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  function activateTab(targetId) {
    tabButtons.forEach(b => b.classList.toggle('active', b.dataset.target === targetId));
    tabPanes.forEach(p => p.classList.toggle('active', p.id === targetId));
    // gently focus the active pane (good for accessibility)
    const activePane = document.getElementById(targetId);
    if (activePane) activePane.setAttribute('tabindex', '-1');
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      activateTab(btn.dataset.target);
    });
  });

  // Optionally: make first tab active on load
  if (tabButtons.length) {
    activateTab(tabButtons[0].dataset.target);
  }

  // Minimal entrance animation for the two columns (keeps clean look)
  const left = document.querySelector('.left-col');
  const right = document.querySelector('.right-col');
  [left, right].forEach((el, i) => {
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, i * 250);
  });
});
