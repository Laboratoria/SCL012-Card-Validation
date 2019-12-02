![inicio](https://i.ibb.co/DQgQwhV/Screenshot-20191120-235605-Chrome-mh1574306850035.jpg)

 



## Índice

* [Introducción](#Introducción)
* [Definición del Producto](#Definición-del-Producto)
* [Tipo de usuario](#Tipo-de-usuario)
* [Objetivo principal ](#Objetivo-principal)
* [Planificación](#Planificación)
* [Historias de usuario](#Historias-de-usuario)
* [Diseño](#Diseño)
* [Sketch](#Sketch)
* [Investigacion y Desarrollo](#Investigacion-y-Desarrollo)
* [Prototipo de alta fidelidad](#Prototipo-de-alta-fidelidad)
* [Testeo y usabilidad](#Testeo-y-usabilidad)
* [Test de usabilidad](#Test-de-usabilidad)
* [Conclusiones y posibles soluciones](#Conclusiones-y-posibles-soluciones)


***
## Introducción
_En un mundo con poco tiempo ,los detalles se hacen importantes_.
Imaginemos que Hoy es el cumpleaños de uno de tus mejores amig@s, por lo que despues del trabajo , pasaras a celebrar a su casa.
Pero aun no le haz comprado regalo, y dificilmente encontraras una tienda abierta a la hora de salida.
Comprar en linea es una excelente opcion , pero se demoran bastante en la entrega.
La solucion? _Gitbox Express_ y en solo una hora, tu pedido estara en la puerta de tu oficina o en la casa de tu amig@.
Nunca comprar online habia sido tan rapido!!.
 


## Definición del Producto
_Giftbox Express Store_ es una tienda online de regalos temáticos, creada para quienes necesiten un regalo personalizado de forma rápida y segura.
Una estética simple ,inspirada en redes sociales como Pinterest e Instagram ,en las cuales predominan imagenes con filtros vintage, hace que sea atractiva para el usuario.
Bajo el concepto _Giftbox_, el usuario puede elegir entre 9 opciones de cajas de regalo personalizadas que contienen varios productos, segun el estilo de vida de quien lo vaya a recibir.
El sistema de pago en linea , permite validar tarjetas de credito en forma segura.
Su sistema permite que en solo 3 pasos, el usuario pueda comprar un regalo y enviarlo, para que llegue en solo una hora a su destino.


 
##  Tipo de usuario
Esta Web app esta enfocada en usuarios  _Millenials_ (Generación nacida entre 1980 y mediados de los '90s), Adultos jovenes que se encuentren insertos en el mundo laboral.
Son idealistas, exigentes y siempre estan buscando experiencias que les aporten comodidad y eficiencia.
Han crecido a la vez que los avances tecnológicos, son avidos usuarios de smartphones, consumen mucha información online, contenidos en redes sociales, por lo cual estan muy familiarizados con las Web Stores y representan mas del 50% del consumo mundial.



## Objetivo principal 
Esta aplicacion busca cubrir las nuevas necesidades de compra de los usuarios. Imitando la rapidez del Delivery de tiendas de expendio alimentos , pero entregando productos unicos y de calidad, como son las cajas de regalo personalizadas, haciendo de su compra una experiencia agil y simple.



## Planificación

Para la organización del proyecto se utilizaron la siguiente herramienta de planificación:


-Tareas en `Trello` Puedes revisarlo haciendo click [aquí](https://trello.com/invite/b/zYLEpODd/8fd70153f4aeeba3e0e9213a4d3a5116/luhn)


___

# Historias de Usuario

Las historias de usuario están basadas en los requerimientos u objetivos que tendría el cliente de la webapp.

Estos requerimientos son:

#### Historia 1

>" Yo como cliente deseo encontrar el menu de giftboxs en forma fácil, para poder elegir mas rápido el regalo".

 
#### Historia 2

>" Yo como cliente deseo ver imagenes detalladas de las opciones de regalos, para apreciar mejor el contenido de cada caja".
 

#### Historia 3

>" Yo como cliente quiero que tenga un sistema simple de pago en linea, para poder pagar con tarjeta de credito".


#### Historia 4

>" Yo como cliente deseo que sume sus productos, para que me permita comprar mas de un producto".





#### Los objetivos principales se resumirían en :


*Diseñar una pagina que simplifique el sistema de compra.

*Mostrar imagen detallada del contenido de cada giftbox.

*Validar tarjeta de credito.

*Sumar valores de los productos elegidos.



___

# DISEÑO


## Sketch

El primer sketch  se baso en lo que seria la idea inicial de pagina web y los contenidos que debia abarcar, pensando (como Millenial) "que es lo que necesitaria una pagina de ventas", para que esta fuera sencilla de usar y asi poder optimizar el tiempo de navegacion.

Este contaba con:
 
* Pagina de inicio.
* Instrucciones de la web app
* Menu de Giftboxs en imagenes ,con sus respectivos precios.
* ingreso de datos personales y direccion de envio
* Ingreso de medio de pago ( Validacion luhn de trajeta de credito), la cual es la base de todo el proyecto.
* Pagina de  confirmacion de compra.


![sketch](https://i.ibb.co/XsG510s/20191120-222632-mh1574306794542.jpg)
Esta es la primera idea de como debia ser una pagina de compras simple. 

   
## Investigacion y Desarrollo


Una vez hecho el sketch, y rescatando las ideas principales de la plataforma, busque y reclute _Millenials_ en redes sociales que cumplieran con 3 caracteristicas principales:

1)Laboralmente activo : Porque eso aumenta las posibilidades de que utilice web de compras y que posea tarjetas de credito.

2)Que tenga experiencia media en web apps de compras : O sea que utilice o haya utilizado en reiteradas ocaciones paginas de compra en linea, tales como : Aliexpress, Wish , Shein , Ebay , o paginas mas pequeñas nacionales o internacionales , con sistema de pago en linea.

3)Que tengan interes sobre los productos que se ofrecen en los giftbox : Asi los productos tendran un valor extra , si coincide con sus gustos o hobbies .



___

## Paleta de colores

Para elegir los colores del prototipo, busque paletas que fueran de su preferencia , pinturas de ambiente inspiradas en ellos , y 
tonalidades que los representaran como generacion.

 <img src="https://i.ibb.co/pLG6zkn/paletamillenial.jpg" alt="paleta" width="230" height="400"> <img src="https://i.ibb.co/SxLKvR8/colores2.jpg" alt="colores2" width="300" height="400"> <img src="https://i.ibb.co/x7JbVJx/colores.jpg" alt="colores" width="430" height="400">
 
Los tonos elegidos para representar la marca de la web app fueron _Copenhagen_ (frio y palido) como color primario y _Magenta_ (calido y llamativo) como color secundario, esto para que visualmente fuera colorida y unisex , al igual que el contenido de los giftbox.

Para usarlos en figma fueron trasladados a codigo hex, con la intencion de si tienen buena acogida, usarlos en css del diseño final.


Si quieres revisar la paleta de colores puedes seguir este enlace : [aquí](https://material.io/resources/color/#!/?view.left=0&view.right=1&primary.color=c2e8ce&secondary.color=9f116a)

![sketch](https://i.ibb.co/jkhQ0fS/Screenshot-from-2019-11-30-00-06-04.png)
se utilizo el color primario principalemente para los fondos y el secundario para los detalles.


## Principios de Diseño Visual


### Contraste

Existen 3 formas para generar contraste dentro de un diseño.

A través de la forma, con la ruptura del patrón.
A través del color, se basa en las propiedades del color (tono, valor, saturación).
A través de relaciones de tamaño de las formas.
Como la web app es pequeña, decidi ocupar este principio solo en el color , como se mostro anteriormente , al elegir dos tonos muy diferentes entre si . El primario se usara como base , para que destaquen las imagenes y el texto , y el secundario para aquellos elementos que deseo resaltar.



### Repeticion

La repetición le da unidad, consistencia y cohesión al conjunto, esta suele aportar una inmediata sensación de armonía.
La presencia de módulos tiende a unificar, por esto en el prototipo se repetira la misma estructura y posicion del header, los mismos colores y el mismo diseño de botones, solo habra cambios en el contenido de cada seccion.



### Alineacion

Alinear los elementos es una operación imprescindible para conseguir una composición ordenada y lógica, con ello se crean unidades visuales definidas y relaciones entre elementos.
A excepcion del nombre y el menu del header, todo esta alineado al centro,porque se esta trabajando con datos que se repiten y estan cuadriculados y eso ayuda a que se vea ordenado y simetrico. 
Se testeara el prototipo, si tiene buena aceptacion se dejara asi, 
sino, se intentaran algunos cambios en la alineacion despues del menu, en la seccion de ingreso de datos y pago ( hacia el izquierdo, porque al derecho puede ocasionar algo de tension visual , en cambio el orden hacia el lado izquierdo , suele sentirse mas comodo porque nuestra vista esta acostumbrada a tratar con ello).



### Jerarquia

Existe un orden jerárquico en la visión siendo el primer punto el más importante. Jerarquizar es ordenar en función de distintos parámetros diversos elementos. En el diseño, la jerarquía establece la mayor o menos importancia de los elementos que incluimos. En concreto es aquello que prioriza la visión.
Algunos de los elementos gráficos como el color, el tamaño, la posición, las anomalías, las formas , tienen una clara connotación jerárquica.
En este caso se aplico principalmente con la Tipografia.
Las palabras más importantes muestran un mayor impacto, por lo que los usuarios pueden obtener la información clave con mayor claridad, entonces al dar reelevancia a los titulos de las secciones en relacion con el resto del texto aumentando su tamaño, llamará más la atención por lo que tendrán mayor grado de importancia. 



## Fuentes















___

## Prototipo de alta fidelidad



___ 
![Figma](https://i.ibb.co/rvg8yqp/20191128-221719.jpg)


* Versión  Escritorio

Puedes interactuar con el prototipo haciendo click[ aquí ]( https://www.figma.com/file/vwmerCzyytHn7v31mBn0G9/giftbox?node-id=0%3A1 )



 ___ 


# Testeo y Usabilidad


Los test de usabilidad son una forma de probar cómo los visitantes navegan en tu sitio web con el objetivo de facilitar su experiencia web y dejarla cada vez más simple e intuitiva. 
Para ver la usabilidad del ultimo prototipo, se realizo un testeo a la versión de Desktop.


### Objetivos de testeo

* Probar si la interfaz es fácil de entender o necesita mayor instrucción.
* Comprobar si el acceso y los enlaces siguen un orden lineal.
* Comprobar si es factible realizar y completar una simulacion de orden de compra.
 


## Test de usabilidad

Como es un sitio web pequeño, se escogió al azar a 5 representantes de nuestros Usuarios objetivos , y se les invito a realizar un test de usabilidad para el prototipo final de alta fidelidad creado en  _figma_ , para recibir feedback y con ello trabajar en la web app final.



#### Usuario 1

Nombre:Claudia 
Edad:30 años.
Actividad:Nutricionista.



#### Observaciones del usuario

>" Me gustaron los Colores, hace que sea atractivo de mirar"

>" Avanza y retrocede sin problemas , es ordenado y lineal"

>" Me gustaria que las imagenes fueran mas grandes aun , y que se pudiera observar el detalle de lo que hay adentro de cada caja "



#### Usuario 2

Nombre:Marcy Valenzuela. 
Edad:34 años
Actividad:Ingeniera Civil y Profesora de Yoga.

#### Observaciones del usuario

>" Podria comprar muy rapido en la pagina , su sistema es simple "

>" Es bueno que la seccion de pago , se vea similar a la de otras tiendas , eso te da confianza para entregar tus datos"

>" Me agrada que te sugiera que el regalo puede llegar a tu trabajo , es mas lindo si llegas tu mismo con el regalo" 




#### Usuario 3

Nombre: Enrique Hernandez
Edad:34
Actividad:Ingeniero y Musico 


#### Observaciones del usuario

>" Las imagenes son  muy pequeñas , podria existir una opcion que las agrande , queria ver tenia la MusicBox".

>" Me gustaria que me permitiera comprar mas de un producto ".

>" La pagina de ingreso de datos personales, podria abrirse como pestaña , eso simplificaria aun mas ".




#### Usuario 4

Nombre: Simone Olea
Edad:32 años
Actividad: Ejecutiva de seguros.


>"Podria agregarse texto a las fotos , leer el contenido ademas de mirarlo".

>"Los colores hacen que se vea como retro , eso me parece bonito". 

>"Los botones tienen nombres y estan bien ubicados , yo creo que eso es lo que la hace muy facil de navegar"







#### Usuario 5

Nombre: Antonio Campi.
Edad:38 años
Actividad: Constructor civil.



#### Observaciones del usuario

>" Hay botones que no tienen funcion , yo los aprete igual".

>" Las instrucciones me confundieron porque no las lei y me puse a apretar todo lo que se viera similar a un boton , despues me di cuenta que eran las Instucciones".

>" Me gustaria ver el detalle del valor de la compra". 






Para ver el video del ultimo usuario probando el prototipo . Ver en este link [aquí](https://youtu.be/O5N00Wgkl9Q)





 ___ 


## Conclusiones y posibles Soluciones


      ![prototipo](https://i.ibb.co/5YxG8q8/inicio.jpg)

Uno de los cambios que se realizaron en la aplicacion final , fue adaptar el diseño un poco mas como pagina web porque era el requerimientode esta tarea.
Esto por que el uso diferentes pantallas queda mejor en un diseño de aplicacion para celular. En una pagina web , es mas comodo que sea todo en una sola pagina, ademas da la sensacion que es mas pequeña y rapida.



### Aprendizaje:

Es la facilidad con la que el usuario es capaz de desarrollar las tareas asignadas por primera vez.
Salvo algunas desviaciones ( las cuales fueron mas de caracter explorativo ) los usuarios pudieron comprender la funcion de cada uno de los botones y elementos,ademas de entender hacia donde iban estos. 
La experiencia con otras paginas web, hizo que llevaran a cabo las instrucciones que se les habia dado, sin mayor dificultad.
 Esto es porque la estructura es muy semejante a otras web de compras.


### Eficiencia

Es la destreza con la que usuarios con experiencia llevan a cabo las instrucciones que se les han dado. Su similitud a otras paginas de ventas , principalmente en la entrega de datos y pago , da una sencaion de familaridad y esto permite que el usuario , cumpla su objetivo ( realizar una compra) , sin mayor problema.
Eso si , se considera agregar mas informacion sobre los precios y a las imagenes, a solicitud de los usuarios.




### Memoria

Se evaluo si al pasar cierto tiempo, después de la primera interacción, el usuario fue capaz de recordar cómo funciona la aplicación sin necesidad de aprender a manejarla nuevamente.Y no se registraron problemas con eso , efectivamente los usuarios no requirieron repetir para entenderla




### Errores

La cantidad y gravedad de errores que cometa el usuario al interactuar con la aplicación, de igual manera se analiza la facilidad con la que se pueden enmendar los errores cometidos durante la prueba.
Si bien se considero anular los botones sin funcion en el figma , al realizar la aplicacion final estos se dejaron porque eventualmente si se les podria agregar un enlace.
Los errores de navegacion, en realidad solo fueron parte del proceso de exploracion en la pagina.

 
### Satisfacción

Se evaluo qué tan satisfactoria fue la experiencia del usuario y si de alguna manera disfrutó la forma en que está diseñado el producto.
La Recepcion en general fue positiva ,segun los comentarios de cada uno. 
Si esta web existiera, la ocuparian, ya que consideran que tiene caracteristicas que no encuentran en otros sitios : tales como , la agilidad , la simpleza en su uso.










 



