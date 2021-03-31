# A-Frame Tutorial and Component and Usability Testing

## Introduction

A-Frame is an open-source web framework for building virtual reality (VR) experiences. A-Frame is an entity component system framework for Three.js where developers can create 3D and WebVR scenes using HTML. HTML provides a familiar authoring tool for web developers and designers while incorporating a popular game development pattern used by engines such as Unity.
## Getting Started

A-Frame can be developed from a plain HTML file without having to install anything. To get started, create an `.html` file and include the A-Frame script in the `<head>` tag:

```html
<html>
  <head>
    <script src="https://aframe.io/releases/1.1.0/aframe.min.js"></script>
  </head>
  
<body>
    <a-scene>
      
        <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
              
        <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
              
        <a-cylinder
                position="1 0.75 -3"
                radius="0.5"
                height="1.5"
                color="#FFC65D">
        </a-cylinder>
              
        <a-plane
                position="0 0 -4"
                rotation="-90 0 0"
                width="4"
                height="4"
                color="#7BC8A4">
                
        </a-plane>
        <a-sky color="#ECECEC"></a-sky>
    </a-scene>
  </body>
</html>
```

## Tutorial

All the a-frame action happens within the `a-scene` entity. In the example above, we have the scene tag with a handful of a-frame entities. These entities represented as HTML elements are called **_primitives_**.

### Primitives

