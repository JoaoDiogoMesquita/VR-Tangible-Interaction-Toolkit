# Usability Test

  
  
## Introduction
The main goal of this test is to evaluate the usability of four A-Frame components that are part of a programmatic toolkit that aims to assist the development of marker-based tangible interaction in virtual reality. The goal is to make improvements to these components to make them easier to use by programmers.

The A-Frame components that are being evaluated are documented at [https://github.com/JoaoDiogoMesquita/VR-Tangible-Interaction-Toolkit](https://github.com/JoaoDiogoMesquita/VR-Tangible-Interaction-Toolkit)

The test consists of a number of programming tasks that you should solve using the A-Frame components that are mentioned in each task. For each task, an HTML file has been prepared with the basic A-Frame scene. In addition, the scene is already configured with a simulation of the interaction: it has been set up to play videos of a user interacting with a marker-based object, so you just have to program the experience to detect the interactions being made in the video. 

While you are solving the tasks, we ask you to record three things:
- the time spent on each task (rougly, you can just write the time of start and finish in the code in order to keep track)
- how many different attempts at each task (how many different approaches you tried before getting it right) 
- any difficulties encountered (even if you solved the task, report anything that caused you to revise your code - misspelled a parameter name, misunderstood the meaning of a parameter, forgot including &lt;script&gt;, etc.)

We ask that you leave comments in the code indicating the three points mentioned above (time, attempts and difficulties), or anything else you feel could be useful to improve the A-Frame components.

Each task should be solved in its own HTML file, as provided.

If you don't have an IDE or simply prefer to use our programing environment, there are projects on Glitch that you just have to remix to edit and run code on yout browser:
- [Task Set 1](https://glitch.com/edit/#!/placid-fork-dry)
- [Task Set 2](https://glitch.com/edit/#!/sun-maddening-outrigger)
- [Task Set 3](https://glitch.com/edit/#!/fire-telling-steel)
- [Task Set 4](https://glitch.com/edit/#!/fluffy-likeable-rutabaga)


If you have no experience with the A-Frame framework, I would first recommend that you go through the [tutorial](Tutorial.md) that has been prepared with the basics.

If you don't have experience in writing custom A-Frame components, you may wish/it is expected for you to solve only the first task in each task set below.

When you finish implementing the following tasks, please fill in the questionnaire available at this [link](https://docs.google.com/forms/d/e/1FAIpQLSdms9-KCEabZDyMNZmS4afQf8D_5sfwgyNIqRmgVggeELDwMQ/viewform?usp=sf_link) . 


#
## Task Set 1 ([Shake Detector Component](https://github.com/JoaoDiogoMesquita/VR-Tangible-Interaction-Toolkit/tree/master/Shake%20detector))

### Task 1:

Use the Shake Detector component to detect the marker/box shaking and turn the element with the ID "sphere1" into green.

### Task 2:
Detect the marker/box shaking and:
 * move the sphere1 10 distance units to the right each time the box is shaken horizontally (left/right, but not front/back)
 * move the sphere1 10 distance units up each time the box is shaken vertically.

Code: [Task Set 1](https://glitch.com/edit/#!/placid-fork-dry)


#
### Task Set 2 ([Button Component](https://github.com/JoaoDiogoMesquita/VR-Tangible-Interaction-Toolkit/tree/master/Button))

### Task 1:
Use Button component to detect the click and use the event to change the color of the object 'box' into purple.

### Task 2:
Use Button component to detect the click and use the event to change the [environment](https://www.npmjs.com/package/aframe-environment-component) to 'egypt' preset.


- Code: [Task Set 2](https://glitch.com/edit/#!/sun-maddening-outrigger)
#
### Task Set 3 ([Swipe Detector Component](https://github.com/JoaoDiogoMesquita/VR-Tangible-Interaction-Toolkit/tree/master/Swipe))

### Task 1:
Use the Swipe without reference to detect the sequence (my1, my2, my3) and change the color of sphere1 to red.

### Task 2:
Change the parameters to use sphere1 as reference and detect the sequence (my3,my2,my1). With the event, add 3 distance units to the coordinate X of sphere1. 

- Code: [Task Set 3](https://glitch.com/edit/#!/fire-telling-steel)

#
### Task Set 4 ([Angle Detector Component](https://github.com/JoaoDiogoMesquita/VR-Tangible-Interaction-Toolkit/tree/master/Angle%20detector))

### Task 1:
Use Angle Detector component to detect a rotation of 20º in Y axis and use it to change the color of sphere1 to blue.

### Task 2:
Add the behaviour detection on the X axis with the same angle but this time, this detection must change the color back to red.

- Code: [Task Set 4](https://glitch.com/edit/#!/fluffy-likeable-rutabaga)