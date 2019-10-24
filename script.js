$(function() {
  // On page load, determine if arrow on navbar header is needed
  resizeMenu();

  // Event listener for window resize
  $(window).on('resize', resizeMenu);

  // Event listener for navbar header click
  $('#navbar header').on('click', toggleMenu);
});


function resizeMenu() {
  let w = window.innerWidth;

  // If screen width < 700px, show menu icon, remove .menu_open and hide menu
  if (w < 700) {
    $('#menu_icon').css('display', 'inline-block').removeClass('menu_open');
    $('.list_container').css('display', 'none');

    // Else (sceen width >= 700px), hide menu icon and show menu
  } else {
    $('#menu_icon').css('display', 'none');
    $('.list_container').css('display', 'block');
  }
}


function toggleMenu() {
  let w = window.innerWidth;

  // If screen width < 700px, toggle menu and animate menu icon on click
  if (w < 700) {
    $('.list_container').slideToggle();
    $('#menu_icon').toggleClass('menu_open');
  }
}
