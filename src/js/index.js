let loadingAction = () => {
    let progress = 0;
    let timer = setInterval(() => {
        progress++;
        $(".loading-number").html(progress);
        $(".progress").css("width",progress + "%");
        if(progress == 100){
            clearInterval(timer);
            $(".index-progress").addClass("not-display");
            $(".star-yell").removeClass("not-display");
        }
    },50);
}

let starYellAction = () => {
    $(".star-play").on("click",function(){
        $(this).addClass("not-display");
        $(".star-video").get(0).play();
    });
    $(".star-video").on("click",function(){
        $(".star-play").removeClass("not-display");
        $(".star-video").get(0).pause();
    });
}

let getTheme = () => {
    getThemeAjax();
}

let setTheme = (theme,link) => {
    $(".index-container .header .action").unbind().attr("class","action " + theme);
    if(data.theme != "enroll"){
        $('.enroll-below').addClass('not-display');
    }
    $(".index-container .header .action").on("click",function(){
        window.location.href = link;
    });
}

let uploadVideo = (learningIndex)=>{
    let swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        initialSlide : learningIndex,
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

    //点亮站点按钮
    let changeSite = ($index)=>{
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
    }
    changeSite(learningIndex);

    //学习中/未打卡/已打卡图标
    $('.swiper-slide .learning').removeClass('not-display');
    for(let i=0;i<$('.swiper-slide .learning').length;i++){
        if(i<learningIndex){
            $('.swiper-slide .learning').eq(i).css('background-image','url(../static/images/index/learning0.png)');
        }else if(i>learningIndex){
            $('.swiper-slide .learning').eq(i).css('background-image','url(../static/images/index/learning1.png)');
        }
    }


    //监听左右滑动
    let moveX = 0;
    $('.swiper-container').on('touchstart',function(){
        moveX = swiper.getTranslate()
    });
    $('.swiper-container').on('touchend',function(){
        if((swiper.getTranslate()-moveX) != 0){
            $('.slide-lr').css('opacity','0');
            var $index = $('.swiper-slide-active').index();
            changeSite($index);
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
            $(this).parent().find('video').get(0).play();
            $(this).addClass('not-display');
        }else{
            window.location.href = 'learnPark.html?id='+$(this).parent().index();
        }
    })
    $('.video_pic').on('click',function(){
        if($(this).parent().find('.video_play').hasClass('not-display')){
            $(this).get(0).pause()
            $(this).parent().find('.video_play').removeClass('not-display')
        }

        if($(this).parent().index() != 0){
            window.location.href = 'learnPark.html?id='+$(this).parent().index();
        }
    })
}

$(()=>{
    loadingAction();
    starYellAction();
    getTheme();
});