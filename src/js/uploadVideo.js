let uploadVideo = ()=>{
    let swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        initialSlide : 1,
        centeredSlides: true,
        spaceBetween: 10,
        grabCursor: true,
        loop: true,
        loopFillGroupWithBlank: true
    });
    //监听左右滑动
    let moveX = 0;
    $('.swiper-container').on('touchstart',function(){
        moveX = swiper.getTranslate()
    });
    $('.swiper-container').on('touchend',function(){
        (swiper.getTranslate()-moveX) != 0 ? $('.tips').css('opacity','0'):"";
    });

    //播放视频
    $('.video_play').on('click',function(){
        $(this).parent().find('video').get(0).play();
        $(this).addClass('hidden');
        $(this).parent().find('.poster-img').addClass('not-display');
    })
    $('.video_pic').on('click',function(){
        if($(this).parent().find('.video_play').hasClass('hidden')){
            $(this).get(0).pause()
            $(this).parent().find('.video_play').removeClass('hidden')
        }
    })
}