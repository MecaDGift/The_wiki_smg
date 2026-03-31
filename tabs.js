/* ============================================================
   tabs.js — Navigation par onglets + barre de scroll
   ============================================================ */

// ── Tab switching ────────────────────────────────────────────
function showTab(id, btn) {
  // Hide all sections
  document.querySelectorAll('.section').forEach((s) => s.classList.remove('active'));

  // Deactivate all tab buttons
  document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));

  // Show target section
  const target = document.getElementById('tab-' + id);
  if (target) target.classList.add('active');

  // Activate button
  if (btn) btn.classList.add('active');

  // Scroll to top smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Scroll progress bar ──────────────────────────────────────
(function initScrollBar() {
  const bar = document.getElementById('scroll-bar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop    = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight
                       - document.documentElement.clientHeight;
    bar.style.width = (scrollTop / scrollHeight * 100) + '%';
  });
})();
