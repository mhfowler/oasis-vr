
$(document).ready(function() {

  $(document).scroll(function() {
    if ($(document).scrollTop() > 100) {
        //$('.navbar').fadeIn();
    }
    else {
      //$('.navabr').hide();
    }

    $('.project-row').click(function(e) {
        e.preventDefault();
        var link = $(this).data('link');
        window.open(link, '_blank');
    });
})
});