AFRAME.registerComponent('shake-detector', {
  schema: {
    switchInterval : {type: 'int', default: 1000},
    minimumSwitchTimes : {type: 'int', default: 3},
    minimumDistance : {type: 'float', default: 0.5},
    eventTargets: {type: 'selectorAll'},
    axis : {type: 'array', default: ['x', 'y', 'z']},
    debug : {type: 'boolean', default: false}
  },


  init: function (){
    console.log("INITIALIZING SHAKE-DETECTOR COMPONENT : ", this.el )
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

    this.lastPos.copy(this.actualPos);
    this.actualPos = { x: this.el.object3D.position.x, y: this.el.object3D.position.y, z: this.el.object3D.position.z }

    this.lastDirection.copy(this.actualDirection);
    this.actualDirection = { x: this.actualPos.x - this.lastPos.x, y: this.actualPos.y - this.lastPos.y, z: this.actualPos.z - this.lastPos.z }


    this.data.axis.forEach(function (elem) {
        //Direction switch happened
        if((this.actualDirection[elem] * this.lastDirection[elem]) < 0 ){
          let timeBetweenSwitch = time - this.switch.lastSwitchTime[elem];

          if(Math.abs(this.movementDistance[elem]) > this.data.minimumDistance ){
            if(this.data.debug)
              console.log('Distance OK in ' ,[elem],' => ', Math.abs(this.movementDistance[elem]),  ' > ', this.minimumDistance)

            //To limit movements that take a long time
            if(timeBetweenSwitch  < this.data.switchInterval){
              if(this.data.debug)
                console.log('Time between switch ok:', timeBetweenSwitch)
              this.switch.switchCount[elem] += 1;
              this.movementDistance[elem] = 0;
            }
            //Too much time passed since last switch, so we should ignore this switch and restart counters
            else{
              this.movementDistance[elem] = 0;
              this.switch.switchCount[elem] = 0;
              if(this.data.debug)
                console.log('Too much time: ' , timeBetweenSwitch)
            }
            //Record when the movement started to verify the time frame later in the next switch
            this.switch.lastSwitchTime[elem] = time;
          }
          else{
            if(this.data.debug)
              console.log('Distance OK => ', Math.abs(this.movementDistance[elem]),  ' < ', this.minimumDistance)
          }
        }
        //If direction still the same just increment variable
        else{
          this.movementDistance[elem] += this.actualDirection[elem];
        }



        if(this.switch.switchCount[elem] > this.data.minimumSwitchTimes) {

          const shake_event = new CustomEvent('event_shake', {
            detail: {
              time: time ,
              axis: elem,
              object : this.el
            }
          });

          // Send the event to the entity that holds the component
          this.el.dispatchEvent(shake_event)
          console.debug('Emitting event_shake  to: <', this.el, '>');

          if (this.data.eventTargets != []) {
            this.data.eventTargets.forEach(target => {
                // Send event to target
                target.dispatchEvent(shake_event)
                console.debug('Emitting event_shake ', [elem], ' to: <', target, '>');

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
