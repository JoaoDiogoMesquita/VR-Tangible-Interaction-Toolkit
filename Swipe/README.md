#Swipe Detector Component
A component that aims to give the user the possibility of detect swipe movements in a set of fiducial markers. The systems record in real time the occlusion of those markers and emit an event to the object where the component's attached (or additional targets) every time a sequence is detected.

For [A-Frame](https://aframe.io).
### swipe


| Property | Description | Type | Default Value |
| -------- | ----------------- | ---- |------------- |
| markers | The set of markers where will be detected occlusion. | selectorAll |     |
| sequences | The sequences that will be detected, based on the order of the variable markers. (ex: "1 2 3,3 2 1;" )| string |  |
| maximumTime | Maximum time (in ms) to consider movement valid. | int | 1000 |
| hasReference | To select if the markers have a reference or not. If so, it is the element with the component attached. | selectorAll |  |
| eventTargets | Optional targets to emit event. | selectorAll |  |
| debug | Optional parameter to activate debug prints. | boolean  |false |

#
### How to use
The component can be attached to an object that will work as a reference or any other object without a reference like in the following examples:

With reference:
```html
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
```
Without reference:
```html
<a-marker id="my1" type="barcode" value="1"  swipe = "markers:#my1,#my2,#my3; eventTargets: #box1; sequences:1 3 2,2 3 1; maximumTime: 3000; hasReference: False; debug: True;>
    <a-box  color="blue" ></a-box>
</a-marker>

<a-marker id="my3" type="barcode" value="3" >
    <a-box  color="yellow" ></a-box>

<a-marker id="my2" type="barcode" value="2" >
    <a-box color="red" ></a-box>
</a-marker>


</a-marker>
```

####NOTE 
The order of the sequence is made with the order that the markers are in the HMTL file. 
In the reference example the order will be : my1, my2, my3 . 
In the second example (without reference) the order will be : my1, my3, my2. As so, the sequences are different. 
#

###Events
| Name | Description |
| -------- | ----------------- |
| event_swipe| Event corresponding to a swipe interaction detected. 

An event called event_swipe will be emitted every time a sequence is detected. 
```js
const event_swipe = new CustomEvent('event_swipe', {
    detail: {
        time: time ,
        object : this.el ,
        sequence : sequence ,
        sequenceIndex : sequenceIndex ,
    }
})
```

The information related to the event can be accessed in the 'detail' field like in the following example:

```js
document.getElementById('id').addEventListener('event_swipe', e=>{
    console.log('Swipe sequence detected. Sequence: ', e.detail.sequenceIndex, ', ', e.detail.sequence, '. Time: ', e.detail.time)
})
```
 

#
###Examples

* [Example 1](examples/example1.html)