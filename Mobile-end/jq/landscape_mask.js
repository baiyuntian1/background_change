/*
 *@ v1.0.2
 *@ 高京
 *@ 2015-10-09
 *@ 判断是否竖屏，横屏自动出黑屏动画
 */
var landscape_mask = {

    landscape_init: function() {

        landscape_mask.includeCSS("/inc/landscape_mask.min.css");

        var tag_str = "<section class=\"landscape_mask\">" + "<div class=\"mod_div\">" + "<img src=\"/inc/landscape_mask.png\" />" + "<p>为了更好的体验，请使用竖屏浏览</p>" + "</div>" + "</section>";

        $("body").append(tag_str);

        var _selector = $("section.landscape_mask");

        var changeDo = function() {

            if ($(".landscape_mask_no_focus:focus").length > 0) {
                if (_selector.hasClass("landscape_mask_show"))
                    _selector.removeClass("landscape_mask_show");
                return;
            } else if (!_selector.hasClass("landscape_mask_show"))
                _selector.addClass('landscape_mask_show');

            var window_height_px = $(window).height();

            _selector.css("height", window_height_px + "px");
        };

        changeDo();

        $(window).resize(function() {
            changeDo();
        });
    },

    includeCSS: function(path) {
        var a = document.createElement("link");
        a.type = "text/css";
        a.rel = "stylesheet";
        a.href = path;
        var head = document.getElementsByTagName("head")[0];
        head.appendChild(a);
    }
};

landscape_mask.landscape_init();
