const wrapper = document.getElementById('scrollable');

let isDown = false;
let startX;
let scrollLeft;

wrapper.addEventListener('mousedown', (e) => {
    isDown = true;
    wrapper.classList.add('active');
    startX = e.pageX - wrapper.offsetLeft;
    scrollLeft = wrapper.scrollLeft;
});

wrapper.addEventListener('mouseleave', () => {
    isDown = false;
    wrapper.classList.remove('active');
});

wrapper.addEventListener('mouseup', () => {
    isDown = false;
    wrapper.classList.remove('active');
});

wrapper.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - wrapper.offsetLeft;
    const walk = (x - startX) * 3; // The multiplier can be adjusted for faster/slower scroll
    wrapper.scrollLeft = scrollLeft - walk;
});

function filtercategory(topic) {
    const buttons = document.querySelectorAll('.vert-wrapper .item');
    buttons.forEach(button => {
        if (button.getAttribute('data-topic') === topic || topic === " " && topic != null) {
            button.style.display = 'grid';
        } else {
            button.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    const items = document.querySelectorAll('.wrapper .item');

    items.forEach(item => {
        // item.addEventListener('mouseover', () => {
        //     item.style.backgroundColor = '#E78618'; // Set your desired hover color
        //     item.style.transform = 'scale(1.05)';
        //     item.style.transition = 'all 0.3s ease';
        // });

        // item.addEventListener('mouseout', () => {
        //     item.style.backgroundColor = 'var(--blue)';
        //     item.style.transform = 'scale(1)';
        // });

        item.addEventListener('click', () => {

            items.forEach(i => {
                i.style.backgroundColor = 'var(--blue)';
                i.style.transform = 'scale(1)';
            });
            // Reset the styles for all items
            const selectedTopic = item.getElementsByClassName("topic")[0].getAttribute("value");
            console.log(selectedTopic);
            filtercategory(selectedTopic);


            // Apply styles to the clicked item
            item.style.backgroundColor = '#E78618'; // Set your desired click color
            // item.style.transform = 'scale(1.1)';
            item.style.transition = 'all 0.3s ease';
        });
    });
    // Function to filter problems
    function filterProblems() {
        // Get the value of the search input
        const searchValue = document.getElementById('problemSearch').value.toLowerCase();
        
        // Get the value of the difficulty filter
        const difficultyValue = document.getElementById('difficultyFilter').value;
        
        // Get all problem items
        const problemItems = document.querySelectorAll('.vert-wrapper .item');
        
        // Loop through each problem item
        problemItems.forEach(item => {
            // Get the problem title
            const title = item.querySelector('.Title').textContent.toLowerCase();
            
            // Get the problem difficulty
            const difficulty = item.querySelector('.Diff').textContent;
            
            // Check if the title includes the search value and matches the difficulty
            const titleMatches = title.includes(searchValue);
            const difficultyMatches = difficultyValue ? difficulty === difficultyValue : true;
            
            // Show or hide the item based on the search and difficulty filters
            if (titleMatches && difficultyMatches) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    // Add event listeners to the search input and difficulty filter
    document.getElementById('problemSearch').addEventListener('input', filterProblems);
    document.getElementById('difficultyFilter').addEventListener('change', filterProblems);
});

function gotoproblems(){
    window.location.href = "../Problems Fix/Problems.html"
}
