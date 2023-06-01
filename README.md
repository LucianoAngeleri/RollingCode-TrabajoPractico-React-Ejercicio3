# Trabajo Práctico de React
## Ejercicio 3 - Hello World (Parte 3)

Este proyecto es una aplicación web desarrollada en **React** que muestra en pantalla el mensaje "Hello World" con modificaciones en el componente anterior.

## Autor

El proyecto fue creado por [César Luciano Angeleri](https://www.linkedin.com/in/cesar-luciano-angeleri/) como parte de un trabajo práctico de React para RollingCode School.

## Tecnologías utilizadas

El proyecto utiliza las siguientes tecnologías y herramientas:

- React
- JavaScript
- HTML
- CSS
- Node.js
- npm

## Instalación

Sigue los siguientes pasos para configurar el proyecto en tu máquina local:

1. Clona este repositorio en tu máquina local o descarga el archivo ZIP.
2. Abre una terminal y navega hasta la carpeta raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias del proyecto:

```
npm install
```
## Ejecución

Después de haber instalado las dependencias, sigue los siguientes pasos para ejecutar el proyecto:

1. En la misma terminal, ejecuta el siguiente comando para iniciar la aplicación:

    ```
    npm run dev
    ```

2. Abre tu navegador web y ve a la dirección que aparece en la terminal, deberia ser algo como:
    ```
    http://localhost:5173/
    ```
### Funcionamiento del componente `Titulo` y `Boton`

* El componente `Titulo` recibe la prop `textoTitulo`. 
* Dentro de este componente, se utiliza el hook `useState` para crear un estado `msj` inicializado como una cadena vacía. 
* El componente renderiza un título `<h1>` que muestra el mensaje "Hello" seguido del valor de `textoTitulo` y el estado `msj`. 
* Además, se renderiza un componente `<Boton>` que, al ser clickeado, ejecuta la función `handleClick`, que actualiza el estado `msj` con el valor "from changed state". Esto provoca una re-renderización del componente y muestra el nuevo valor del estado `msj` en pantalla.
