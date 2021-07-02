AFRAME.registerComponent("mt-noise-controller", {
    schema: {
        maximum_time: {type: 'int', default: 1000},
        debug: {type: 'boolean', default: false},
    },

    init: function () {
        //Initialize data structures
        console.log("Initializing mt-noise-controller");
        this.visible = undefined;
        this.firstLoss = true;


        //Event when the marker is found
        this.el.addEventListener("markerFound", function () {

            //Delete the last timeout created
            clearTimeout(this.timeout);
            this.visible = true;
            this.firstLoss = true;

            //Debug
            if (this.data.debug) {
                console.log("MARKER FOUND.");
                console.log("Timeout clear.");
            }
        }.bind(this));

        //Event when the marker is lost
        this.el.addEventListener("markerLost", function () {
            console.log("aqui")
            this.el.object3D.visible = true;
            this.visible = false;
        }.bind(this));
    },


    tick: function () {
        //If the marker isn't visible and it's the first time
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