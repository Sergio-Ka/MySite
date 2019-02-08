class Selectmenu {

  constructor($element) {
    this.$element = $element;
    this.initSelectmenu();
  }

  initSelectmenu() {
    this.$element.selectmenu();
  }
}

$('.js-selectmenu').each((index, domElement) => {
  new Selectmenu($(domElement));
});