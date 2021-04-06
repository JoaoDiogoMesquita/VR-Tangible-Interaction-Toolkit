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
### Task Set 1 ([Shake Detector Component](https://github.com/JoaoDiogoMesquita/VR-Tangible-Interaction-Toolkit/tree/master/Shake%20detector))

- Run the HMTL code and explore the environment.
- Use the Shake detector component in the object 'box1' without parameters.
- Personalize the component behaviour with the parameters in the table so the component can detect the shake movement.
- As de debug is set as True, open the programmer console of your browser to see the prints.

| Parameter | Value | 
| --------- | ------ | 
| switchInterval| 2000|
|minimumSwitchTimes | 2 |
|minimumDistance | 1  |
|axis | y |
|debug | True |

- Code: [Task Set 1](Task Set1)
- Note: The code is already prepared to make the object 'box1' shake. The final objective is to make the component detect this movement.
#
### Task Set 2 ([Button Component](https://github.com/JoaoDiogoMesquita/VR-Tangible-Interaction-Toolkit/tree/master/Button))

- Run the HMTL code and explore the environment.
- Use the Button detector component in the object 'button' with 'ref' as reference.
- Use the event to change the color of the object 'box' to blue.

| Parameter | Value | 
| --------- | ------ | 
| reference | ref |
| minimumTime |  200 |
| eventTargets | #box  |  
| debug |  true |

- Code: [Task Set 2](Task Set 2)
- Note: The code is already prepared to make the object 'button' turn invisible after 2 seconds and turn visible again after 4 seconds. The final objective is to make the component detect this interaction.
#
### Task Set 3 ([Swipe Detector Component](https://github.com/JoaoDiogoMesquita/VR-Tangible-Interaction-Toolkit/tree/master/Swipe))

- Run the HMTL code and explore the environment.
- Use the Swipe detector component in the object <a-scene> without a reference.
- Personalize the component behaviour with the parameters in the table.
- The interaction is not being detected and event emitted. Try to find out why and resolve it.
- Turn the object 'sphere1' color to red if sequence 1 is detected, and green in case of sequence 2.

| Parameter | Value | 
| --------- | ------ | 
| markers| #box1,#box2,#box3 |
| eventTargets | #sphere1 |
| sequences |  1 2 3,3 2 1 |
| maximumTime | 200 |
| hasReference |  false |
| debug |  true |

- Code: [Task Set 3](Task Set 3)
- Note: The code is already prepared to make a set of box objects to work as markers and disapear in sequence for some time like in the swipe interaction. The final objective is to make the component detect this interaction.
#
### Task Set 4 ([Angle Detector Component](https://github.com/JoaoDiogoMesquita/VR-Tangible-Interaction-Toolkit/tree/master/Angle%20detector))

- Run the HMTL code and explore the environment.
- Use the Angle detector component in the object 'marker1' with parameters of your choose.
- If the interaction is not being detected, use the component behaviour with the parameters in the table.
- Change the script code to increment the z variable case the event is related to a 'positive' rotation and decrement in case of a 'negative' rotation (check component's documentation).

| Parameter | Value | 
| --------- | ------ | 
| threshold| 45 |
| eventTargets | #sphere1 |
| axis |  z |
| debug |  true |

- Code: [Task Set 4](Task Set 4)
- Note: The code is already prepared to make a the 'box1' rotate 180º in z axis. 