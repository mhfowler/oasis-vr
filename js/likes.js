
$(document).ready(function() {

    $('.test').click(function(e) {
        e.preventDefault();
        console.log('clicked');
    });

    function sleepFor( sleepDuration ){
        var now = new Date().getTime();
        while(new Date().getTime() < now + sleepDuration){ /* do nothing */ }
    }

    for (i = 0; i < 10; i++) {
        var hearts = $('.test');
        $(hearts).each(function(i,e) {
            $(this).click();
            console.log('like');
            sleepFor(500);
        });
        $("a:contains('Load more')").click();
        sleepFor(2000);
        console.log('++ load more');
    }

});


