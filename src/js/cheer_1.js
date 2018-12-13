let getVideo = () => {
    getVideoAjax();
}

let setVideo = (src) => {
    $(".content .content-video").attr("src",src);
}

let videoPlay = () => {
    $(".content-play").on("touchstart",function(){
        $(this).addClass("not-display");
        $(".content-video").get(0).play();
    });
}

let videoPause = () => {
    $(".content-video").on("touchstart",function(){
        if($(".content-play").hasClass("not-display")){
            $(".content-play").removeClass("not-display");
            $(".content-video").get(0).pause();
        }
    });
}

$(()=>{
    
});