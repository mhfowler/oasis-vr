
$(document).ready(function() {

  $(document).scroll(function() {
    if ($(document).scrollTop() > 100) {
        $('.navbar').fadeIn();
    }
    else {
      $('.navabr').hide();
    }
})
});