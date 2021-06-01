# Angle Detector Double Marker Component
For [A-Frame](https://aframe.io).

A part of the [VR Tangible Interaction Toolkit](../), a family of components that aims to facilitate the programing of VR interactions with fiducial markers.

This component aims to give the user the possibility of attach the angle rotation between two markers to a variable.
The systems record in real time the angle and emit an event to the rotating object (or additional targets) every time the rotations passes the input threshold.


|||
|------------|-------------|
| ![](images/rotate.gif) | ![](images/rotate_vr.gif)  | 



### mt-angle-detector-dm
| Property | Description | Type | Default Value |
| -------- | ----------------- | ---- |------------- |
| threshold | An event will be emitted every time this threshold is reached . | float | 20    |
| secondMarker | A reference to the second marker. | selector | #id |
| eventTargets | Optional targets to emit event. | selectorAll | #id1, #id2 |
| movement | The type of movement to be detected | int | 1 or 2 |
| debug | Optional parameter to activate debug prints. | boolean  |false |

#
### How to use
The component can be attached to an object like in the following example:
```html
<a-marker id="my2" preset="kanji" mt-angle-detector-dm= "threshold: 10; movement : 1; secondMarker: #my1; eventTargets: #box2, #box1 ; debug:true;">
    <a-box id='box2' color = "red"></a-box>
</a-marker>

<a-marker id="my1" preset="hiro" >
    <a-box  id='box1' color="red" ></a-box>
</a-marker>
```

#
### Events

| Name | Description |
| -------- | ----------------- |
| event_rotation_dm | Event corresponding to the positive rotation between the two markers . |

An event called rotation_event will be emitted every time the interaction detected. Inside this event, there will be some fields with additional information like a timestamp (in ms) the axis where the rotation was detected, the direction (positive or negative), and the object rotated.
```js
const event_rotation_double = new CustomEvent('event_rotation_dm', {
  detail: {
    time: time,
    object1: this.el,
    object2: this.secondMarker,
    angle: level
  },
});
```

The additional information can be accessed in the 'detail' field of the 'event_rotation_dm' like in the following example:
```js
document.getElementById('id').addEventListener('event_rotation_dm', e=>{
    if(e.detail.direction == 'positive'){
        console.log('Rotation of +', e.detail.angle, ' angles between ', e.detail.object1, ' and ', e.detail.object2 ,'.')    
    }   
    else if(e.detail.direction == 'negative'){
        console.log('Rotation of -', e.detail.angle, ' angles between ', e.detail.object1, ' and ', e.detail.object2 ,'.')    
}
})
```



### Examples

* [Example 1](examples/example1.html)
