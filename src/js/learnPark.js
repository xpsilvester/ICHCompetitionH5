'use strict';

let getContent = () => {
    getContentAjax();
}

let setContent = (title,subtitle,description,readEnglish,readChinese,audio) => {
    $("#yuko-videotitle p").html(title);
    $("#yuko-videotitle span").html(subtitle);
    $("#yuko-videodesc").html(description);
    $("#yuko-recordplay-en").html(readEnglish);
    $("#yuko-recordplay-cn").html(readChinese);
    $('#player source').attr('src',audio);
}

$(() => {
    getContent();
    $('#yuko-videoplay').on('touchend', function (evt) {
        let tar = evt.target,
            $videoMainCon = $('#yuko-videoplay'),
            $video = $('#yuko-videoplay-video video');

        if (tar.id === 'yuko-videoplay-icon' || tar.nodeName.toLocaleLowerCase() === 'video') {
            if (!$videoMainCon.hasClass('playing')) {
                $videoMainCon.addClass('playing');
                $video[0].play();
            } else {
                $videoMainCon.removeClass('playing');
                $video[0].pause();
            }
        }
    });

    $('#yuko-videodesc').on('touchend', function () {
        if (!$(this).hasClass('expanded')) {
            $(this).addClass('expanded');
        } else {
            $(this).removeClass('expanded');
        }
    });
});