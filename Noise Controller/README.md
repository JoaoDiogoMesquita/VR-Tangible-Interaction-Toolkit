# Noise Controller Component
For [A-Frame](https://aframe.io).

A part of the [VR Tangible Interaction Toolkit](../), a family of components that aims to facilitate the programing of VR interactions with fiducial markers 
that aims to give the user the possibility to delay the disappearing of the virtual content associated to the marker when the marker disappears. This helps to reduce the effect of noise in the visibility of a marker. 

|||
|------------|-------------|
|![](images/gif.gif) |  ![](images/gif_vr.gif) | 



#
### mt-noise-controller


| Property | Description | Type | Default Value |
| -------- | ----------------- | ---- |------------- |
| maximum_time | Maximum time (in ms) that virtual content of the marker stays in scene before disappear. | int | 1000 |
| debug | Optional parameter to activate debug prints. | boolean  |false |


#
### How to use


The component can be attached to a reference  marker object like in the following example:


```html
<a-marker mt-noise-controller = "maximum_time : 2000; debug: true;">
    <a-cylinder color="red"  
                radius="0.3" 
                height="0.2">
    </a-cylinder>
</a-marker>
```



### Examples

* [Example 1](examples/example1.html)
