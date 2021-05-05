AFRAME.registerComponent("mt-noise-controller", {
    schema: {
        maximum_time: { type: "int", default: 1000 },
        debug : {type: 'boolean', default: false},
    },

    init: function () {
        console.log("Initializing mt-noise-controller");
        this.visible = undefined;

        this.el.addEventListener("markerFound", function() {
            if(this.data.debug)
                console.log("Marker ", this.el , " visible.");
            this.visible = true;
        }.bind(this));


        this.el.addEventListener("markerLost", function() {

            if(this.data.debug)
                console.log("Marker ", this.el , " lost.");

            this.visible = false;
            this.el.object3D.visible = true;

            setTimeout(() => {
                if(this.visible == false){
                    this.el.object3D.visible = false;
                }
            }, this.data.maximum_time);

        }.bind(this));
    },

});