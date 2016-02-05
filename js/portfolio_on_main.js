
$(document).ready(function() {
  alert('hello');

  $(document).scroll(function() {
    if ($(document).scrollTop() > 100) {
        $('.navbar').fadeIn();
    }
    else {
      $('.navabr').hide();
    }
})
});