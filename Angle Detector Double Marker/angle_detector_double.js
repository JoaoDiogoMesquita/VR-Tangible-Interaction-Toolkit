AFRAME.registerComponent('mt-angle-detector-dm', {
  schema: {
    secondMarker: {type: 'selector'},
    threshold: {type: 'float', default: 20},
    eventTargets: {type: 'selectorAll'},
    movement: {type: 'int', default: 1 },
    debug: {type: 'boolean', default: false}
  },

  init: function () {
    console.log("Initializing mt-angle detector component double marker");
  },


  update: function () {
    console.info("Debug mode set to ", this.data.debug)
    this.firstMarker = this.el;
    this.secondMarker = this.data.secondMarker;
    this.threshold = this.data.threshold;
    this.angle = new THREE.Vector3();
    this.plane1 = new THREE.Plane();
    this.plane2 = new THREE.Plane();
    this.lastAngle = 0;
  },


  tick: function (time) {
    if (this.firstMarker.object3D.visible && this.secondMarker.object3D.visible) {
      if(this.data.movement == 1){
        this.plane1.normal.set(0, -1, 0).applyQuaternion(this.firstMarker.object3D.quaternion);
        this.plane2.normal.set(0, 1, 0).applyQuaternion(this.secondMarker.object3D.quaternion);
      }
      else{
        this.plane1.normal.set(0, 0, 1).applyQuaternion(this.firstMarker.object3D.quaternion);
        this.plane2.normal.set(0, 0, 1).applyQuaternion(this.secondMarker.object3D.quaternion);
      }

      this.angle = THREE.Math.radToDeg(this.plane1.normal.angleTo(this.plane2.normal));

      var level = 0;
      if (level <= this.data.threshold) {
        level = Math.floor(this.angle / this.data.threshold) * this.data.threshold;
      }
      if (this.lastAngle != level)
        this.send_event(time, level)

      this.lastAngle = level

    }

  },

  send_event: (function (time, level) {
    const event_rotation_double = new CustomEvent('event_rotation_dm', {
      detail: {
        time: time,
        object1: this.el,
        object2: this.secondMarker,
        angle: level
      },
    });
    this.el.dispatchEvent(event_rotation_double);
    console.log('Emitting event', event_rotation_double, ' : Angle of', level, 'between ', this.firstMarker, ' and ', this.secondMarker, ' to:<', this.el, '>');

    if (this.data.eventTargets != null) {
      this.data.eventTargets.forEach(function (target) {
        target.dispatchEvent(event_rotation_double);
        console.log('Emitting event', event_rotation_double, ' : Angle of', level, 'between ', this.firstMarker, ' and ', this.secondMarker, ' to:<', target, '>');
      }.bind(this))
    }
  }),

});

