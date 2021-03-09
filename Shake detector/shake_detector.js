AFRAME.registerComponent('shake_detector', {
  schema: {
    switch_interval : {type: 'int', default: 1000},
    minimumSwitchTimes : {type: 'int', default: 3},
    minimumDistance : {type: 'float', default: 0.5},
    event_targets: {type: 'selectorAll'},
    axis : {type: 'array', default: ['x', 'y', 'z']}
  },


  init: function (){
    console.log("Initializing shake_detector")
    this.actualDirection = new THREE.Vector3();
    this.lastDirection = new THREE.Vector3();
    this.lastPos =   new THREE.Vector3();
    this.actualPos =   new THREE.Vector3();
    this.switch = {lastSwitchTime : new THREE.Vector3(), switchCount : new THREE.Vector3() }
    this.movementDistance = new THREE.Vector3();
    this.minimumDistance = this.data.minimumDistance;
  },

  tick: function (time) {
    //Update direction and positon variables

    this.lastPos = Object.assign({}, this.actualPos);
    this.actualPos = {
      x: this.el.object3D.position.x,
      y: this.el.object3D.position.y,
      z: this.el.object3D.position.z
    }
    this.lastDirection = Object.assign({}, this.actualDirection);
    this.actualDirection = {
      x: this.actualPos.x - this.lastPos.x,
      y: this.actualPos.y - this.lastPos.y,
      z: this.actualPos.z - this.lastPos.z
    }
    //Direction switch happened

    this.data.axis.forEach(function (elem) {
        if((this.actualDirection[elem] * this.lastDirection[elem]) < 0 ){
          let time_between_switch = time - this.switch.lastSwitchTime[elem];

          if(Math.abs(this.movementDistance[elem]) > this.data.minimumDistance ){
             //console.log('Distance OK in ' ,[elem],' => ', Math.abs(this.movementDistance[elem]),  ' > ', this.minimumDistance)

            //To limit movements that take a long time
            if(time_between_switch  < this.data.switch_interval){
              //  console.log('Time OK', time_between_switch)
              this.switch.switchCount[elem] += 1;
              this.movementDistance[elem] = 0;
            }
            //Too much time passed since last switch, so we should ignore this switch and restart counters
            else{
              this.movementDistance[elem] = 0;
              this.switch.switchCount[elem] = 0;
              //  console.log('Too much time: ' , time_between_switch)
            }
            //Record when the movement started to verify the time frame later in the next switch
            this.switch.lastSwitchTime[elem] = time;
          }
          else{
            // console.log('Distance OK => ', Math.abs(this.movementDistance[elem]),  ' < ', this.minimumDistance)
          }
        }
        //If direction still the same just increment variable
        else{
          this.movementDistance[elem] += this.actualDirection[elem];
        }



      if(this.switch.switchCount[elem] > this.data.minimumSwitchTimes) {

        let event_str = 'shake_event_' + [elem];
        this.el.emit(event_str);

        if (this.data.event_targets != []) {

          this.data.event_targets.forEach(element => {
            if (element != null) {
              console.debug('Emitting event ', [elem], ' to:<', element, '>');
              element.emit(event_str);
            }
          });
        }

        //Restart counters
        this.switch.lastSwitchTime[elem] = 0;
        this.switch.switchCount[elem] = 0;
        this.movementDistance[elem] = 0;
      }
      }.bind(this)
    );
  },
});