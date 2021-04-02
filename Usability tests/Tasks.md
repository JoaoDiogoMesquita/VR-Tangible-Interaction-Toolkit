## Task List

_Comentários:_ 
* _Tem de haver uma introdução que contextualize o teste de usabilidade no trabalho e clarifique o que se pretende que os participantes façam._
* _Acho também que se devem definir perfis de participantes: e.g., com experiência de programação de componentes A-Frame, sem experiência de programação de componentes, mas com experiência de criação de experiências A-Frame, experiência com AR.js, sem experiência em A-Frame_
* _O tutorial deve ser recomendado para os últimos_
* _Necessário criar um questionário com perguntas demográficas para perceber os detalhes do participante (perfil, idade, nível de experiência com A-Frame, etc.)_
* _As tarefas têm de ser repensadas. As tarefas não devem ser tutoriais passo a passo, deve ser colocado um desafio. Pense num exercício num exame. Não dizer como fazer, dizer apenas o que se pretende obter. Não deve dar os detalhes usando os nomes dos parâmetros, isso é facilitar demasiado_
* _Sugiro ter duas tarefas por componente_
* _Os videos das tarefas devem ser gravados na perspectiva de uso final: perspectiva smartphone_
* _Acho que os vídeos podem ser apresentados juntamente com o próprio enunciado, para ajudar a perceber o que se pretende_
* _A forma como o video é usado no código base deve ser explicado também_
* _Necessário ser muito claro no tipo de feedback que se pretende:_
  * _toda e qualquer dificuldade sentida, deve ser registada mesmo que o participante consiga resolver_
  * _tempo aproximado para resolver cada conjunto de tarefas_
  * _quantas tentativas fez para resolver o problema_
  * _etc. (ver nos artigos se encontra outros tipos de feedback ou observações relevantes_
* _A documentação oficial dos componentes tem de ser bem trabalhada_
  * _Deve explicar bem o contexto de aplicação do compoente (interacção tangivel com marcadores)_
  * _exemplos com vídeos: o tipo de videos que fez para o teste de usabilidade pode ser usado na documentação colocando lado a lado o vídeo dos gestos e a perspectiva virtual, por exemplo_
* _acho que se deve já pensar em grande para o recrutamento dos participantes: pode-se convidar colegas, mas tentar sobretudo que participem pessoas com experiência em A-Frame divulgando nos grupos de A-Frame / WebVR no facebook, etc._
 

[A-Frame Tutorial](Tutorial.md)

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