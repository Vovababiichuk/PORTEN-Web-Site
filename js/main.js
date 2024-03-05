const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        nav.classList.add('fixed-nav');
    } else {
        nav.classList.remove('fixed-nav');
    }
});
