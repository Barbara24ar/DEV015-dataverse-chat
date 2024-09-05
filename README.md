# Pet Finder 🐶🐱

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Definición de producto](#2-definicion-de-producto)
* [3. Historias de Usuario](#3-historias-de-usuario)
* [4. Diseño de Interfaz y Prototipos](#4-diseño-de-interfaz-y-prototipos)
* [5. Lenguajes y Herramientas Utilizadas](#5-lenguajes-y-herramientas-utilizadas)
* [6. Responsividad](#6-responsividad)
* [7. Testing](#7-testing)
* [8. Trabajo Colaborativo](#8-trabajo-colaborativo)

***

## 1. Resumen del proyecto

Pet Finder es una plataforma diseñada para conectar personas interesadas en adoptar perros y gatos con refugios y hogares temporales. A través de nuestra aplicación, los usuarios pueden ver tarjetas con información detallada de cada animal y usar un chat para interactuar directamente con el refugio, incentivando la adopción y facilitando la conexión entre adoptantes y animales.

Nuestra misión es aumentar la adopción de mascotas al crear una experiencia simple, accesible y empática para los usuarios.

## 2. Definición de producto

Pet Finder se enfoca en facilitar el proceso de adopción, ofreciendo una plataforma amigable donde los adoptantes pueden conocer más sobre los animales disponibles. Los usuarios tienen la posibilidad de:

Ver tarjetas interactivas: Cada tarjeta muestra información clave del animal, como su nombre, edad, tamaño, y características.
Interactuar por chat: Un chat individual permite la interacción directa con refugios o dueños temporales.
Filtrar animales: Los usuarios pueden buscar mascotas por diferentes categorías como tamaño, raza, y edad.
La plataforma busca ser intuitiva, asegurando que cada usuario pueda navegar fácilmente por las diferentes funcionalidades sin complicaciones.

## 3. Historias de Usuario

* Historia de Usuario 1:
Como usuario interesado en adoptar, quiero ver detalles completos de cada animal en las tarjetas, para tomar una decisión informada antes de iniciar el proceso de adopción.

* Historia de Usuario 2:
Como usuario, quiero poder filtrar a los animales por criterios como tamaño o raza, para encontrar rápidamente la mascota que mejor se adapte a mis preferencias.

* Historia de Usuario 3:
Como usuario, quiero un chat individual con el refugio o dueño temporal para hacer preguntas sobre el animal y concretar el proceso de adopción.

* Historia de Usuario 4:
Como usuario, quiero que la aplicación funcione correctamente en dispositivos móviles y de escritorio, para poder usarla en cualquier momento sin perder funcionalidad.

## 4. Diseño de Interfaz y Prototipos

La interfaz de Pet Finder está diseñada con una navegación clara y amigable, donde cada sección está optimizada para ofrecer la mejor experiencia de usuario, enfocándonos en que la información sea accesible de manera rápida y sencilla.

### Test de Usabilidad:
En las pruebas de usabilidad realizadas, identificamos las siguientes áreas de mejora:

* Botón de adopción: Se optimizó el color y la posición del botón "Adoptar" para hacerlo más visible y atractivo.
  
* Chat más accesible: Mejoramos el acceso al chat desde las tarjetas de animales.
  
* Resaltar características clave: Las tarjetas ahora resaltan información esencial como edad y tamaño, facilitando la búsqueda.
  
### Prototipos de Alta Fidelidad:
El prototipo de Pet Finder refleja el diseño final con todos los estilos visuales e interacción completa. A continuación, algunas capturas del diseño:

* Desktop Home
* Desktop Chat
* Mobile Cards
* Mobile Chat

## 5. Lenguajes y Herramientas Utilizadas

 - Lenguajes de Programación:

   * JavaScript: Para la lógica y comportamiento de la página.
     
   * CSS: Para el diseño responsivo y estilizado.
     
   * Herramientas Utilizadas:
     
   * Git: Para el control de versiones y colaboración.
     
   * Jest: Para pruebas unitarias y asegurar la funcionalidad.
     
   * Figma: Para el diseño y prototipado de la interfaz.
     
   * GitHub: Para la gestión de proyectos y seguimiento de problemas.


## 6. Responsividad

Pet Finder está diseñado para ser completamente responsivo, adaptándose a cualquier tipo de dispositivo, ya sea móvil, tableta o escritorio. Empleamos técnicas como:

 * Diseño responsive: Los elementos de la interfaz se reconfiguran automáticamente según el tamaño de la pantalla.
   
 * Media Queries: Para aplicar estilos específicos a diferentes resoluciones y garantizar una experiencia óptima en todos los dispositivos.

## 7. Testing

En Pet Finder, hemos realizado pruebas exhaustivas para garantizar que las funcionalidades clave de la aplicación se comporten correctamente, utilizando Jest para pruebas unitarias. A continuación se detallan algunos de los tests más relevantes:

### Pruebas de la API Key
Probamos las funciones relacionadas con el manejo de la API Key almacenada en localStorage.

   * getApiKey: Verifica que la función retorne correctamente la API Key almacenada en el localStorage.
     
   * setApiKey: Comprueba que la función guarde la API Key en el localStorage correctamente.
     
### Pruebas de comunicación con la API de OpenAI
Simulamos diferentes escenarios al interactuar con la API de OpenAI, incluyendo respuestas exitosas y errores HTTP.

   * Errores de red y respuestas HTTP: Probamos cómo maneja la aplicación los errores comunes como falta de conexión, errores 400 (Bad Request), 401 (Unauthorized), 500 (Internal Server Error), entre otros.

   * Respuestas exitosas: Validamos que los datos JSON se manejen correctamente en caso de una respuesta exitosa de la API.

Estas pruebas garantizan que los usuarios de Pet Finder tengan una experiencia estable y confiable, y que el manejo de errores sea adecuado, incluso cuando surjan problemas con la red o con la API.


## 8. Trabajo Colaborativo

Este proyecto fue diseñado y desarrollado por un equipo comprometido con la adopción de animales. Cada miembro del equipo ha contribuido en las diferentes etapas del proyecto, desde el diseño hasta el desarrollo y las pruebas.

### Equipo:

[Bárbara Evelin Rolón] (https://github.com/Barbara24ar)
[Yesenia Dávalos] (https://github.com/YeseniaDavalos)


¡Gracias!
