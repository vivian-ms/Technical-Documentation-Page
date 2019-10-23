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

  // If screen width < 700px, display arrow
  if (w < 700) {
    if ($('#navbar li').css('display') === 'none') {
      // If nav list is hidden, display arrow up
      $('#arrow').html('&#xfe3f;');
    } else {
      // If nav list is shown, display arrow down
      $('#arrow').html('&#xfe40;');
    }
  } else {
    // If screen width > 700px, don't display arrow
    $('#arrow').text('');
  }
}


function toggleMenu() {
  let w = window.innerWidth;

  if (w < 700) {
    // If screen width < 700px, toggle #navbar li display (none <-> inline-block) on #navbar header click
    $('#navbar li').toggleClass('showMenu');

    if ($('#navbar li').css('display') === 'none') {
      // If nav list is hidden, display arrow up
      $('#arrow').html('&#xfe3f;');
    } else {
      // If nav list is shown, display arrow down
      $('#arrow').html('&#xfe40;');
    }
  }
}