Entities or primitives can be described as a 3D object which can take different geometric shapes, such as a box, sphere, or a cylinder. To see every primitive that A-Frame provides, refer to the [A-Frame documentation](https://aframe.io/docs/1.1.0/introduction/), at the bottom of the documentation navigation sidebar.

For this tutorial, we will be focusing on the most basic primitives, detailed in the table below.

| Primitive      | Description                                                        |
| -------------- | ------------------------------------------------------------------ |
| `<a-box>`      | The box primitive creates shapes such as boxes, cube, or walls     |
| `<a-cylinder>` | The cylinder primitive is used to create tubes and curved surfaces |
| `<a-sphere>`   | The sphere primitive creates a spherical or polyhedron shapes      |
| `<a-plane>`    | The plane primitive is used to create flat surfaces                |
| `<a-sky>`      | The sky primitive adds a background color or 360° image to a scene |

### Components

If we use the primitives as presented in the table above, the created primitives appear in their default form. To change its attributes, we associate **_components_** with these entities such as **position**, **rotation**, **color**, and **scale**. In A-Frame, components have the same syntax as an HTML attribute:

`<a-box position="0 0 -4" color="#FF0000"`

The code above creates a red box in the position given by the (0, 0, -4) coordinates. A-Frame uses a right-handed coordinate system where the negative Z axis extends into the screen.

#### Position

The position component places entities at certain spots in 3D space. Position takes a coordinate value as three space-delimited numbers.

`<a-sphere position="0 1 -1"></a-sphere>`

A-Frame uses a [right-handed coordinate system](https://image.slidesharecdn.com/gotoandskitalk-workflowsfornextgen3dgamesandinteraction-120131150617-phpapp02/95/slide-17-1024.jpg) where the negative Z axis extends into the screen.

#### Rotation

The rotation component defines the orientation of an entity in degrees. It takes x, y, and z, as three space-delimited numbers indicating degrees of rotation.

`<a-box rotation="45 90 180"></a-box>`

#### Scale

The scale component defines a shrinking, stretching, or skewing transformation of an entity. It takes three scaling factors for the X, Y, and Z axes.

`<a-plane scale="0.5 1 2"></a-plane>`

#### Size

The unit of measurement used in A-Frame is the meter. To define the size in A-Frame we have different attributes depending on the object's geometry. The box primitive takes the **width**, **height**, and **depth** attributes to control the size whereas the sphere and circle take the **radius** attribute. A cylinder uses both the **height** and the **radius** attribute:

```html
<a-box position="2 0 -5" width="1" height="2" depth="1" color="#FFAA00"></a-box>

<a-sphere position="-2 0 -5" radius="0.75" color="red"></a-sphere>

<a-cylinder
  position="0 0 -5"
  radius="1"
  height="1.5"
  color="#212121"
></a-cylinder>
```

### Animations

The animation component lets us animate and tween values including:

- Component values such as position, visibility, scale, and rotation.
- Component property values such as light, intensity, etc.

As example, below we have a translating box:

```html
<a-box
  position="-1 1.6 -5"
  animation="property: position; to: 1 8 -10; dur: 2000; easing: linear; loop: true"
  color="tomato"
></a-box>
```

See more about the animation component in the [A-Frame documentation](https://aframe.io/docs/1.1.0/components/animation.htm)

### Entities

So far we have mentioned entities numerous times during this brief introduction to A-Frame, so what is the definition of an entity? In A-Frame entities are placeholders objects to which we plug in components to provide them appearance, behavior, and functionality.

We can attach components to it to make it render something or do something. To give it shape and appearance, we can attach the [geometry](https://aframe.io/docs/1.0.0/components/geometry.html) and [material](https://aframe.io/docs/1.0.0/components/material.html) components.
The geometry component provides a basic shape fo an entity. The `primitive` property defines the general shape.
The material component gives appearance to an entity. We can define properties such as color, opacity, or texture.
Entities are inherently attached with the **position**, **rotation**, and **scale** components.
Consider the following example:

```html
<a-entity
  geometry="primitive: box"
  material="color: red"
  position="2 2 -10"
  scale="2 2 1"
>
</a-entity>
```

Refer to the [A-Frame documentation](https://aframe.io/docs/1.0.0/core/entity.html#sidebar) to see further more information.

### Creating and register a component

Components of A-Frame's are JavaScript modules that can be mixed, matched, and composed onto entities to build appearance, behavior, and functionality. We can register a new component in JavaScript and use it declaratively from the DOM. Components are configurable, reusable, and shareable. Most code in an A-Frame application should live within components [[1]](https://aframe.io/docs/1.1.0/introduction/writing-a-component.html).

To use a component, we first must define it before the `<a-scene>` tag, as example:

```html
<html>
  <head>
    <!-- Import external component -->
    <script src="foo-component.js"></script>
  </head>
  <body>
    <script>
      // Or inline before the <a-scene>.
      AFRAME.registerComponent("bar", {
        // ...
      });
    </script>

    <a-scene> </a-scene>
  </body>
</html>
```

Let's have a first look to a basic component to get the general idea. This component will log a simple message once when the component’s entity is attached using the `.init()` handler. But first, we need to **register** the component.
Components are registered with `AFRAME.registerComponent()`. The first argument is the name of the component, which will be used as the HTML attribute name, and for this example it will be `hello-world`. The second is a JavaScript object of methods and properties.
In the next example, we have our `init()` handler.

```JavaScript
AFRAME.registerComponent('hello-world', {
  init: function () {
    console.log('Hello, World!');
  }
});
```

Then we can use our `hello-world` component declaratively as an HTML attribute. Do not forget to include the JavaScript file or declare inline before the `<a-scene>` tag.

```html
<html>
  <head>
    <script src="https://aframe.io/releases/1.1.0/aframe.min.js"></script>
    <!-- Import the hello-world component -->
    <script src="hello-world.js"></script>
  </head>
  <body>
    <!-- Attach the component to the scene -->
    <a-scene hello-world> </a-scene>
  </body>
</html>
```

To set a component, rather than via static HTML , is to set it programmatically with `.setAttribute()`. In the example bellow, we set the `hello-world`component on the scene programmatically:

```JavaScript
document.querySelector('a-scene').setAttribute('hello-world', '');
```

Some components have methods available programmatically, and it is not possible to access them directly through HTML. For example, the Vibrotactile component has three internal methods only accessible through JavaScript.
A component's methods can be accessed through the entity from the `.components` object. Consider this example:

```JavaScript
AFRAME.registerComponent('foo', {
  init: function () {
    this.bar = 'baz';
  },

  qux: function () {
    // ...
  }
});
```

To access the `qux`method:

```JavaScript
var fooComponent = document.querySelector('[foo]').components.foo;
fooComponent.qux();
```

We can query for elements containing a component with the attribute selector (i.e., [ COMPONENT_NAME]), as used in the example above.

Refer to the [A-Frame documentation](https://aframe.io/docs/1.1.0/introduction/writing-a-component.html) for more information on creating and register a component.


```html
<html>
  <head>
    <script src="https://aframe.io/releases/1.1.0/aframe.min.js"></script>
    <!-- Import the Shake Detector component -->
    <script src="shake_detector.js"></script>
  </head>
  <body>
    <a-scene>
      <a-box shake-detector = "switchInterval: 500 ; minimumSwitchTimes: 3 ; minimumDistance: 0.3 ; eventTargets:#myBox; axis:y ; debug: true;""></a-box>
    </a-scene>
  </body>
</html>
```

#
### References
[1]- Based on A-Frame tutorial by ZeCanelha https://github.com/ZeCanelha/AFrame-Tutorial/blob/master/README.md

