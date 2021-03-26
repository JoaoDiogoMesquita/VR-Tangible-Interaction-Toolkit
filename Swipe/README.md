<h1 align="center">VR Tangible Interaction Toolkit</h1>

<h2 align="center">A-Frame Swipe Detector Component</h2>
[A-Frame](https://aframe.io) component to detect swipe movement on multiple tangible objects detected with fiducial markers.

## swipe

###Schema
| Property | Description | Type | Default Value |
| -------- | ----------------- | ---- |------------- |
| markers | The set of markers where will be detected oclusion. | selectorAll |     |
| sequences | The sequences that will be detected, based on the order of the variable markers. (ex: "1 2 3,3 2 1;" )| string |  |
| maximumTime | Maximum time (in ms) to consider movement valid. | int | 1000 |
| hasReference | To select if the markers have a reference or not. If so, it is the element with the component attached. | selectorAll |  |
| eventTargets | Optional targets to emit event. | selectorAll |  |
| debug | Optional parameter to activate debug prints. | boolean  |false |


#

###Events
| Name | Description |
| -------- | ----------------- |
| event_swipe| Event corresponding to a swipe interaction detected. 
#
### Example

Use by directly including the [browser files](examples):

```html
<html class="no-js" lang="">

<head>
    <meta charset="utf-8">
    <title>Swipe Component</title>
    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
    <script src="https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js"></script>
    <script src="https://unpkg.com/aframe-event-set-component@4.2.1/dist/aframe-event-set-component.min.js"></script>
    <script src="../swipe.js"></script>
</head>

<body>
    <a-scene arjs='detectionMode: mono_and_matrix; matrixCodeType: 3x3;'>

        <a-camera>

            <a-marker preset="hiro"  swipe = "markers:#my1,#my2,#my3; eventTargets: #box1, #box2 ; sequences:1 2 3,3 2 1; maximumTime: 3000; hasReference: True; debug: True;">
                <a-box id="reference" color="green" ></a-box>
            </a-marker>

            <a-marker id="my1" type="barcode" value="1"  >
                <a-box  color="blue" ></a-box>
            </a-marker>

            <a-marker id="my2" type="barcode" value="2" >
                <a-box color="red" ></a-box>
            </a-marker>

            <a-marker id="my3" type="barcode" value="3" >
                <a-box  color="yellow" ></a-box>
            </a-marker>

        </a-camera>


        <a-box id='box1' position="3 0 -10" color="yellow" event-set__event_swipe_1 ="color:red"></a-box>
        <a-box id='box2' position="-3 0 -10" color="purple" event-set__event_swipe_2 ="color:red"></a-box>

    </a-scene>
</body>

</html>
```

