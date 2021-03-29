# Button Component
A component that aims to give the user the possibility of a button interaction. The systems record in real time the visibility of the reference and auxiliary markers and emit an event to the reference marker (or additional targets) every time the auxiliary marker is occult for time defined by the user.

For [A-Frame](https://aframe.io).

#
### button


| Property | Description | Type | Default Value |
| -------- | ----------------- | ---- |------------- |
| referenceMarker | A reference to another marker that need to be in scene to detect the interaction. | selector |     |
| eventTargets | Optional targets to emit event. | selectorAll |  |
| minimumTime | Minimum time (in ms) that the marker need to be ocult to emit event. | int | 1000 |
| debug | Optional parameter to activate debug prints. | boolean  |false |


#
### How to use
The component can be attached to a reference  marker object like in the following example:
```html
<a-marker  preset='kanji' id = 'Ref'>
    <a-sphere color="red" radius="0.5"></a-sphere>
</a-marker>

<a-marker preset='hiro'  button = "referenceMarker: #Ref ; targets: #box; minimumTime : 1500 ; debug: false ; ">
    <a-sphere color="yellow" radius="0.5"></a-sphere>
</a-marker>

<a-box id="'box"></a-box>
```


### Events
| Name | Description |
| -------- | ----------------- |
| event_button_pressed| Event corresponding to the pressing of the button (marker).

An event called event_button_pressed will be emitted every time the interaction detected.
```js
 const event_button = new CustomEvent('event_button_pressed', {
    detail: {
      time: time ,
      object : this.el
    }
});
```
Inside this event, there will be some fields with additional information like a timestamp (in ms) and the object that works as reference.

```js
document.getElementById('id').addEventListener('event_button_pressed', e=>{
    console.log('Button pressed with reference +', e.detail.object, '. Time: ', e.detail.time)
})
```
### Examples

* [Example 1](examples/example1.html)