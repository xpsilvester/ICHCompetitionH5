$(() => {
    $(".content-close").on("click",function(){
        $(".rule-container").addClass("not-display");
        $(window.parent.document.body).css("overflow","scroll");
        $(window.parent.document).find("#rule").css("z-index","-1");
    });
    $(".content-close-cheer").on("click",function(){
        $(".rule-container").addClass("not-display");
        $(window.parent.document.body).css("overflow","scroll");
        $(window.parent.document).find("#cheerRule").css("z-index","-1");
        $(window.parent.document).find(".content-video").removeClass('not-display');
    });
});