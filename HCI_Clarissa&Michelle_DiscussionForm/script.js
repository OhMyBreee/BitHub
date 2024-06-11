document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");

    var searchInput = document.querySelector('.oval-search');
    var discussionRows = document.querySelectorAll('.subforum-row');
    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    var submitButton = document.querySelector('.submit-button');

    console.log(searchInput);  // Check if elements are selected correctly
    console.log(discussionRows);
    console.log(anchorLinks);
    console.log(submitButton);

    if (searchInput) {
        // Search functionality
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
    }

    if (anchorLinks) {
        // Smooth scroll for anchor links
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
    }

        // Redirect on submit button click
        submitButton.addEventListener('click', function() {
            console.log("Submit button clicked");  // Add this for debugging
            window.location.href = "forumSubmit.html"; 
        });

    if (discussionRows.length) {
        // Redirect on discussion row click
        discussionRows.forEach(function(row) {
            row.addEventListener('click', function() {
                console.log("Discussion row clicked");  // Add this for debugging
                window.location.href = "forumReply.html"; 
            });
        });
    }

});
