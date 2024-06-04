document.addEventListener("DOMContentLoaded", function() {
    var searchInput = document.querySelector('.oval-search');
    var discussionRows = document.querySelectorAll('.subforum-row');
    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    var submitButton = document.querySelector('.submit-button');

    searchInput.addEventListener('input', function() {
        var searchQuery = searchInput.value.toLowerCase(); 

        discussionRows.forEach(function(row) {
            var discussionTitle = row.querySelector('h4').innerText.toLowerCase(); 

            if (discussionTitle.includes(searchQuery)) {
                row.style.display = ''; 
            } else {
                row.style.display = 'none'; 
            }
        });
    });
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
        
            event.preventDefault();

            var targetId = this.getAttribute('href').slice(1);

            var targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    submitButton.addEventListener('click', function() {
        window.location.href = "forumSubmit.html"; 
    });
});
