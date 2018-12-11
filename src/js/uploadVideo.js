$(()=>{
    let swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        initialSlide : 1,
        centeredSlides: true,
        spaceBetween: 10,
        grabCursor: true
    });
    //进入全屏
    let fullScreen = ($ele)=> {
        var ele = $ele;
        if (ele .requestFullscreen) {
            ele .requestFullscreen();
        } else if (ele .mozRequestFullScreen) {
            ele .mozRequestFullScreen();
        } else if (ele .webkitRequestFullScreen) {
            ele .webkitRequestFullScreen();
        }
    }
    //播放视频
    $('.video_play').on('click',function(){
        $(this).parent().find('video').get(0).play();
        fullScreen($(this).parent().find('video').get(0));
        $(this).addClass('hidden');
    })
    $('.video_pic').on('click',function(){
        if($(this).parent().find('.video_play').hasClass('hidden')){
            $(this).get(0).pause()
            $(this).parent().find('.video_play').removeClass('hidden')
        }
    })
})