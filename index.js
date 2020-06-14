const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', (e) => {
  navLinks.classList.toggle('active');
  burgerMenu.classList.toggle('active');
});

new Glider(document.querySelector('.carousel'), {
  slidesToShow: 1,
  slideToScrroll: 1,
  dots: '.dots',
  draggable: true,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next',
  },
});

const services = document.querySelectorAll('.service');
const observe = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('showed');
    } else {
      entry.target.classList.remove('showed');
    }
  });
});

services.forEach((service) => {
  observe.observe(service);
});
