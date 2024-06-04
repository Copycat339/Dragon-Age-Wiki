document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const suggestions = document.getElementById('suggestions');

  const items = [
    { name: 'Alistair', link: '/Alistair'},
    { name: 'Andraste', link: '/Andraste' },
    { name: 'Anora', link: '/Anora' },
    { name: 'Cailan', link: '/Cailan' },
    { name: 'Cassandra', link: '/Cassandra' },
    { name: 'El Hacedor', link: '/El-Hacedor' },
    { name: 'Flemeth', link: '/Flemeth' },
    { name: 'Florianne', link: '/Florianne' },
    { name: 'Hawke', link: '/Hawke' },
    { name: 'Isabela', link: '/Isabela' },
    { name: 'Leliana', link: '/Leliana' },
    { name: 'Loghain', link: '/Loghain' },
    { name: 'Meredith', link: '/Meredith' },
    { name: 'Merrill', link: '/Merrill' },
    { name: 'Morrigan', link: '/Morrigan' },
    { name: 'Sera', link: '/Sera' },
    { name: 'Solas', link: '/Solas' },
    { name: 'The Inquisitor', link: '/The-Inquisitor' },
    { name: 'The Warden', link: '/The-Warden' },
    { name: 'Varric', link: '/Varric' }
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
