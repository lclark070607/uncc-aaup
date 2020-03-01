const navSlide = () => {
    let menu = document.querySelector('.hamburger-menu');
    let nav = document.querySelector('.nav');
    let navLinks = document.querySelectorAll('.nav li');
    let navLinksA = document.querySelectorAll('.nav-link');
    let elementsArray = [menu, nav];

    elementsArray.forEach(function(elem) {
        elem.addEventListener("click", (event) => {
            links(event);
        });     
    });

    function links() {
        nav.classList.toggle('nav-active');
        const expanded = nav.getAttribute('aria-expanded') === 'true';
        nav.setAttribute('aria-expanded', !expanded);
       
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
    let nextState = hamburger.getAttribute('aria-label') === 'menu-expanded' ? 'menu-collapsed' : 'menu-expanded';
    hamburger.setAttribute('aria-label', nextState);
  }

  hamburger.addEventListener("keyup", function(e) {
    let code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
      let nextState = hamburger.getAttribute('aria-label') == 'menu-collapsed' ? 'menu-expanded' : 'menu-collapsed';
      hamburger.setAttribute('aria-label', nextState);
    }
  });


  

