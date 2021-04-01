AFRAME.registerComponent('mt-button', { //acho melhor encontrar um prefixo para os componentes da familia: mt de marker tangible, mas se pensar noutro melhor, optimo

  schema: {
    referenceMarker: {type: 'selector'}, // no html estava referenceMarker e parece-me melhor
    eventTargets: {type: 'selectorAll'},
    minimumTime : {type: 'int', default: 250}, // parece um valor mais sensato
    debug : {type: 'boolean', default: false}
  },

  init: function () {
    console.log("Initializing mt-button component"); //menos enfase dado que não é uma mensagem muito importante
  },
  update: function() {
    this.button = this.el;
    this.reference = this.data.referenceMarker;

    this._reset();
    this.minimumTime = this.data.minimumTime;
    console.info("Debug mode set to ", this.data.debug)
    if (this.data.debug) {
      console.debug("Reference marker set to ", this.reference);
      console.debug("Minimum time set to ", this.minimumTime);
    }

  },

  _reset: function() {
    this.pressed = false;
    this.timePressed = 0;
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
        } else {
          if (this.data.debug) {
            console.debug("Minimum time not reached.");
          }
        }
        this.pressed = false;
      }
    } else {
      this._reset();
    }
  }
});

