import data from '../data/dataset.js';
import { Nav } from "../components/Nav.js";
import { navigateTo } from "../router.js";
import { ChatIndividual } from "../components/ChatIndividual.js";

export function Chat(props) {
  const chatView = document.createElement("div");
  chatView.classList.add("chat");

  chatView.appendChild(Nav());
  const mainElement = document.createElement("main");
  mainElement.classList.add("chat__main");
  chatView.appendChild(mainElement);
  mainElement.appendChild(ChatIndividual(props));

  const itemData = data.find((item) => item.id === props.id);

  if (!itemData) {
    navigateTo("/404");
    return chatView;
  }

  document.title = `Chat con ${itemData.name}`;
  let faviconElement = document.querySelector("[type='image/x-icon']");
  if (!faviconElement) {
    faviconElement = document.createElement('link');
    faviconElement.rel = 'icon';
    faviconElement.type = 'image/x-icon';
    document.head.appendChild(faviconElement);
  }
  faviconElement.href = itemData.imageUrl || 'ruta-a-imagen-default.svg';

  document.querySelector("head").innerHTML += `
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,400,0,0" />
  `;

  const dataElement = document.createElement("li");
  dataElement.classList.add("data__container");
  dataElement.setAttribute("itemscope", "");
  dataElement.setAttribute("itemtype", "https://schema.org/CreativeWork");
  dataElement.setAttribute("data-id", itemData.id);

  dataElement.innerHTML = `
      <div class="data__image">
        <img class="data__image__background" src="${itemData.imageUrl}" alt="${itemData.name}" itemprop="image"/>
      </div>
        <div class="data__text__title">
          <h3 id="title__name" itemprop="name">${itemData.name}</h3>
        </div>
        <div class="data__text">
        <p class="data__text__description" itemprop="description">${itemData.description}</p>

        <p class="data__text__description" itemprop="facts">${itemData.facts.gender}</p>
        <p class="data__text__description" itemprop="facts">${itemData.facts.pet}</p>
        <p class="data__text__description" itemprop="facts">${itemData.facts.petSize}</p>
      </div>
    `;
  mainElement.appendChild(dataElement);
  return chatView;
}
