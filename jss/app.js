const navSlide = () => {
    let menu = document.querySelector('.hamburger-menu');
    let nav = document.querySelector('.nav-links');
    let navbar = document.querySelector('.navbar .nav')
    let navLinks = document.querySelectorAll('.nav li');
    let elementsArray = [menu, nav];

    elementsArray.forEach(function(elem) {
        elem.addEventListener("click", (event) => {
            links(event);
        });     
    });

    function links() {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
            link.style.animation = '';
            } else {
            link.style.animation = `navLinkFade 0.3s ease forwards ${index / 5 + .1}s`;
            } 
        });
        menu.classList.toggle('toggle');
    }
}
navSlide();

const hamburger = document.querySelector('.hamburger-menu');
hamburger.addEventListener('click', setHamburgerAria);
function setHamburgerAria() {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
  }

