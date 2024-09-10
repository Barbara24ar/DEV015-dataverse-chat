import { navigateTo } from "../router.js";

export const Nav = () => {
  const logoPath = 'img/Logo.png';

  const navContainer = document.createElement("div");
  navContainer.classList.add("nav");

  navContainer.innerHTML = `
    <div class="nav__logo">
      <img class="nav__logo__image" src="${logoPath}" alt="Dataverse"/>
    </div>
    <div class="nav__btn">
      <button class="nav__btn__panel" id="btn_panel">Chat Grupal</button>
      <button class="nav__btn__api" id="btn_api">Api</button>
    </div>
  `;

  navContainer.querySelector(".nav__logo").addEventListener("click", () => {
    navigateTo("/");
  });

  navContainer.querySelector("#btn_panel").addEventListener("click", () => {
    navigateTo("/chat-group");
  });

  navContainer.querySelector("#btn_api").addEventListener("click", () => {
    navigateTo("/api-key");
  });

  return navContainer;
};