
$(function () {
    // header
    var nav = $(".header"); //得到导航对象
    var win = $(window); //得到窗口对象
    var sc = $(document);//得到document文档对象。
    var hei = $(".header").height();
    win.scroll(function () {
        if (sc.scrollTop() >= hei) {
            nav.addClass("header_change");
            $(".header_logo_img").attr("src", "img/head/logo2.png");
        } else {
            nav.removeClass("header_change");
            $(".header_logo_img").attr("src", "img/head/logow.png");
        }
    })
    //headermb
    $(".header_mb01_btn").click(function () {
        $(".header_mb02").fadeIn(300);
        $(".header_mb03").addClass("header_mb03_show");
        $("body").addClass("Body_noscroll");
    })
    $(".header_mb02").click(function () {
        $(this).fadeOut(300);
        $(".header_mb03").removeClass("header_mb03_show");
        $("body").removeClass("Body_noscroll");
    })
})