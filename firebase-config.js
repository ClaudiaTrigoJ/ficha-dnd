// Pega aquí la configuración de tu proyecto de Firebase (solo esta vez).
// Al actualizar la app, sustituye index.html y deja este archivo como está.
export const firebaseConfig = {
  apiKey: "AIzaSyA282WpjPkqSQnjELhNdI26zLHo8xQqolQ",
  authDomain: "fichas-dnd-6d163.firebaseapp.com",
  projectId: "fichas-dnd-6d163",
  storageBucket: "fichas-dnd-6d163.firebasestorage.app",
  messagingSenderId: "269177881747",
  appId: "1:269177881747:web:48769e96bae00006c13966"
}; 

// ---------------------------------------------------------------
// AVISOS POR DISCORD (opcional)
// Pega aquí la URL del webhook del canal del DM entre las comillas.
// Si se deja vacío, simplemente no se envían avisos a Discord.
export const discordWebhook = "";
 
// Mensajes que se envían. Puedes cambiar el texto, pero mantén las
// palabras entre llaves: {jugador} y {personaje}.
export const discordMessages = {
  registro: "{jugador} se ha registrado",
  personaje: "{personaje}, de {jugador}, ha sido creado"
};
