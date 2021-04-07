# Usability Test

## Introduction
The main goal of this session is to evaluate the usability of 4 components that are part of a programmatic toolkit that aims to assist the development of virtual reality content. These tests intend to evaluate these components in terms of understandability, abstraction, reusability and learnability. 
For that I ask you to record three things:
- the time spent on each task
- how many different attempts at each task 
- any difficulties encountered (even if you can solve it)

In the tasks the environment has been set up to play VR experiences with markers automatically through a video, so you just have to program the experience to detect the interactions being made in the video. The experiment will be explained in each of the tasks.

You're welcome to leave comments in the code or indications of the three points mentioned above (time,attemps and dificulties).

If you have no experience with the A-Frame framework, I would first recommend that you go through the [tutorial](Tutorial.md) that has been prepared with the basics.

After you finished, please send your code via email to: jmesquita@student.dei.uc.pt
#
## Task Set 1 ([Shake Detector Component](https://github.com/JoaoDiogoMesquita/VR-Tangible-Interaction-Toolkit/tree/master/Shake%20detector))

###Task 1:

Use the Shake Detector component to detect the marker/box shaking and turn the element with the ID "sphere1" into a different color.

###Task 2:
Use the Shake Detector component to detect the marker/box shaking and add a value to the coordinate X of sphere.

Code: [Task Set 1](Task Set 1)

Note: The code is already prepared to make the object 'box1' shake. 

#
### Task Set 2 ([Button Component](https://github.com/JoaoDiogoMesquita/VR-Tangible-Interaction-Toolkit/tree/master/Button))

###Task 1:
Use Button component to detect the click and use the event to change the color of the object 'box'.

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
- Note: The code is already prepared to do a sequence in 3 markers.
#
### Task Set 4 ([Angle Detector Component](https://github.com/JoaoDiogoMesquita/VR-Tangible-Interaction-Toolkit/tree/master/Angle%20detector))

###Task 1:
Use Angle Detector component to detect a rotation of 20º in Y axis and use it to change the change the color of sphere1.

###Task 2:
When the rotation is negative it give it a different color than when it is positive.

- Code: [Task Set 4](Task Set 4)
- Note: The code is already prepared to make a the 'box1' rotate 180º in z axis. 