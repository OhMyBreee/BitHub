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


// const vert_wrapper = document.getElementById('vert-scrollable');

// let vert_isDown = false;
// let startY;
// let scrollTop;

// wrapper.addEventListener('mousedown', (e) => {
//     vert_isDown = true;
//     vert_wrapper.classList.add('active');
//     startY = e.pageY - vert_wrapper.offsetTop;
//     scrollTop = vert_wrapper.scrollTop;
// });

// vert_wrapper.addEventListener('mouseleave', () => {
//     isDown = false;
//     vert_wrapper.classList.remove('active');
// });

// vert_wrapper.addEventListener('mouseup', () => {
//     vert_isDown = false;
//     vert_wrapper.classList.remove('active');
// });

// vert_wrapper.addEventListener('mousemove', (e) => {
//     if (!vert_isDown) return;
//     e.preventDefault();
//     const y = e.pageY - vert_wrapper.offsetTop;
//     const walk = (y - startY) * 3; // The multiplier can be adjusted for faster/slower scroll
//     vert_wrapper.scrollTop = scrollTop - walk;
// });
