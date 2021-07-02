AFRAME.registerComponent('mt-button', {
  schema: {
    referenceMarker: {type: 'selector'},
    eventTargets: {type: 'selectorAll'},
    minimumTime : {type: 'int', default: 250},
    debug : {type: 'boolean', default: false},
    mode: {}
  },

  init: function () {
    console.log("Initializing mt-button component");
  },

  update: function() {
    //Initialize data structures
    this.button = this.el;
    this.reference = this.data.referenceMarker;
    this.pressed = false;
    this.timePressed = 0;
    this.minimumTime = this.data.minimumTime;

    //Debug
    console.info("Debug mode set to ", this.data.debug)
    if (this.data.debug) {
      console.log('Reference: ', this.reference)
      console.log('Button: ', this.button)
    }
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

          const event_button = new CustomEvent('event_button_pressed', {
            detail: {
              time: time ,
              object : this.el
            },
          });

          //To this element
          this.el.dispatchEvent(event_button)
          console.log('Emitting event: Button pressed   Time: ', time, '    Object: ', this.el , '    Target: ', this.el );


          //To targets
          if(this.data.eventTargets != null){
            this.data.eventTargets.forEach(function (target) {
              target.dispatchEvent(event_button)
              console.log('Emitting event: Button pressed   Time: ', time, '    Object: ', this.el , '    Target: ', target   );
            }.bind(this))
          }
        }
        else {
          if (this.data.debug) {
            console.debug("Minimum time not reached.");
          }
        }
        this.pressed = false;
      }

    }
  }
});

