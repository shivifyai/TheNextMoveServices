// Two views on one page: #proposal (and its section anchors) shows the proposal,
// everything else shows the company home.
const proposalAnchors = new Set(["proposal", "motion", "site", "isometric", "topview", "specs", "fabrication"]);
const views = document.querySelectorAll("[data-view-root]");
const navLinks = document.querySelectorAll(".site-nav a");

function route() {
  const id = location.hash.slice(1) || "home";
  const view = proposalAnchors.has(id) ? "proposal" : "home";
  const changed = document.querySelector(`[data-view-root="${view}"]`).hidden;

  views.forEach(el => { el.hidden = el.dataset.viewRoot !== view; });
  navLinks.forEach(a => {
    const active = view === "proposal" && a.dataset.view === "proposal";
    a.toggleAttribute("aria-current", active);
    if (active) a.setAttribute("aria-current", "page");
  });

  const target = document.getElementById(id);
  if (id === "home" || id === "proposal" || !target) {
    if (changed || id === "home" || id === "proposal") window.scrollTo(0, 0);
  } else {
    target.scrollIntoView();
  }
}

window.addEventListener("hashchange", route);
route();

// Copy buttons. Clipboard may be refused, so fall back to selecting the text.
document.querySelectorAll("[data-copy]").forEach(btn => {
  btn.addEventListener("click", () => {
    const field = document.getElementById(btn.dataset.copy);
    const label = btn.textContent;
    navigator.clipboard.writeText(field.textContent.trim())
      .then(() => { btn.textContent = "Copied"; })
      .catch(() => {
        const range = document.createRange();
        range.selectNodeContents(field);
        const sel = getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        btn.textContent = "Selected, press Ctrl+C";
      })
      .finally(() => setTimeout(() => { btn.textContent = label; }, 2000));
  });
});

// Enlarge drawings
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll("[data-zoom]").forEach(btn => {
  btn.addEventListener("click", () => {
    lightboxImg.src = btn.dataset.zoom;
    lightboxImg.alt = btn.querySelector("img").alt;
    lightbox.showModal();
  });
});

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) lightbox.close();
});
