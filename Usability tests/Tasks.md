# Usability Test

  
  
## Introduction
The main goal of this test is to evaluate the usability of four A-Frame components that are part of a programmatic toolkit that aims to assist the development of marker-based tangible interaction in virtual reality. The goal is to make improvements to these components to make them easier to use by programmers.

The A-Frame components that are being evaluated are documented at [https://github.com/JoaoDiogoMesquita/VR-Tangible-Interaction-Toolkit](https://github.com/JoaoDiogoMesquita/VR-Tangible-Interaction-Toolkit)

The test consists of a number of programming tasks that you should solve using the A-Frame components that are mentioned in each task. For each task, an HTML file has been prepared with the basic A-Frame scene. In addition, the scene is already configured with a simulation of the interaction: it has been set up to play videos of a user interacting with a marker-based object, so you just have to program the experience to detect the interactions being made in the video. 

While you are solving the tasks, we ask you to record three things:
- the time spent on each task (roughly)
- how many different attempts at each task (how many different approaches you tried before getting it right) 
- any difficulties encountered (even if you solved the task, report anything that caused you to revise your code - misspelled a parameter name, misunderstood the meaning of a parameter, forgot including &lt;script&gt;, etc.)

We ask that you leave comments in the code indicating the three points mentioned above (time, attempts and difficulties), or anything else you feel could be useful to improve the A-Frame components.

Each task should be solved in its own HTML file, as provided.


If you have no experience with the A-Frame framework, I would first recommend that you go through the [tutorial](Tutorial.md) that has been prepared with the basics.

If you don't have experience in writing custom A-Frame components, you may wish to solve only the first task in each task set below.

When you finish implementing the following tasks, please fill in the questionnaire available at this [link](https://docs.google.com/forms/d/e/1FAIpQLSdms9-KCEabZDyMNZmS4afQf8D_5sfwgyNIqRmgVggeELDwMQ/viewform?usp=sf_link) . This questionnaire will allow us to understand your perspective regarding the understandability, abstraction, readability, and learnability of the A-Frame components. It will also allow you to submit your code with the resolution of the programming tasks.


#
## Task Set 1 ([Shake Detector Component](https://github.com/JoaoDiogoMesquita/VR-Tangible-Interaction-Toolkit/tree/master/Shake%20detector))

###Task 1:

Use the Shake Detector component to detect the marker/box shaking and turn the element with the ID "sphere1" into blue.

###Task 2:
Detect the marker/box shaking and:
 * move the sphere 10 cm to the right each time the box is shaken horizontally (left/right, but not front/back)
 * move the sphere 10 cm up each time the box is shaken vertically.

Code: [Task Set 1](Task Set 1)

Note: The code is already prepared to make the object 'box1' shake. 

#
### Task Set 2 ([Button Component](https://github.com/JoaoDiogoMesquita/VR-Tangible-Interaction-Toolkit/tree/master/Button))

###Task 1:
Use Button component to detect the click and use the event to change the color of the object 'box' into blue.

###Task 2:
Use Button component to detect the click and use the event to change the [environment](https://www.npmjs.com/package/aframe-environment-component) to 'egypt' preset.



- Code: [Task Set 2](Task Set 2)
- Note: The code is already prepared to make the object 'button' clicked. 
#
### Task Set 3 ([Swipe Detector Component](https://github.com/JoaoDiogoMesquita/VR-Tangible-Interaction-Toolkit/tree/master/Swipe))

###Task 1:
Use the Swipe without reference to detect the sequence (my1, my2, my3) and change the color of sphere1.

###Task 2:
Change the parameters to use sphere1 as reference and detect the sequence (my, my2). With the event, add some value to the coordinates of sphere1. 

- Code: [Task Set 3](Task Set 3)

#
### Task Set 4 ([Angle Detector Component](https://github.com/JoaoDiogoMesquita/VR-Tangible-Interaction-Toolkit/tree/master/Angle%20detector))

###Task 1:
Use Angle Detector component to detect a rotation of 20º in Y axis and use it to change the color of sphere1 to blue.

###Task 2:
When the rotation is negative it give it a different color than when it is positive.

- Code: [Task Set 4](Task Set 4)