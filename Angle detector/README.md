<h1 align="center">VR Tangible Interaction Toolkit</h1>

<h2 align="center">A-Frame Angle Detector Component</h2>
[A-Frame](https://aframe.io) component to detect angle rotations on tangible objects detected with fiducial markers.
#

### angle-detector


| Property | Description | Type | Default Value |
| -------- | ----------------- | ---- |------------- |
| threshold | A reference to another marker that need to be in scene to detect the interaction. | selector |     |
| eventTargets | Optional targets to emit event. | selectorAll |  |
| minimumTime | Minimum time (in ms) that the marker need to be ocult to emit event. | int | 1000 |
| debug | Optional parameter to activate debug prints. | boolean  |false |

#
### Example

Use by directly including the [browser files](examples):

```html
<html>
  <head>
    <meta charset="utf-8">
    <title>Angle Detector Component</title>
    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
    <script src="https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js"></script>
    <script src="https://unpkg.com/aframe-event-set-component@4.2.1/dist/aframe-event-set-component.min.js"></script>
    <script src="../angle_detector.js"></script>
  </head>
  
  <body>
    <a-scene>
  
      <a-box  position="-1 0 -10" rotation="0 0 0" color="blue"
              animation="property: rotation;  to: 0 0 90 ; dur : 1000; "
              angle-detector="threshold:45; eventTargets: #box2; axis:z">
      </a-box>
  
  
      <a-box position="1 0 -10" rotation="0 0 0" color="blue"
             animation="property: rotation;  to: 0 0 -90 ; dur : 1000; "
             angle-detector="threshold:45; eventTargets: #box1; axis:z">
      </a-box>
  
  
      <a-box id='box1' position="3 0 -10" color="yellow" event-set__rotation_event_z_neg ="color:red"></a-box>
      <a-box id='box2' position="-3 0 -10" color="purple" event-set__rotation_event_z_pos ="color:red"></a-box>
  
    </a-scene>
  </body>

</html>
```