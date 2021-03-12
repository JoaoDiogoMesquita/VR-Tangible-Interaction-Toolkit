AFRAME.registerComponent('swipe', {

    schema: {
        middleMarker : {type: 'selector'},
        sideMarker1 : {type: 'selector'},
        sideMarker2 : {type: 'selector'}
    },

    init: function () {
        this.middleMarker = {marker: this.data.middleMarker , trigger : undefined}
        this.sideMarker1 = this.data.sideMarker1;
        this.sideMarker2 = this.data.sideMarker2;
    },



    tick: function () {

        if(this.el.object3D.visible) {
            if(!this.middleMarker.marker.object3D.visible && (this.middleMarker.trigger == undefined || this.middleMarker.trigger == false )){
                this.middleMarker.trigger = true;
            }

            if(this.middleMarker.trigger){
                if(!this.sideMarker1.object3D.visible){
                    console.debug('Emitting event swipe : Type 1');
                    this.el.emit('swipe_event_1');
                    this.middleMarker.trigger = false;
                }
                if(!this.sideMarker2.object3D.visible){
                    console.debug('Emitting event swipe : Type 2');
                    this.el.emit('swipe_event_2');
                    this.middleMarker.trigger = false;
                }
            }
        }



    }

});

//testa tempos
//se sim evento
//se nao apaga teempos demorados
//
//
//eventos: swipe right, swipe left


