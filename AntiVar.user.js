// ==UserScript==
// @name         Anti Varion
// @namespace    http://varion.abschaffen/
// @version      0.1
// @description  Less fun is more fun!
// @author       m3
// @match        https://www.youtube.com/embed/*
// @require      http://code.jquery.com/jquery-3.5.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var waitForEl = function(selector, callback) {
        if (jQuery(selector).length) {
            callback();
        } else {
            setTimeout(function() {
                waitForEl(selector, callback);
            }, 300);
        }
    };
    waitForEl(".ytp-title-channel-logo", function() {
        var blocklist = [
            'UCw81xLtFkpks4D8_hYUP9VA', // Varion
            'UCxm1sQQ53BGzKnhNZ9lZvCA', // Eigenwerbung von Kif
            'UCh9IfI45mmk59eDvSWtuuhQ', // Varion-Kopie
            'UCDyqjn-9rKdcAe0gTMAkqyg', // Noch eine Varion-Kopie
            'UCrDAt04Uan9eAiu0E9RtT4A', // Varion-Kopie mit Bart
            'UCy0Pr5u-MwGXXzp_GDd4m_g', // weibliche Varion-Kopie
            'UCpGk56cJDZcVqIxZatX7nbQ', // Unlustige Katzencomics aus Japan
            'UCnBhY8jMEZzSSuFPz6JSAxQ' // Unlustiger Typ mit Behinderung
        ];
        $('.ytp-title-channel-logo').each(function () {
            if ($.inArray($(this).attr('href').replace('https://www.youtube.com/channel/',''), blocklist) >= 0) {
                $('body').html('Blocked by Anti-Varion extension');
            }
        });
    });
})();