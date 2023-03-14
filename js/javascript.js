// navbar------------------------------------------------
// ------------------------------------------------start


// responsive navbar
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".main");

    mobile_nav.addEventListener('click', () =>{
        headerElem.classList.toggle("active");
    });

// on scroll effect
window.addEventListener('scroll', function(){
let navbar = document.querySelector('nav');
    if(window.pageYOffset > 0){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
        }
    });
// navbar------------------------------------------------
// ------------------------------------------------end