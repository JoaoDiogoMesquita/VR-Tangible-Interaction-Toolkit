<h1 align="center">VR Tangible Interaction Toolkit</h1>

<h2 align="center">A-Frame Shake Detector Component</h2>
[A-Frame](https://aframe.io) component to detect shake movement of tangible objects detected with fiducial markers.

### shake-detector

#
| Property | Description | Type | Default Value |
| -------- | ----------------- | ---- |------------- |
| switchInterval | Maximum time (in ms) defined between two direction switches. | int |   1000     |
| minimumSwitchTimes | Number of direction switches to emit event. | int | 3 |
| minimumDistance | Mimimum virtual distance to count movement between direction switches valid. | float | 0.5 |
| eventTargets | Optional targets to emit event. | selectorAll |  |
| axis | Axis to detect movement switches. | array | ['x', 'y', 'z'] |
| debug | Optional parameter to activate debug prints. | boolean  |false |


### Example

Use by directly including the [browser files](examples):

```html
<head>
  <title>Shake Detector Component</title>
  <script src="https://aframe.io/releases/0.9.2/aframe.min.js"></script>
  <script src="https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js"></script>
  <script src="https://unpkg.com/aframe-event-set-component@4.2.1/dist/aframe-event-set-component.min.js"></script>
  <script src="../shake_detector.js"></script>
</head>


<body>
  <a-scene arjs>
    <a-camera>

        <a-marker preset = 'hiro'  shake-detector = "switchInterval: 500 ; minimumSwitchTimes: 3 ; minimumDistance: 0.3 ; eventTargets:#myBox2; axis:y ; debug: true;">
          <a-box></a-box>
        </a-marker>

        <a-box position="0 0 -10" id = "myBox2" event-set__shake_event_y = "color:yellow; position: 0 0 -5" ></a-box>
    
    </a-camera>
  </a-scene>
</body>
```

