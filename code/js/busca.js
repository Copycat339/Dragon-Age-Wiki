document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const suggestions = document.getElementById('suggestions');

  const items = [
    { name: 'Alistair', link: 'https://copycat339.github.io/Dragon-Age-Wiki/Alistair'},
    { name: 'Andraste', link: 'https://copycat339.github.io/Dragon-Age-Wiki/Andraste' },
    { name: 'Anora', link: 'https://copycat339.github.io/Dragon-Age-Wiki/Anora' },
    { name: 'Cailan', link: 'https://copycat339.github.io/Dragon-Age-Wiki/Cailan' },
    { name: 'Cassandra', link: 'https://copycat339.github.io/Dragon-Age-Wiki/Cassandra' },
    { name: 'El Hacedor', link: 'https://copycat339.github.io/Dragon-Age-Wiki/El-Hacedor' },
    { name: 'Flemeth', link: 'https://copycat339.github.io/Dragon-Age-Wiki/Flemeth' },
    { name: 'Florianne', link: 'https://copycat339.github.io/Dragon-Age-Wiki/Florianne' },
    { name: 'Hawke', link: 'https://copycat339.github.io/Dragon-Age-Wiki/Hawke' },
    { name: 'Isabela', link: 'https://copycat339.github.io/Dragon-Age-Wiki/Isabela' },
    { name: 'Leliana', link: 'https://copycat339.github.io/Dragon-Age-Wiki/Leliana' },
    { name: 'Loghain', link: 'https://copycat339.github.io/Dragon-Age-Wiki/Loghain' },
    { name: 'Meredith', link: 'https://copycat339.github.io/Dragon-Age-Wiki/Meredith' },
    { name: 'Merrill', link: 'https://copycat339.github.io/Dragon-Age-Wiki/Merrill' },
    { name: 'Morrigan', link: 'https://copycat339.github.io/Dragon-Age-Wiki/Morrigan' },
    { name: 'Sera', link: 'https://copycat339.github.io/Dragon-Age-Wiki/Sera' },
    { name: 'Solas', link: 'https://copycat339.github.io/Dragon-Age-Wiki/Solas' },
    { name: 'The Inquisitor', link: 'https://copycat339.github.io/Dragon-Age-Wiki/The-Inquisitor' },
    { name: 'The Warden', link: 'https://copycat339.github.io/Dragon-Age-Wiki/The-Warden' },
    { name: 'Varric', link: 'https://copycat339.github.io/Dragon-Age-Wiki/Varric' }
    // Agrega más elementos aquí
  ];

  searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();
    suggestions.innerHTML = '';

    if (query) {
      const filteredItems = items.filter(item => item.name.toLowerCase().includes(query));
      filteredItems.forEach(item => {
        const suggestionItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = item.link;
        link.textContent = item.name;
        suggestionItem.appendChild(link);
        suggestions.appendChild(suggestionItem);
      });
    }
  });
});
