const input = document.querySelector('#searchInput');
const cards = [...document.querySelectorAll('.work-card')];

input?.addEventListener('input', () => {
  const term = input.value.trim().toLowerCase();
  cards.forEach(card => {
    const haystack = `${card.textContent} ${card.dataset.keywords}`.toLowerCase();
    card.classList.toggle('hidden', term && !haystack.includes(term));
  });
});
