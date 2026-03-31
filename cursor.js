/* ============================================================
   cursor.js — Curseur personnalisé lumineux
   ============================================================ */

(function initCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;

  // Follow mouse
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });

  // Grow on interactive elements
  const interactiveSelectors = 'a, button, .card, .spoiler, [data-tooltip]';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelectors)) {
      cursor.classList.add('big');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelectors)) {
      cursor.classList.remove('big');
    }
  });
})();
