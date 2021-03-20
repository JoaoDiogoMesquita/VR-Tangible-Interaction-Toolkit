AFRAME.registerComponent('button', {

  schema: {
    referenceMarker: {type: 'selector'},
    targets: {type: 'selectorAll'},
    minimumTime : {type: 'int', default: 1000}
  },

  init: function () {
    console.log("Initializing Button component")
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
      }

      //Button was released
      else if (this.button.object3D.visible  && this.pressed ) {
        if(time - this.timePressed >= this.minimumTime) {
          //To this element
          this.el.emit('event_button_pressed')

          //To targets
          this.data.targets.forEach(function (target) {
            target.emit('event_button_pressed');
            console.log('Emitting event: Button pressed');
          }.bind(this))
        }
        else{
          this.pressed = false;
        }

        this.pressed = false;
      }
      else{

      }
    }
  }
});

