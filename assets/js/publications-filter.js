(() => {
  const normalize = (s) => (s || "").toLowerCase().trim();

  const buttons = () => Array.from(document.querySelectorAll(".pub-filter"));
  const items = () => Array.from(document.querySelectorAll(".pub-item"));

  function setActive(activeBtn) {
    buttons().forEach(b => b.classList.remove("is-active"));
    if (activeBtn) activeBtn.classList.add("is-active");
  }

  function filterItems(keyword) {
    const key = normalize(keyword);

    items().forEach(item => {
      const raw = item.dataset.keywords || "";
      const kws = raw
        .split(",")
        .map(normalize)
        .filter(Boolean);

      const show = key === "all" || kws.includes(key);
      item.style.display = show ? "" : "none";
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    buttons().forEach(btn => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.keyword || "all";
        filterItems(key);
        setActive(btn);
      });
    });
  });
})();
