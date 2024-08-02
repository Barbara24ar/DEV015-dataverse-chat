// src/views/Home.js

export function Home(props) {
    const viewEl = document.createElement('div');
    viewEl.textContent = 'Welcome to the home page!';
    return viewEl;
  }
  
  // src/views/About.js
  
  export function About(props) {
    const viewEl = document.createElement('div');
    viewEl.textContent = 'This is the About page.';
    return viewEl;
  }

  
  // Definir funciones/componentes similares para otras rutas


  // src/views/Home.js

import { data } from '../data/dataset.js';
import { filterData } from '../lib/dataFunctions.js';

export function Home(props) {
  const viewEl = document.createElement('div');
  //Modificariamos el contenido del nuevo elemento con lo realizado en Dataverse
  viewEl.innerHTML = `
    <h1>DataVerse</h1>
    ...
  `;
  return viewEl;
}