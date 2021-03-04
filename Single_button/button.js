AFRAME.registerComponent('single_button', {

  schema: {
    reference_marker: {type: 'selector'},
    targets: {type: 'selectorAll'},
  },

  init: function () {
    this.button = this.el;
    this.reference = this.data.reference_marker;
    this.pressed = false;
  },


  tick: function () {

    if (this.button != null && this.reference != null) {

      //Button was pressed
      if (!this.button.object3D.visible && this.reference.object3D.visible) {

        //To this element
        button.emit('event_button_pressed')

        //To targets
        this.data.targets.forEach(function (target) {
          target.emit('event_button_pressed');
          this.pressed = true;
          console.log('Emitting event: Pressing of button');
        }.bind(this))
      }


      //Button was released
      else if (this.button.object3D.visible && this.reference.object3D.visible && this.pressed) {

        //To this element
        this.el.emit('event_button_released')

        //To targets
        this.data.targets.forEach(function (target) {
          target.emit('event_button_released');
          this.pressed = false;
          console.log('Emitting event: Release of button');
        }.bind(this))
      }
    }
  }
});

