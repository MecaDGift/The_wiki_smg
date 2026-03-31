/* ============================================================
   starfield.js — Génération dynamique du ciel étoilé
   ============================================================ */

(function initStarfield() {
  const starfield = document.getElementById('starfield');
  if (!starfield) return;

  // ── Static twinkling stars ───────────────────────────────────
  for (let i = 0; i < 180; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 2.5 + 0.5;
    star.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      --dur: ${(Math.random() * 4 + 2).toFixed(2)}s;
      --delay: ${(Math.random() * 5).toFixed(2)}s;
    `;
    starfield.appendChild(star);
  }

  // ── Shooting stars ───────────────────────────────────────────
  for (let i = 0; i < 5; i++) {
    const ss = document.createElement('div');
    ss.className = 'shooting-star';
    ss.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 30}%;
      --angle: ${(20 + Math.random() * 30).toFixed(1)}deg;
      animation-delay: ${(Math.random() * 8).toFixed(2)}s;
      animation-duration: ${(5 + Math.random() * 5).toFixed(2)}s;
    `;
    starfield.appendChild(ss);
  }
})();
