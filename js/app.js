let navLinksA = document.querySelectorAll('.nav-link');
let nav = document.querySelector('.nav');
let menu = document.querySelector('.hamburger-menu');
let navLinks = document.querySelectorAll('.nav li');


// window.onload = () => {
//     if (window.innerWidth <= 768) {
//         nav.style.visibility = 'hidden';
//         navLinksA.forEach((link, index) => {
//             link.style.visibility = 'hidden';
//         })
//     }
// }

// // if(menu..getAttribute('aria-expanded')=='false')) {
// //     if(document.getElementById('mytooltipbutton2').getAttribute('aria-expanded')=='true'){
// //         document.getElementById('mytooltip2').style.visibility = 'hidden'; 
// //         document.getElementById('mytooltipbutton2').setAttribute('aria-expanded', 'false');
// //       } else { 
// //           document.getElementById('mytooltip2').style.visibility = 'visible'; 
// //           document.getElementById('mytooltipbutton2').setAttribute('aria-expanded', 'true');
// //       };
// // }

// responsive nav slider
const navSlide = () => {  
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
        let visibility = nav.style.visibility === 'visible' ? 'hidden' : 'visibile';
       
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

// hamburger btn a11y
const hamburger = document.querySelector('.hamburger-menu');

hamburger.addEventListener('click', setHamburgerAria);
function setHamburgerAria() {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
   
    hamburger.setAttribute('aria-expanded', !expanded);
    let nextState = hamburger.getAttribute('aria-label') === 'menu-expanded' ? 'menu-collapsed' : 'menu-expanded';
    hamburger.setAttribute('aria-label', nextState);

    navLinksA.forEach((link, index) => {
      let toggleTabindex = link.removeAttribute('hidden');
    })
  }

  hamburger.addEventListener("keyup", function(e) {
    let code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
      let nextState = hamburger.getAttribute('aria-label') == 'menu-expanded' ? 'menu-collapsed' : 'menu-expanded';
      hamburger.setAttribute('aria-label', nextState);
    }
  });

  // toggle polyfill
  if (!Element.prototype.toggleAttribute) {
    Element.prototype.toggleAttribute = function(name, force) {
      if(force !== void 0) force = !!force 
      
      if (this.hasAttribute(name)) {
        if (force) return true;
  
        this.removeAttribute(name);
        return false;
      }
      if (force === false) return false;
        
      this.setAttribute(name, "");
      return true;
    };
  }

  //accordion
  const accordionComponent = document.querySelector('.accordion');
accordionComponent.addEventListener('click', (event) => {
  accordion(event);
});

function accordion() {
  const btn = event.target.closest('[accordion-trigger]');
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  const target = btn.parentNode.nextElementSibling;

  btn.setAttribute('aria-expanded', !expanded);
  target.hidden = expanded;
}


  

