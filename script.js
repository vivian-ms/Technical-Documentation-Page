$(function() {
  // Event listener for navbar header click
  $('#navbar header').on('click', function(evt) {
    $('#navbar li').toggleClass('showMenu');

    if ($('#navbar li').css('display') === 'none') {
      // If nav list is hidden, display arrow up
      $('#arrow').html('&#xfe3f;');
    } else {
      // If nav list is shown, display arrow down
      $('#arrow').html('&#xfe40;');
    }
  });
});
