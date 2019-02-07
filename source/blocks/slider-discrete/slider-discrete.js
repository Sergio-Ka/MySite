class SliderDescrete {

  constructor($element) {
    this.$element = $element;
    this.initSlider();
  }

  getSliderSettings() {
    return {min: this.$element.data('min'),
      max: this.$element.data('max'),
      step: this.$element.data('step'),
      value: this.$element.data('value'),
      range: this.$element.data('range'),}
  }

  initSlider() {
    this.$element.slider(this.getSliderSettings());

    const $sliderTheme = this.$element.data('theme');
    const $sliderHandle = this.$element.find('.ui-slider-handle');
    const $sliderMinRange = this.$element.find('.ui-slider-range-min');

    $sliderHandle.addClass(`slider-discrete__handle_theme_${$sliderTheme}`);
    $sliderMinRange.addClass(`slider-discrete__range-min_theme_${$sliderTheme}`);
  }
}

$('.js-slider-discrete').each(function callback(index, domElement){
  new SliderDescrete($(domElement));
});