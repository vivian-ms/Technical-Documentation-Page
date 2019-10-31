$(function() {
  checkMediaQuery();

  $(window).on('resize', checkMediaQuery);

  // Readjust main document properties after collapsing navbar
  $('#collapsable_navbar').on('hidden.bs.collapse', checkMediaQuery);

  $('.navbar-brand').on('click', function(evt) {
    // If window width < 768px, toggle collapsable navbar when .navbar-brand is clicked
    if (!window.matchMedia('(min-width: 768px)').matches) {
      $('#collapsable_navbar').collapse('toggle');
    }
  });

  $('.nav-item').on('click', function(evt) {
    // Click .nav-link when .nav-item is clicked
    $(this).children()[0].click();
  });

  $('.nav-item, #main-doc').on('click', function(evt) {
    // Close the collapsable navbar when nav-item or main document is clicked
    $('#collapsable_navbar').collapse('hide');
  })
});


// Adjust navbar and main document properties based on media query
function checkMediaQuery() {
  // If window width >= 768px
  if (window.matchMedia('(min-width: 768px)').matches) {
    // Collapse the collapsable navbar (navbar will be a sidebar)
    $('#collapsable_navbar').collapse('hide');

    // .navbar-nav: set width equal to width of .navbar-brand
    $('.navbar-nav').css('width', $('.navbar-brand').css('width'));

    // Change fixed-top navbar to fixed-left
    $('.navbar').removeClass('fixed-top').addClass('fixed-left flex-column');

    // Vertically stack all nav links and vertically stretch .navbar-nav to fill the screen
    $('.navbar-nav').addClass('flex-column align-self-stretch');

    // Vertically stretch each nav link to fill the screen and vertically center each nav link
    $('.nav-item').addClass('flex-fill d-flex justify-content-around align-items-center');

    // #main-doc: move to top of screen and to the left of sidebar
    $('#main-doc').css({
      'top': '0px',
      'left': $('.navbar').css('width')
    });
  // End if (window width >= 768px) statement

  // Else (window width < 768px)
  } else {
    // If window height < 386 (nav height), set max height to add scroll bar
    if ($(window).height() < 386) {
      $('.navbar-collapse').css('max-height', $(window).height() - 82);  // 82 = height of nav
    } else {
      $('.navbar-collapse').css('max-height', '');
    }  // End if else for setting .navbar-collapse max-height

    // .navbar-nav: remove width property
    $('.navbar-nav').css('width', '');

    // Change fixed-left navbar to fixed-top
    $('.navbar').removeClass('fixed-left flex-column').addClass('fixed-top');

    // Change vertically stacked nav links to horizontally align
    $('.navbar-nav').removeClass('flex-column align-self-stretch');

    $('.nav-item').removeClass('flex-fill d-flex justify-content-around align-items-center');

    // #main-doc: move below navbar and to the left of the screen
    $('#main-doc').css({
      'top': $('.navbar').css('height'),
      'left': '0px'
    });
  }  // End else statement
};  // End checkMediaQuery()
