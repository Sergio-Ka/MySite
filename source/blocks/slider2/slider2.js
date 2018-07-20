var $slider2 = $(".js-slider-2");
var $slider2handle = $('.js-slider-2 .ui-slider-handle, .js-slider-1 .ui-slider-handle');
var $slider2range = $('.js-slider-2 .ui-slider-range-min, .js-slider-1 .ui-slider-range-min');

$slider2.slider({
    min: 0,
    max: 100,
    value: 75,
    range: 'min'
});

$slider2handle.each(function (index, handle) {
    if (index % 2 == 0)
    $(handle).addClass('even-handle');
    else $(handle).addClass('odd-handle');
});

$slider2range.each(function (index, handle) {
    if (index % 2 == 0)
    $(handle).addClass('even-range-min');
    else $(handle).addClass('odd-range-min');
});