

$(document).ready(function() {

    var grad_degree = 90;
    var top_section = $('.top-section');
    window.setInterval(function() {
        var background_string = "linear-gradient(" + String(grad_degree) + "deg, transparent 30%, white 0), url('http://45.media.tumblr.com/21fcce46d50a6d0bf7d8e79f9777d332/tumblr_mqtuvbME5E1sb5osho1_500.gif')";
        console.log(background_string);
        top_section.css('background', background_string);
        grad_degree += 1;
    }, 5);


});