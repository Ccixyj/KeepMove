// ==UserScript==
// @name         双拼去除推广
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    $(function ($) {
        setTimeout(function () {
            let model = $("[uib-modal-window]");
            let model_background = $("[uib-modal-backdrop]");
            console.log("remove:" + JSON.stringify(model));
            console.log("remove:" + JSON.stringify(model_background));
            console.log("remove:ok");
            model.remove();
            model_background.remove();
            $("body").removeClass("modal-open");
        }, 100);

    });

})();