
$(document).ready(function() {

    var palm_tree = $('.palm-emoji');

    var binary_div = $(".binary");

    var bin = '10';
    for (i = 0; i < 5000; i++) {
        if (Math.random() < 0.5) {
            bin += '1';
        }
        else {
            bin += '0'
        }
    }
    binary_div.html(bin);
});


