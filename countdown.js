/* ============================================================
   countdown.js — Compte à rebours jusqu'à la sortie du film
   ============================================================ */

(function initCountdown() {
  // Target : 1er avril 2026 à minuit (heure locale)
  const TARGET_DATE = new Date('2026-04-01T12:00:00');

  const elH = document.getElementById('cd-h');
  const elM = document.getElementById('cd-m');
  const elS = document.getElementById('cd-s');


  function pad(n) {
    return String(n).padStart(2, '0');
  }

  function update() {
    const diff = TARGET_DATE - Date.now();

    if (diff <= 0) {
      elH.textContent = '00';
      elM.textContent = '00';
      elS.textContent = '00';
      clearInterval(timer);
      return;
    }

    const j = Math.floor(diff / 86_400_000);
    const h = Math.floor((diff % 86_400_000) / 3_600_000);
    const m = Math.floor((diff % 3_600_000)  / 60_000);
    const s = Math.floor((diff % 60_000)     / 1_000);
    
    elH.textContent = pad(h);
    elM.textContent = pad(m);
    elS.textContent = pad(s);
  }

  update();
  const timer = setInterval(update, 1000);
})();
