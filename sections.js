/* ============================================================
   sections.js — Injection des sections HTML + init spoilers
   Les sections sont définies dans /sections/*.html
   et chargées dynamiquement pour garder index.html propre.
   ============================================================ */

(async function loadSections() {
  const container = document.getElementById('sections-container');
  if (!container) return;

  // Order matters — same order as the nav tabs
  const sectionFiles = [
    'sections/accueil.html',
    'sections/jeux.html',
    'sections/galaxies.html',
    'sections/personnages.html',
    'sections/ennemis.html',
    'sections/film.html',
    'sections/secrets.html',
  ];

  // Fetch all sections in parallel
  const htmlParts = await Promise.all(
    sectionFiles.map((path) =>
      fetch(path)
        .then((r) => {
          if (!r.ok) throw new Error(`Cannot load ${path}`);
          return r.text();
        })
        .catch((err) => {
          console.warn(err);
          return `<section class="section"><p style="color:var(--accent-pink);padding:40px">⚠️ Impossible de charger ${path}</p></section>`;
        })
    )
  );

  container.innerHTML = htmlParts.join('\n');

  // Activate the first section (accueil)
  const first = container.querySelector('.section');
  if (first) first.classList.add('active');

  // Init spoiler toggles
  container.querySelectorAll('.spoiler').forEach((sp) => {
    sp.addEventListener('click', () => sp.classList.toggle('revealed'));
  });
})();
