let getDay = () => {
    getDayAjax();
}

let setDay = (day) => {
    $(".header .time .time-word").html(day);
}

let getVideo = () => {
    getVideoAjax();
}

let setVideo = (src) => {
    $(".content .content-video").attr("src",src);
}

let videoPlay = () => {
    $(".content-play").on("click",function(){
        $(this).addClass("not-display");
        $('.poster-img').addClass("not-display");
        $(".content-video").get(0).play();
    });
}

let videoPause = () => {
    $(".content-video").on("click",function(){
        if($(".content-play").hasClass("not-display")){
            $(".content-play").removeClass("not-display");
            $(".content-video").get(0).pause();
        }
    });
}

let getFavor = () => {
    getFavorAjax();
}

let setFavor = (number) => {
    $(".content .content-number").html(number);
}

$(()=>{
    getDay();
    getVideo();
    videoPlay();
    videoPause();
    getFavor();
});