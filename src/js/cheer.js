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
    $(".content-play").on("touchstart",function(){
        let $this = $(this);
        $this.addClass("not-display");
        $(".content-video").get(0).play();
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
    getFavor();
})