// Header Section

const navOpen = document.querySelector(".mobile-open-btn");
const navClose = document.querySelector(".mobile-close-btn");
const primaryNav = document.querySelector("primary-nav");

navOpen.addEventListener('click', () => {
    // select attribute
    const visibility = primaryNav.getAttribute('data-visible');
    // if else condition (change 'true false')
    if (visibility === 'true') {
        // set attribute to true / false ('attributeName', value)
        primaryNav.setAttribute('data-visible', true);
        navClose.setAttribute('data-visible', true);
    } else {
        primaryNav.setAttribute('data-visible', false);
    }

});

