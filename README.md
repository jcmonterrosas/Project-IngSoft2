
# Aventurate - Arma tu plan

## Integrantes:

* Juan Monterrosa Sanchez
* Tom Erick Perez Alvarez 
* Jhonatan Sandoval Velasco
* Andres Giovanny Aldana Wilches
* Cristian David Martinez Collazos

## Problema:

>No existe una aplicación centralizada que permita crear planes turísticos personalizados para que los usuarios no tengan que perder tiempo en búsquedas y reservas en diferentes páginas. Además se presenta que muchos servicios o actividades de trabajadores locales llegan a ser ignorados debido a planes realizados por grandes industrias del turismo.

## Solución:

> Una aplicación web que permita en una sola página crear planes turísticos para diferentes lugares del país. En esta página será posible seleccionar el lugar de hospedaje, las actividades y otros servicios que se oferten por las empresas. Así los usuarios pueden ver todo desde un solo formulario. Las empresas y/o los trabajadores locales serán capaces de publicar en la aplicación información sobre los servicios que ofrecen y recibir las reservas de los usuarios que deseen incluirlos en su plan turístico. 

## Enlaces de interés:

>### [Presentación](https://speakerdeck.com/tpereza/software-engineering-iteration-0?slide=16)

# Primera Iteracion: 

## Para acceder a la aplicacion, puede seguir el siguiente enlace: 

>### [Aventurate](https://aventurate.herokuapp.com/)

## Para visualizar el Product BackLog del proyecto, puede seguir el siguiente enlace: 

>### [Trello](https://trello.com/b/iqyc9vN4)

## Para visualizar los Mockups de la aplicación, puede seguir el siguiente enlace: 

>### [Mockups](https://www.lucidchart.com/invitations/accept/0b6809af-6c77-4973-81bb-2786db4f0912)

> Para la primer iteración el Sprint BackLog se ubica actualmente en el tablero en la lista **Done - Primera Iteración**. En la organización que se tuvo en cuenta para el BackLog, decidimos utilizar etiquetas para identificar a dónde van asignadas las historias de usuario, además de eso, dentro de cada una de las tarjetas hay una checklist con los Features que se debieron tener en cuenta (a grandes rasgos) para cumplir con esta Historia de usuario. Es importante resaltar que la **etiqueta naranja** representa las historias de usuario relacionadas al **“Cliente”**, las **amarillas** están relacionadas al **“Proveedor”** y las **rojas** a todo aquello que tenga que ver con **“Technical Tasks”**. 

## Tecnologias:

> Hemos decidido utilizar el **STACK MERN** para el desarrollo de nuestra aplicacion, el cual cuanta con las tecnologias:
  * MongoDB
  * Express
  * React 
  * Node
  
> Nuestra principal motivacion para hacer uso de este Stack de tecnologias es que permite desarrollar en JavaScript tanto en el cliente como en el servidor es decir es Full Stack JavaScript. Lo cual nos libra de la complejidad de aprender mas de un lenguaje, nos permite tener un mayor entendimiento de la aplicacion y nos da la posibilidad de dedicar mas tiempo al desarrollo de la aplicacion. 

# Segunda Iteracion:

> Para la segunda iteración, el Sprint BackLog se ubica actualmente en el tablero Trello, tanto en la lista **Done - Segunda Iteración** como en la lista **CODE REVIEW**.

> En esta iteracion, los mayores avances, se presentan principalmente en la barra de navegacion, el registro de usuarios y el login de los mismo, como complementeo un footer con los links que solicitan recurrentemente en cada iteracion. Ademas de los frameworks que se estaban utilizando, se afrega a la lista el uso de Boostrap y Reactstrap.

> En cuanto a la implementacion de **Patrones de software**, en el desarrollo de la aplicacion se implementó, entre otros, el patron **" chain of responsability"** el cual se define como un patron de comportamiento. Dicho patron se implementa puesto que la gestión de una petición asíncrona tiene que ir pasando por una serie de estados: inicio de la petición, respuesta de la petición; que a su vez se divide en: petición resuelta con éxito y petición fallida, , describiendo así como los objetos distribuyen responsabilidades e interactúan entre ellos.

> En cuanto al requisito no-funcional, decidimos enfocarnos principalmente en **disponibilidad (“Availability”)**, haciendo que el servicio sea accesible a cualquier hora del día a lo largo de la semana. Esto se puede lograr por medio de servicios como los que ofrece Heroku, pero también reduciendo los cambios importantes, mantenimiento, etc… A momentos donde el tráfico de clientes no sea tan elevado y se pueda permitir el “Down Time”.



