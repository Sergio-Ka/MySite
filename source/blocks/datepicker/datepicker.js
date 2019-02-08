class Datepick {

  constructor($element) {
    this.$element = $element;
    this.initDatepicker(this.$element);
  }

  getDatepickerSettings() {
    return {
      prevText: this.$element.data('prevtext'),
      nextText: this.$element.data('nexttext'),
      dayNamesMin: this.$element.data('daynamesmin'),
      dateFormat: this.$element.data('dateformat'),
      firstDay: this.$element.data('firstday'),
      altField: this.$element.data('altfield'),
      altFormat: this.$element.data('altformat'),
      showButtonPanel: this.$element.data('showpanel'),
    }
  }

  initDatepicker($calendar) {
    $calendar.datepicker(this.getDatepickerSettings());
    const $button = $('.js-datepicker__button');
    $button.on('click', () => {
      $calendar.datepicker('setDate', new Date());
    });
  }
}

$('.js-datepicker__body').each((index, domElement) => {
  new Datepick($(domElement));
});