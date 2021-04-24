AFRAME.registerComponent('mt-angle-detector', {
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
    console.info("Debug mode set to ", this.data.debug)
  },



  tick: function (time) {
    //Ignore first rotation, because of the agressive change in coordenates from 0,0,0 to first position
    if(this.firstIteration && this.el.object3D.visible){
      this.firstIteration = false;
      this.lastAngle.x =  this.el.object3D.rotation.x
      this.lastAngle.y =  this.el.object3D.rotation.y
      this.lastAngle.z =  this.el.object3D.rotation.z
    } else{
      this.lastAngle.copy(this.actualAngle)
    }

    //Actual position
    this.actualAngle.x = this.el.object3D.rotation.x
    this.actualAngle.y = this.el.object3D.rotation.y
    this.actualAngle.z = this.el.object3D.rotation.z



    //Process only in the selected axes for optimal perfomance
    this.data.axis.forEach(function (axis){
      //Actual input angle
      this.inputAngle[axis] = this.actualAngle[axis] - this.lastAngle[axis]

      if( THREE.Math.radToDeg(Math.abs(this.inputAngle[axis])) > this.data.threshold ){
        this.inputAngle[axis] = 0;
      }

      if(this.inputAngle[axis] != 0) {
        this.savedAngle[axis] += this.inputAngle[axis];
        if(this.data.debug)
          console.log('ATUAL' , THREE.Math.radToDeg(this.actualAngle[axis]), '\t\t LAST',THREE.Math.radToDeg( this.lastAngle[axis]),  '\t\t input', THREE.Math.radToDeg(this.inputAngle[axis]) , '\t\t SAVED  ',THREE.Math.radToDeg(this.savedAngle[axis]) )
      }

      //Is the saved angle high enough?
      if(Math.abs(this.savedAngle[axis]) >= THREE.Math.degToRad(this.data.threshold)) {

        //Emit events to this object and targets
        let direction = ''
        if (this.savedAngle[axis] > 0 ) {
          direction = 'positive';
        }
        else {
          direction = 'negative';
        }
        const event_rotation = new CustomEvent('event_rotation', {
          detail: {
            time: time,
            axis: axis ,
            direction : direction,
            object : this.el,
            threshold: this.threshold
          },
        });
        this.el.dispatchEvent(event_rotation)

        if(this.data.eventTargets != null) {
          this.data.eventTargets.forEach(function (target) {
            target.dispatchEvent(event_rotation);


            console.log('Emitting event', event_rotation, ' : Rotation of', this.data.threshold, 'degrees (', THREE.Math.degToRad(this.data.threshold), ' rad) in ', axis, ' to:<', target, '>');

          }.bind(this))
        }


        // Restart saved angle variable
        this.savedAngle[axis] = 0;

      }

      }.bind(this)
    )
  }

});

