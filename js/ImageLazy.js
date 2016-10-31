/**
 * Created by liujinhe on 16/10/31.
 */

(function (root, lazyLoad) {
    if (typeof exports === "object") {
        module.exports = lazyLoad;
    } else {
        root.ImageLazy = lazyLoad;
    }
})(this, function (className, options) {

    options = options || {};

    var lazyClass = className || "_imageLazy";
    var delayTime = options.delayTime || 500;
    var offset = options.offset || 150;

    var delay;

    function _delay() {
        if (delay) {
            clearTimeout(delay);
        }
        delay = setTimeout(
            function () {
                lazyLoad();
            }, delayTime
        );
    };

    function lazyLoad() {

        var lazyImgs = document.getElementsByClassName(lazyClass);

        lazyImgs = Array.prototype.slice.call(lazyImgs);

        for (var i = 0; i < lazyImgs.length; i++) {
            var image = lazyImgs[i];

            if (checkVisible(image)) {
                (image.getAttribute('data-src') ? image.src = (image.getAttribute('data-src')) : "");

                image.className = image.className.replace(new RegExp(lazyClass), "");
                lazyImgs.slice(i, 1);
            }
        }
    }

    function checkVisible(image) {

        var eleRect = image.getBoundingClientRect();

        return (eleRect.top > 0 && eleRect.left > 0 && eleRect.top <= (window.innerHeight + parseInt(offset)));
    }

    _delay();

    window.addEventListener('scroll', _delay, false);

})