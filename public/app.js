$('.portfolio, .social, .contact').hide();

$('#portfolio-header').click(function() {
  $('.portfolio').toggle();
  $('.social').hide();
  $('.contact').hide();
});

$('#social-header').click(function() {
  $('.portfolio').hide();
  $('.social').toggle();
  $('.contact').hide();
});

$('#contact-header').click(function() {
  $('.portfolio').hide();
  $('.social').hide();
  $('.contact').toggle();
});
