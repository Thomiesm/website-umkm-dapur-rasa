const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const dropdownToggle = document.querySelector('.dropdown-toggle');

menuToggle.addEventListener('click', function () {
    navMenu.classList.toggle('show');
    menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('show'));
});

dropdownToggle.addEventListener('click', function () {
    const dropdown = dropdownToggle.parentElement;
    dropdown.classList.toggle('open');
    dropdownToggle.setAttribute('aria-expanded', dropdown.classList.contains('open'));
});

const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        navMenu.classList.remove('show');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});
