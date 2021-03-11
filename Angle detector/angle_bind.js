AFRAME.registerComponent('angle-bind', {
  schema: {
    threshold : {type: 'float', default: 20}, //threshold parece um nome mais adequado, valor deve ser em graus
    targets: {type: 'selectorAll'}, // no component shake este parametro chama-se eventTargets: uniformizar
    axes : {type: 'array', default: ['x','y','z']}, // no component shake, este parametro chama-se axis: uniformizar
  },

  init: function () {
    this.firstIteration = true;
    this.lastAngle = new THREE.Vector3();
    this.actualAngle= new THREE.Vector3();
    this.inputAngle = new THREE.Vector3();
    this.savedAngle = new THREE.Vector3();
  },



  tick: function () {
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

    //Actual input angle
    this.inputAngle.x = this.actualAngle.x - this.lastAngle.x
    this.inputAngle.y = this.actualAngle.y - this.lastAngle.y
    this.inputAngle.z = this.actualAngle.z - this.lastAngle.z

    //Process nly in the selected axes for optimal perfomance
    this.data.axes.forEach(function (axis){
      if(this.inputAngle[axis] != 0) {
        this.savedAngle[axis] += this.inputAngle[axis];
        //console.log(axis , ' ->' , 'actual: ', this.actualAngle[axis], ' input: ',this.inputAngle[axis], 'saved: ',this.savedAngle[axis])
      }

      //Is the saved angle high enough?
      if(Math.abs(this.savedAngle[axis]) >= THREE.Math.degToRad(this.data.threshold)) {

        //Check if the rotation is positive or negative and name event
        let event_str = 'rotation_event_' + axis
        if (this.savedAngle[axis] > 0 ) {
          event_str += '_pos';
        } else {
          event_str += '_neg';
        }

        // Restart saved angle variable
        this.savedAngle[axis] = this.savedAngle[axis] % THREE.Math.degToRad(this.data.threshold);

        //Emit events to this object and targets
        this.el.emit(event_str)
        this.data.targets.forEach(function (target) {
          if (target != null) {
            console.debug('Emitting event: Rotation of', THREE.Math.degToRad(this.data.threshold), 'radians in ', axis, ' to:<', target, '>');
            target.emit(event_str);
          }
        }.bind(this))

      }
    }.bind(this)
    )
  }

});

