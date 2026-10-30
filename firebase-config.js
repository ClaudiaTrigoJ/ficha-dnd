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
// NUNCA pegues aquí la URL del webhook de Discord: este archivo es público.
// Pega la dirección de tu Cloudflare Worker (la que termina en .workers.dev).
// Si se deja vacío, no se envían avisos a Discord.
export const discordProxy = "https://avisos-fichas-discord.claudiatrigojimenez.workers.dev";
