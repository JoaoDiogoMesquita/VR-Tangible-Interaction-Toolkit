AFRAME.registerComponent('mt-angle-detector-sm', {
  schema: {
    threshold : {type: 'float', default: 20},
    eventTargets: {type: 'selectorAll'},
    axis : {type: 'array', default: ['x','y','z']},
    debug : {type: 'boolean', default: false}
  },

  init: function () {
    console.log("Initializing mt-angle detector component");

  },

  update: function(){
    this.firstIteration = true;
    this.lastAngle = new THREE.Vector3();
    this.actualAngle= new THREE.Vector3();
    this.inputAngle = new THREE.Vector3();
    this.savedAngle = new THREE.Vector3();
    this.plane = new THREE.Plane();
    this.threshold = this.data.threshold;
    console.info("Debug mode set to ", this.data.debug)
  },



  tick: function (time, timeDelta) {
    if (this.el.object3D.visible) {
      //Ignore first rotation, because of the agressive change in coordenates from 0,0,0 to first position
      if (this.firstIteration) {
        this.firstIteration = false;
        this.lastAngle.x = this.el.object3D.rotation.x
        this.lastAngle.y = this.el.object3D.rotation.y
        this.lastAngle.z = this.el.object3D.rotation.z
      } else {
        this.lastAngle.copy(this.actualAngle)
      }

      //Actual position
      this.actualAngle.x = this.el.object3D.rotation.x
      this.actualAngle.y = this.el.object3D.rotation.y
      this.actualAngle.z = this.el.object3D.rotation.z


      //Process only in the selected axes for optimal perfomance
      this.data.axis.forEach(function (axis) {
          //Calculate input angle
          //Both positive side
          if (this.actualAngle[axis] > 0 && this.lastAngle[axis] > 0) {
            this.inputAngle[axis] = this.actualAngle[axis] - this.lastAngle[axis]
          }

          //Both negative side
          else if (this.actualAngle[axis] < 0 && this.lastAngle[axis] < 0) {
            if(this.actualAngle[axis] < Math.PI /2)
            this.inputAngle[axis] = this.actualAngle[axis] - this.lastAngle[axis]
          }

          //Transition from positive side to negative
          else if (this.actualAngle[axis] < 0 && this.lastAngle[axis] > 0) {
            //  -> -pi <- pi
            if (Math.abs(this.actualAngle[axis]) > Math.PI / 2) {
              this.inputAngle[axis] = (Math.PI - Math.abs(this.actualAngle[axis])) + (Math.PI - this.lastAngle[axis])
            }
            // -0.1 <- 0.1
            else {
              this.inputAngle[axis] = Math.abs(this.actualAngle[axis]) + this.lastAngle[axis]
            }
          }

          //Transition from negative side to positive
          else if (this.actualAngle[axis] > 0 && this.lastAngle[axis] < 0) {
            //-pi -> pi
            if (Math.abs(this.actualAngle[axis]) > Math.PI / 2) {
              this.inputAngle[axis] = (Math.PI - this.actualAngle[axis]) + (Math.PI - Math.abs(this.lastAngle[axis]))
            }
            //-0.1 -> 0.1
            else {
              this.inputAngle[axis] = this.actualAngle[axis] + Math.abs(this.lastAngle[axis])
            }
          }

          this.savedAngle[axis] += this.inputAngle[axis];

          if (this.data.debug)
            console.log('ATUAL', this.actualAngle[axis] , '\t\t LAST', THREE.Math.radToDeg(this.lastAngle[axis]), '\t\t input', THREE.Math.radToDeg(this.inputAngle[axis]), '\t\t SAVED  ', THREE.Math.radToDeg(this.savedAngle[axis]))

          //Has saved angle passed the threshold ?
          if (Math.abs(this.savedAngle[axis]) >= THREE.Math.degToRad(this.threshold)) {
            //Emit events to this object and targets
            let direction = ''
            if (this.savedAngle[axis] > 0) {
              direction = 'positive';
            } else {
              direction = 'negative';
            }
            const event_rotation = new CustomEvent('event_rotation', {
              detail: {
                time: time,
                axis: axis,
                direction: direction,
                object: this.el,
                threshold: this.threshold
              },
            });

            this.el.dispatchEvent(event_rotation)

            if (this.data.eventTargets != null) {
              this.data.eventTargets.forEach(function (target) {
                target.dispatchEvent(event_rotation);
                console.log('Emitting event', event_rotation, ' : Rotation of', this.data.threshold, 'degrees (', THREE.Math.degToRad(this.data.threshold), ' rad) in ', axis, ' to:<', target, '>');
              }.bind(this))
            }
            // Restart saved angle variable
            if(this.savedAngle[axis] > 0 ) {
              this.savedAngle[axis] = this.savedAngle[axis] - THREE.Math.degToRad(this.threshold);
            }
            else if(this.savedAngle[axis] < 0){
              this.savedAngle[axis] = this.savedAngle[axis] + THREE.Math.degToRad(this.threshold);
            }
          }

        }.bind(this)
      )
    }
  }

});

