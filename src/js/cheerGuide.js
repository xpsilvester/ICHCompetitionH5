let cheerGuideClick = () => {
    $(".cheer-guide").on("click",function(){
        $(".cheer-guide").addClass("not-display");
        $(window.parent.document.body).css("overflow","scroll");
        $(window.parent.document).find("#cheer-guide").css("z-index","-1");
        $(window.parent.document).find("video").removeClass('not-display');
    });
}

$(() => {
    cheerGuideClick();
});