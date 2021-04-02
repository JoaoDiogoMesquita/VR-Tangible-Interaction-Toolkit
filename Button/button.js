AFRAME.registerComponent('button', {

  schema: {
    reference: {type: 'selector'},
    eventTargets: {type: 'selectorAll'},
    minimumTime : {type: 'int', default: 1000},
=======
AFRAME.registerComponent('mt-button', {
  schema: {
    referenceMarker: {type: 'selector'},
    eventTargets: {type: 'selectorAll'},
    minimumTime : {type: 'int', default: 250},
>>>>>>> Stashed changes
    debug : {type: 'boolean', default: false}
  },

  init: function () {
<<<<<<< Updated upstream
    console.log("INITIALIZING BUTTON COMPONENT")
=======
    console.log("Initializing mt-button component");
  },

  update: function() {
>>>>>>> Stashed changes
    this.button = this.el;
    this.reference = this.data.reference;
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
          this.data.eventTargets.forEach(function (target) {
            target.dispatchEvent(event_button)
            console.log('Emitting event: Button pressed   Time: ', time, '    Object: ', this.el , '    Target: ', target   );
          }.bind(this))
        }

        this.pressed = false;
      }
    }
  }
});

