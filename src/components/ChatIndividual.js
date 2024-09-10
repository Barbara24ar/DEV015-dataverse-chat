import data from '../data/dataset.js'; // Importa el dataset de donde se extraerán los datos de la mascota
import { communicateWithOpenAI } from "../lib/openAIApi.js"; // Importa la función para comunicarte con la API de OpenAI
import { navigateTo } from "../router.js"; // Importa la función de navegación para cambiar de ruta

const logoPath = 'img/Logo (1).png'; // Define la ruta por defecto para el logo o imagen de la mascota

// Exporta la función ChatIndividual, que recibe un id para identificar al personaje
export const ChatIndividual = ({ id }) => {
  // Desestructuramos los datos del dataset en base al id recibido
  const { name, imageUrl = logoPath, shortDescription, description, facts = {} } = data.find(item => item.id === id) || {};
  const { pet = '', gender = '', petSize = '' } = facts; // Desestructuramos facts con valores por defecto

  // Crear un contenedor para el chat
  const containerChat = document.createElement("div");
  containerChat.classList.add("chatIndividual"); // Añade la clase chatIndividual al contenedor
  // Estructura HTML del chat: incluye título, imagen y campo de texto para mensajes
  containerChat.innerHTML = `
    <div class="chat__title">
      <img class="chat__title__arrow" src="img/arrow-left.webp" alt="back arrow"/>
      <div class="chat__title__text"> 
        <div class="chat_details">
          <h1 class="chat__details__name">${name}</h1>
          <span class="chat__details__status">En línea</span>
        </div>
      </div>
    </div>
    <div class="overflow">
      <div class="chat__reply">
        <img class="chat__message__image" src="${imageUrl}" alt="chat icon"/>
        <div class="chat__reply__text">¡Hola, soy ${name}! ${shortDescription}</div>
      </div>
    </div>
    <div class="chat__input">
      <textarea class="chat__input__field" placeholder="Escribe un mensaje..."></textarea>
      <button class="chat__input__button">
        <span class="material-symbols-outlined">arrow_upward_alt</span>
      </button>
    </div>
  `;

  // Añade evento al ícono de "regresar", que navega a la página principal
  containerChat.querySelector(".chat__title__arrow").addEventListener("click", () => navigateTo("/"));
  
  const inputField = containerChat.querySelector(".chat__input__field"); // Campo de entrada de mensajes del usuario
  const chatContainer = containerChat.querySelector(".overflow"); // Contenedor de mensajes en el chat

  // Función para agregar mensajes al chat
  const addMessageToChat = (message, role) => {
    const messageElement = document.createElement("div");
    messageElement.classList.add(role === "user" ? "chat__send" : "chat__reply");
    messageElement.innerHTML = `
      ${role === "user" ? `<div class="chat__message__text">${message}</div>` : `
        <img class="chat__message__image" src="${imageUrl}" alt="chat icon"/>
        <div class="chat__reply__text">${message}</div>`} 
    `;
    chatContainer.appendChild(messageElement); // Agrega el mensaje al contenedor
    chatContainer.scrollTop = chatContainer.scrollHeight; // Desplaza el chat hacia abajo para mostrar el último mensaje
  };

  // Función para enviar el mensaje del usuario y obtener una respuesta de OpenAI
  const sendMessage = async () => {
    const userMessage = inputField.value.trim(); // Obtiene el mensaje del usuario y elimina espacios en blanco
    if (!userMessage) return; // Si el mensaje está vacío, no hace nada

    addMessageToChat(userMessage, "user"); // Agrega el mensaje del usuario al chat
    inputField.value = ""; // Limpia el campo de texto después de enviar

    try {
      // Llama a la API de OpenAI para obtener una respuesta basada en el personaje
      const response = await communicateWithOpenAI([
        { role: "system", content: `Asume el rol de ${name}. Una mascota ${pet} del género ${gender} y tamaño ${petSize} con la siguiente descripción: ${description}.` },
        { role: "user", content: userMessage } // Envía el mensaje del usuario como parte de la conversación
      ]);
      const assistantMessage = response.choices[0].message.content; // Obtiene la respuesta de OpenAI
      addMessageToChat(assistantMessage, "tech"); // Muestra la respuesta en el chat
    } catch (error) {
      addMessageToChat(`Lo siento, no pude responder. ${error}`, "tech"); // Muestra un mensaje de error si OpenAI falla
    }
  };

  // Evento para enviar mensaje al presionar la tecla Enter
  inputField.addEventListener("keydown", (event) => event.key === "Enter" && sendMessage());
  // Evento para enviar mensaje al hacer clic en el botón de enviar
  containerChat.querySelector(".chat__input__button").addEventListener("click", sendMessage);

  return containerChat; // Retorna el contenedor completo del chat
};
