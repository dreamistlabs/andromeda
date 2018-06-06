$(document).ready(() => {
  console.log('// dev - docs.js working');
  let siteFooter = $('#site-footer')[0];
  let siteHeader = $('#site-header')[0];

  $(document).on('scroll', () => {
    let scrollPosition = window.scrollY;
    // console.log(scrollPosition);
    scrollPosition > 10
      ? $('#andromeda-documentation')[0].classList.add('scrolled')
      : $('#andromeda-documentation')[0].classList.remove('scrolled');  
  })
  
  
});