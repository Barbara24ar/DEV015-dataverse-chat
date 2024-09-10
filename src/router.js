// Definimos un objeto vacío que contendrá las rutas de la aplicación
let ROUTES = {};

// Definimos una variable para almacenar el elemento raíz donde se renderizarán las vistas
let rootEl;

// Función para establecer el elemento raíz donde se insertarán las vistas (DOM)
export function setRootEl(el) {
  rootEl = el; // Guardamos el elemento recibido en la variable rootEl
}

// Función para definir las rutas de la aplicación
export const setRoutes = (routes) => {
  // Verificamos que el parámetro routes sea un objeto
  if (typeof routes !== 'object') {
    throw new Error('Routes should be an object.'); // Lanzamos un error si no es un objeto
  }
  // Verificamos que la ruta '/NotFound' esté definida para manejar rutas no encontradas
  if (!routes['/NotFound']) { 
    throw new Error('Routes should define an /NotFound route.'); // Lanzamos un error si no está definida
  }
  // Asignamos el objeto de rutas recibido a la variable global ROUTES
  ROUTES = routes;
};

// Función para convertir una query string en un objeto
const queryStringToObject = (queryString) => {
  const params = new URLSearchParams(queryString); // Creamos un objeto URLSearchParams a partir de la query string
  return Object.fromEntries(params.entries()); // Convertimos las entradas de params en un objeto
};

// Función para convertir un objeto en una query string
export const objectToQueryString = (props) => {
  // Verificamos si el objeto tiene propiedades
  if (Object.keys(props).length !== 0) {
    let str = '?'; // Iniciamos la query string con un "?"
    // Recorremos las propiedades del objeto
    for (const i in props) {
      str += i + '=' + props[i] + '&'; // Añadimos cada clave y valor a la query string
    }

    // Si la cadena termina con "&", lo eliminamos
    if (str.endsWith("&")) {
      str = str.slice(0, -1); // Quitamos el último "&"
    }

    return str; // Devolvemos la query string formada
  } else {
    return ''; // Si el objeto está vacío, devolvemos una cadena vacía
  }
};

// Función para renderizar la vista correspondiente a la ruta
const renderView = (pathname, props = {}) => {
  // Verificamos que el elemento raíz haya sido establecido
  if (!rootEl) {
    throw new Error('Root element is not set.'); // Lanzamos un error si no está definido el elemento raíz
  }
  // Limpiamos el contenido del elemento raíz
  rootEl.innerHTML = '';
  // Buscamos la vista correspondiente a la ruta, si no existe usamos la ruta '/NotFound'
  const view = ROUTES[pathname] || ROUTES['/NotFound'];
  // Llamamos a la función de la vista, pasando las propiedades (props)
  const viewEl = view(props);
  // Verificamos que la función de la vista devuelva un nodo del DOM válido
  if (!(viewEl instanceof Node)) {
    throw new Error('La vista no devolvió un nodo válido. Verifica la función de vista correspondiente.'); // Error si no es un nodo válido
  }
  // Insertamos el nodo de la vista en el elemento raíz
  rootEl.appendChild(viewEl);
};

// Función que se ejecuta cuando la URL cambia (como al hacer "back" en el navegador)
export function onURLChange(location) {
  const { pathname, search } = location; // Extraemos la ruta y la query string de la URL
  const queryObject = queryStringToObject(search); // Convertimos la query string en un objeto
  renderView(pathname, queryObject); // Renderizamos la vista correspondiente a la ruta con los parámetros
}

// Función para navegar a una nueva ruta dentro de la aplicación
export const navigateTo = (pathname, props = {}) => {
  // Verificamos si la ruta está definida en el objeto ROUTES
  const isRouteDefined = Object.prototype.hasOwnProperty.call(ROUTES, pathname);
  if (!isRouteDefined) {
    pathname = '/NotFound'; // Si la ruta no está definida, navegamos a '/NotFound'
  }
  // Actualizamos el historial del navegador con la nueva URL (incluyendo parámetros de la query string)
  window.history.pushState({}, pathname, window.location.origin + pathname + objectToQueryString(props));
  // Renderizamos la vista correspondiente a la nueva ruta
  renderView(pathname, props);
};

// Evento para manejar la navegación cuando el usuario usa los botones de retroceso o avance del navegador
window.addEventListener('popstate', () => onURLChange(window.location));
