let getNumber = () => {
    getNumberAjax();
}

let setNumber = (number) => {
    $(".header-number").html(number);
}

let getVideo = () => {
    getVideoAjax();
}

let setVideo = (src) => {
    $(".screen-video").attr("src",src);
}

let videoPlay = () => {
    $(".screen-play").on("touchstart",function(){
        $(this).addClass("not-display");
        $(".screen-video").get(0).play();
    });
}

let videoPause = () => {
    $(".screen-video").on("touchstart",function(){
        if($(".screen-play").hasClass("not-display")){
            $(".screen-play").removeClass("not-display");
            $(".content-video").get(0).pause();
        }
    });
}

let getFavor = () => {
    getFavorAjax();
}

let setFavor = (isFavor) => {
    if(isFavor){
        $(".main-heart").addClass("favor");
    }
}

let favor = () => {
    $(".main-heart").on("click",function(){
        $(".main-heart").addClass("favor");
        favorAjax();
    });
}

$(()=>{
    getNumber();
    getVideo();
    videoPlay();
    videoPause();
    getFavor();
    favor();
    headAjax();
});