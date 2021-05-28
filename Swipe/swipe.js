AFRAME.registerComponent('mt-swipe', {

    schema: {
        markers : {type: 'selectorAll'},
        sequences : {type: 'string'},
        eventTargets: {type: 'selectorAll'},
        maximumTime : {type : 'int', default: 10000},
        hasReference : {type: 'boolean', default: true},
        debug : {type: 'boolean', default: false}
    },

    init: function () {
        console.log("Initializing mt-swipe component");
    },

    update: function(){
        this.maximumTime= this.data.maximumTime;
        this.hasReference = this.data.hasReference;
        this.sequences = []
        this.markers = []
        this.covered = [];
        this.lastCovered = {id: undefined , time : undefined};

        //Structure markers
        for(let i=0; i < this.data.markers.length; i++){
            this.markers.push({id: i+1 , marker: this.data.markers[i] })
        }

        //Structure sequences
        var aux = this.data.sequences.split(',')
        for(let i=0; i<aux.length; i++){
            this.sequences.push(aux[i].split(' '))
        }

        console.info("Debug mode set to ", this.data.debug)
        if (this.data.debug) {
            console.log('Markers: ', this.markers)
            console.log('Sequences: ', this.sequences)
        }
    },


    tick: function (time) {
        if((this.el.object3D.visible && this.hasReference ) || !this.hasReference) {

            //if the lastCovered variable was already identified as part of a sequence it shouldn't be in the condition
            if(this.covered.length == 0)
                this.lastCovered = {id: undefined , time : undefined}

            //See which marker are visible or not and update covered structure
            this.markers.forEach(function (elem){
                if(!elem.marker.object3D.visible &&  this.lastCovered.id != elem.id && this.lastCovered.time != time){
                    var newCovered = {id: elem.id , time: time}
                    this.covered.push(newCovered)
                    this.lastCovered = newCovered
                    if(this.data.debug)
                        console.debug(this.covered.map(x => x.id))
                }
            }.bind(this))

            //Filter covered structure by time passed, given the maximum time
            this.covered = this.covered.filter(item => this.maximumTime > time - item.time)

                //Test if a sequence was done
            var sequenceIndex = 0;
            this.sequences.forEach(function(sequence){
                sequenceIndex++;
                var firstIndex = this.covered.findIndex(item => item.id == sequence[0])
                var match = undefined;
                var elemIndex = firstIndex;

                if(elemIndex != -1) {
                    match = true;
                    for (var i = 1; i < sequence.length; i++) {
                        elemIndex++
                        if(this.covered[elemIndex] != null && this.covered[elemIndex].id == sequence[i]){
                            match = true
                        }
                        else{
                            match = false
                        }
                    }

                    if(match == true ){
                        const event_swipe = new CustomEvent('event_swipe', {
                            detail: {
                                time: time ,
                                object : this.el ,
                                sequence : sequence ,
                                sequenceIndex : sequenceIndex ,
                            }
                        });


                        this.el.dispatchEvent(event_swipe)
                        if(this.data.debug)
                            console.debug('event_swipe', event_swipe)
                        if(this.data.eventTargets != null){
                            this.data.eventTargets.forEach(function (target) {

                                target.dispatchEvent(event_swipe)

                                if(this.data.debug)
                                    console.debug('event_swipe', event_swipe)


                            }.bind(this))
                        }

                        this.covered.splice(firstIndex , sequence.length)

                    }
                }
            }.bind(this))
        }
    }
});



