AFRAME.registerComponent('button', {

  schema: {
    referenceMarker: {type: 'selector'},
    eventTargets: {type: 'selectorAll'},
    minimumTime : {type: 'int', default: 1000},
    debug : {type: 'boolean', default: false}
  },

  init: function () {
    console.log("INITIALIZING BUTTON COMPONENT")
    this.button = this.el;
    this.reference = this.data.referenceMarker;
    this.pressed = false;
    this.timePressed = 0;
    this.minimumTime = this.data.minimumTime;
  },


  tick: function (time) {
    if (this.button != null && this.reference != null && this.reference.object3D.visible) {

      //Button was pressed
      if (!this.button.object3D.visible && !this.pressed) {
          this.pressed = true;
          this.timePressed = time;
          if(this.data.debug)
            console.log('Pressed at ', time, ' seconds.')
      }

      //Button was released
      else if (this.button.object3D.visible  && this.pressed ) {

        if(this.data.debug)
          console.log('Released at ', time, ' seconds.')

        if(time - this.timePressed >= this.minimumTime) {
          //To this element
          this.el.emit('event_button_pressed')

          //To targets
          this.data.eventTargets.forEach(function (target) {
            target.emit('event_button_pressed');
            console.log('Emitting event: Button pressed');
          }.bind(this))
        }

        this.pressed = false;
      }
    }
  }
});

