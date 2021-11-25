
export function navSlide() {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        // toggle NAV
        nav.classList.toggle('nav-active');

        // animate LINKS
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`
            }

        });
        //burger ANIMATION
        burger.classList.toggle('toggle');
    });



}

// export const navSlide = () => {
//     const burger = document.querySelector('.burger')
//     const nav = document.querySelector('.nav-links')
//     const navLinks = document.querySelectorAll('.nav-links li')

//     burger.addEventListener('click', () => {
// toggle NAV
// nav.classList.toggle('nav-active');

// animate LINKS
// navLinks.forEach((link, index) => {
//     if (link.style.animation) {
//         link.style.animation = '';
//     } else {
//         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`
//     }

// });
//burger ANIMATION
//         burger.classList.toggle('toggle');
//     });



// }

// Call your functions here
// const app = ()=>{
// }

navSlide();
