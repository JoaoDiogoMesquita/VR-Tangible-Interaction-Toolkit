AFRAME.registerComponent("mt-noise-controller", {
    schema: {
        maximum_time: {type: 'int', default: 1000},
        debug: {type: 'boolean', default: false},
    },

    init: function () {
        console.log("Initializing mt-noise-controller");
        this.visible = undefined;
        this.firstLoss = true;


        this.el.addEventListener("markerFound", function () {

            clearTimeout(this.timeout);
            this.visible = true;
            this.firstLoss = true;

            if (this.data.debug) {
                console.log("MARKER FOUND.");
                console.log("Timeout clear.");
            }
        }.bind(this));

        this.el.addEventListener("markerLost", function () {
            this.el.object3D.visible = true;
            this.visible = false;
        }.bind(this));
    },


    tick: function () {

        if(this.visible == false && this.firstLoss == true){

            this.timeout = setTimeout(() => {
                if (this.visible == false) {
                    this.el.object3D.visible = false;
                    if(this.data.debug)
                        console.log("Marker scene gone.")
                }
            }, this.data.maximum_time);

            if (this.data.debug)
                console.log("MARKER LOST.");

            this.firstLoss = false;
        }



    },
});