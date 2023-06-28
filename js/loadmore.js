$(function () {
    $(".col-lg-4 col-sm-6").slice(0, 3).show();
    $("body").on('click touchstart', '.load-more', function (e) {
        e.preventDefault();
        $(".col-lg-4 col-sm-6:hidden").slice(0, 3).slideDown();
        if ($(".col-md-4:hidden").length == 0) {
            $(".load-more").css('visibility', 'hidden');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
    });
});

