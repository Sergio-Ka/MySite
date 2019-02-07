class StandardButton {
    
  constructor($element) {
    this.$element = $element;
    this.initButton();
  }

  initButton() {
    this.$element.on('click', function callback(event) {
      //event.preventDefault();
      const targetCoordinates = event.target.getBoundingClientRect();
      const xCoordinate = event.clientX - targetCoordinates.left;
      const yCoordinate = event.clientY - targetCoordinates.top;

      const $rippleElement = $('<div class="standard-button_ripple">');
      $rippleElement.css('top', `${yCoordinate}px`);
      $rippleElement.css('left', `${xCoordinate}px`);
      $rippleElement.appendTo(event.target);

      setTimeout(function callback() {$rippleElement.remove();}, 600);
    });
  }
}
    
$('.js-standard-button').each(function callback(index, domElement){
  new StandardButton($(domElement));
});