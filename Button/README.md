<h1 align="center">VR Tangible Interaction Toolkit</h1>

<h2 align="center">A-Frame Button Component</h2>
[A-Frame](https://aframe.io) component to button click on tangible objects detected with fiducial markers.
#

### button


| Property | Description | Type | Default Value |
| -------- | ----------------- | ---- |------------- |
| referenceMarker | A reference to another marker that need to be in scene to detect the interaction. | selector |     |
| eventTargets | Optional targets to emit event. | selectorAll |  |
| minimumTime | Minimum time (in ms) that the marker need to be ocult to emit event. | int | 1000 |
| debug | Optional parameter to activate debug prints. | boolean  |false |
#
###Events
| Name | Description |
| -------- | ----------------- |
| event_button_pressed| Event corresponding to the pressing of the button (marker).
#
### Example

Use by directly including the [browser files](examples):

```html
<head>
  <title>Button Component</title>
  <script src="https://aframe.io/releases/0.9.2/aframe.min.js"></script>
  <script src="https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js"></script>
  <script src="https://unpkg.com/aframe-event-set-component@4.2.1/dist/aframe-event-set-component.min.js"></script>
  <script src="../button.js"></script>
</head>


<body>
  <a-scene arjs>
    <a-camera>
        <a-marker  preset='kanji' id = 'Ref'>
            <a-sphere color="red" radius="0.5"></a-sphere>
        </a-marker>
    
        <a-marker preset='hiro'  button = "referenceMarker: #Ref ; targets: #box; minimumTime : 1500 ; debug: false ; ">
            <a-sphere color="yellow" radius="0.5"></a-sphere>
        </a-marker>
    </a-camera>
    
    <a-box id='box' position="3 0 -10" color="red" event-set__event_button_pressed="color:green"></a-box>

  </a-scene>
</body>
```