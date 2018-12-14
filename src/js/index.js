$(()=>{
    let swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        initialSlide : 0,
        centeredSlides: true,
        spaceBetween: 10,
        grabCursor: true,
        effect : 'coverflow',
        coverflowEffect: {
            rotate: 0,
            stretch: -5,
            depth: 30,
            modifier: 10,
            slideShadows : false,
        }
    });
    //监听左右滑动
    let moveX = 0;
    $('.swiper-container').on('touchstart',function(){
        moveX = swiper.getTranslate()
    });
    $('.swiper-container').on('touchend',function(){
        if((swiper.getTranslate()-moveX) != 0){
            $('.slide-lr').css('opacity','0');
            var $index = $('.swiper-slide-active').index();
            if($index <= 4){
                $('.site-btn').removeClass('active');
                $('.site-btn1').addClass('active');
            }else if($index <= 9){
                $('.site-btn').removeClass('active');
                $('.site-btn2').addClass('active');
            }else{
                $('.site-btn').removeClass('active');
                $('.site-btn3').addClass('active');
            }
        };
    });
    //点击站按钮
    $('.site-btn').on('click',function(){
        swiper.slideTo($(this).index()*5, 1000, false);
        $('.site-btn').removeClass('active');
        $(this).addClass('active');
    })
    
    //播放视频
    $('.video_play').on('click',function(){
        if($(this).parent().index() == 0){
            window.location.href = $(this).parent().find('video').attr('src');
        }
        $(this).parent().find('video').get(0).play();
        $(this).addClass('not-display');
    })
    $('.video_pic').on('click',function(){
        if($(this).parent().find('.video_play').hasClass('not-display')){
            $(this).get(0).pause()
            $(this).parent().find('.video_play').removeClass('not-display')
        }
    })
})