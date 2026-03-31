/* ============================================================
   konami.js — Easter egg : code Konami ↑↑↓↓←→←→BA
   ============================================================ */

(function initKonami() {
  const SEQUENCE = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'b', 'a'
  ];

  let position = 0;

  document.addEventListener('keydown', (e) => {
    if (e.key === SEQUENCE[position]) {
      position++;
      if (position === SEQUENCE.length) {
        position = 0;
        activateKonami();
      }
    } else {
      position = 0;
    }
  });

  function activateKonami() {
    const overlay = document.getElementById('konami-overlay');
    if (overlay) overlay.classList.add('active');
    spawnLumaRain();
  }

  function spawnLumaRain() {
    const symbols = ['⭐', '🌟', '✨', '💫', '🌠'];
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const luma = document.createElement('div');
        luma.className = 'luma-rain-item';
        luma.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        luma.style.left              = Math.random() * 100 + 'vw';
        luma.style.animationDuration = (1.5 + Math.random() * 2).toFixed(2) + 's';
        document.body.appendChild(luma);
        setTimeout(() => luma.remove(), 4000);
      }, i * 80);
    }
  }
})();

// Exposed globally for the inline onclick in index.html
function closeKonami() {
  const overlay = document.getElementById('konami-overlay');
  if (overlay) overlay.classList.remove('active');
}
