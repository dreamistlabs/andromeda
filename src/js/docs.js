$(document).ready(() => {
  console.log('// dev - docs.js working');
  let siteFooter = $('#site-footer')[0];
  let siteHeader = $('#site-header')[0];
  let sidebar = $('.sidebar')[0];
  let navToggle = $('.nav__toggle')[0];
  let navLinks = $('.sidebar__nav .nav__link');

  $(document).on("click", () => {

  });
  $(document).on('scroll', () => {
    let scrollPosition = window.scrollY;
    // console.log(scrollPosition);
    if (scrollPosition > 10) {
      $('#andromeda-documentation')[0].classList.add('scrolled')
    } else {
      $('#andromeda-documentation')[0].classList.remove('scrolled');
    }
  });

  $(navToggle).add(navLinks).on("click", () => {
    $(sidebar).toggleClass('visible');
  });

});