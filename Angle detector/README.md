#Angle Detector Component
A component that aims to give the user the possibility of attach the angle rotation of a virtual object to a variable. The systems record in real time the angle in a chosen axis and emit an event to the rotating object (or additional targets) every time the rotations passes the input threshold.

For [A-Frame](https://aframe.io).

### angle-detector
| Property | Description | Type | Default Value |
| -------- | ----------------- | ---- |------------- |
| threshold | An event will be emitted every time this threshold is reached . | float | 20    |
| eventTargets | Optional targets to emit event. | selectorAll |  |
| axis | Axis to detect rotation. | array | ['x', 'y', 'z'] |
| debug | Optional parameter to activate debug prints. | boolean  |false |

#
### How to use
The component can be attached to an object like in the following example:
```html
<a-box angle-detector="threshold:45; eventTargets: #box1,#box2,#box3; axis:y; debug: True" ></a-box>
```

#
###Events

| Name | Description |
| -------- | ----------------- |
| rotation_event| Event corresponding to the positive rotation of the marker . |

An event called rotation_event will be emitted every time the interaction detected. Inside this event, there will be some fields with additional information like a timestamp (in ms) the axis where the rotation was detected, the direction (positive or negative), and the object rotated.
```js
const rotation_event = new CustomEvent('rotation_event', {
    detail: {
      time: time,
      axis: axis ,
      direction : direction,
      threshold: this.threshold,
      object : this.el
    },
});
```

The aditional information can be acessed in the 'detail' field of the 'rotation_event' like in the following example:
```js
document.getElementById('id').addEventListener('rotation_event', e=>{
    if(e.detail.direction == 'positive'){
        console.log('Rotation of +', e.detail.threshold, ' angles in ', e.detail.axis, ' axis.')
    }   
    else if(e.detail.direction == 'negative'){
        console.log('Rotation of -', e.detail.threshold, ' angles in ', e.detail.axis, ' axis.')    
}
})
```



###Examples

* [Example 1](examples/example1.html)