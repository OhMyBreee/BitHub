document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-form input[type="search"]');
    const countryDropdown = document.getElementById('country');
    const tournamentDropdown = document.getElementById('Tournament');
    const leaderboardItems = document.querySelectorAll('.items');
    const searchSidebarInput = document.querySelector('.rightbar .search');
    const eventItems = document.querySelectorAll('.eventItem');

    function filterLeaderboard() {
        const searchText = searchInput.value.toLowerCase();
        const selectedCountry = countryDropdown.value;
        const selectedTournament = tournamentDropdown.value;

        leaderboardItems.forEach(item => {
            const username = item.querySelector('.Username').textContent.toLowerCase();
            const country = item.getAttribute('data-country');
            const tournament = item.getAttribute('data-tournament');

            const matchesSearch = username.includes(searchText);
            const matchesCountry = !selectedCountry || country === selectedCountry;
            const matchesTournament = !selectedTournament || tournament === selectedTournament;

            if (matchesSearch && matchesCountry && matchesTournament) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    }

    function filterEvents() {
        const searchText = searchSidebarInput.value.toLowerCase();

        eventItems.forEach(eventItem => {
            const eventName = eventItem.querySelector('.title').textContent.toLowerCase();
            if (eventName.includes(searchText)) {
                eventItem.style.display = '';
            } else {
                eventItem.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', filterLeaderboard);
    countryDropdown.addEventListener('change', filterLeaderboard);
    tournamentDropdown.addEventListener('change', filterLeaderboard);
    searchSidebarInput.addEventListener('input', filterEvents);

    // Initialize filters on page load
    filterLeaderboard();
    filterEvents();
});

function gotoprofile(){
    window.location.href = "../../HCI_Jeisen_Profile/HCI_Jeisen&Bryan_Profile/index.html"
}
