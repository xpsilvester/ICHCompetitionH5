$(() => {
    'use strict';

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