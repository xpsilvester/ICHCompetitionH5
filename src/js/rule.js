$(() => {
    $(".content-close").on("click",function(){
        $(".rule-container").addClass("not-display");
        $(window.parent.document.body).css("overflow","scroll");
        $(window.parent.document).find("#rule").css("z-index","-1");
    });
});