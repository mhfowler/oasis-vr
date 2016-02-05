
$(document).ready(function() {
  alert('hello');

  $(document).scroll(function() {
    if ($(document).scrollTop() > 200) {
        $('.navbar').fadeIn();
    }
    else {
      $('.navabr').hide();
    }
})
});