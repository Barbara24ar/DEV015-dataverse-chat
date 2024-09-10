import { getApiKey } from "./apiKey.js"; // Importa la función getApiKey, que obtiene la clave API almacenada

//objetivo: interactuar con la API de OpenAI, específicamente con el modelo GPT-4, para enviar mensajes y recibir respuestas

// Exporta la función communicateWithOpenAI, que acepta un arreglo de mensajes y realiza una petición a la API de OpenAI
export const communicateWithOpenAI = (messages) => {
  const APIKEY = getApiKey(); // Obtiene la clave API llamando a la función getApiKey

  // Verifica si la clave API existe
  if (!APIKEY) {
    // Si no se encuentra una clave API, rechaza la promesa con un error
    return Promise.reject(new Error("API KEY no encontrada, por favor ingrese una API KEY desde el botón Api."));
  }
  //peticion http 
  // Realiza una solicitud HTTP POST a la API de OpenAI
  return fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",                                 // Utiliza el método POST para enviar la solicitud
    headers: {                                      //donde ${APIKEY} es la clave de API que obtienes de tu localStorage.
      Authorization: `Bearer ${APIKEY}`,            // Incluye la clave API en el encabezado de autorización. Esto asegura que solo los usuarios con la clave correcta puedan acceder a los recursos de la API.
      "Content-Type": "application/json",           // Especifica que el contenido es JSON
    },
    body: JSON.stringify({
      model: "gpt-4", // Especifica el modelo GPT-4 de OpenAI
      messages: messages, // Incluye los mensajes enviados como parámetro
    }),
  })
    .then((response) => {
      // Verifica si la respuesta es válida (código de estado HTTP en el rango 200-299)
      if (!response.ok) {
        // Si hay un error, evalúa el código de estado para dar un mensaje de error personalizado
        switch (response.status) {
        case 400:
          throw new Error("Solicitud incorrecta: " + response.statusText); // Error 400: Petición mal formada
        case 401:
          throw new Error("No autorizado: " + response.statusText); // Error 401: Autenticación fallida
        case 403:
          throw new Error("Prohibido: " + response.statusText); // Error 403: No tienes permisos
        case 404:
          throw new Error("No encontrado: " + response.statusText); // Error 404: URL no encontrada
        case 429:
          throw new Error("Demasiadas solicitudes: " + response.statusText); // Error 429: Límite de peticiones alcanzado
        case 500:
          throw new Error("Error interno del servidor: " + response.statusText); // Error 500: Fallo del servidor
        case 502:
          throw new Error("Puerta de enlace incorrecta: " + response.statusText); // Error 502: Fallo en la puerta de enlace
        case 503:
          throw new Error("Servicio no disponible: " + response.statusText); // Error 503: Servidor temporalmente fuera de servicio
        case 504:
          throw new Error("Tiempo de espera de la puerta de enlace: " + response.statusText); // Error 504: Tiempo de espera agotado
        default:
          throw new Error("Error en la petición a OpenAI: " + response.statusText); // Otros errores no especificados
        }
      }
      // Si la respuesta es válida, se convierte a JSON para obtener los datos
      return response.json();
    })
    .catch((error) => {
      // Si ocurre algún error durante el proceso, se captura aquí y se lanza de nuevo
      throw error;
    });
};



/* Tipos de Errores y sus Códigos de Estado HTTP
------------------------------------------------
Errores del Cliente (4xx):
-400 Bad Request: La solicitud tiene una sintaxis incorrecta o no puede ser procesada.
-401 Unauthorized: La solicitud carece de credenciales de autenticación válidas.
-403 Forbidden: La solicitud es válida, pero el servidor se niega a responder.
-404 Not Found: El recurso solicitado no se encontró en el servidor.
-429 Too Many Requests: Se han realizado demasiadas solicitudes en un corto período (rata limit).
Errores del Servidor (5xx):
-500 Internal Server Error: El servidor encontró una condición inesperada que le impidió cumplir con la solicitud.
-502 Bad Gateway: El servidor, actuando como una puerta de enlace o proxy, recibió una respuesta inválida del servidor ascendente.
-503 Service Unavailable: El servidor no está disponible actualmente (por ejemplo, por mantenimiento o sobrecarga).
-504 Gateway Timeout: El servidor, actuando como una puerta de enlace o proxy, no recibió una respuesta a tiempo del servidor ascendente.
*/
