# Fichas de personaje D&D

Aplicación web para crear fichas de personaje de D&D fuera de la sesión. Los jugadores hacen sus tiradas con dados 3D y la ficha llega sola al Dungeon Máster, que puede revisarla y editarla.

## Funciones

**Jugadores**
- Inicio de sesión con Google o con correo y contraseña.
- Creación de personaje solo cuando el DM concede un permiso.
- Tirada de estadísticas con dados 3D y reparto arrastrando los dados a cada casilla.
- Tirada obligatoria de cada recurso (vida, maná y ánima) y reparto libre de los dados del nivel entre ellos.
- Bonos de flor con el color de la flor, tiradas de recompensa y reparto de puntos de estadística.
- Foto opcional del personaje, con recorte, y colores de la ficha basados en esa foto.
- Textos de Trasfondo, Profesión, Alineamiento y Background.

**Dungeon Máster**
- Panel con todos los jugadores y sus fichas.
- Concede permisos de personaje, fija el nivel máximo y elimina jugadores o personajes.
- Edita cualquier dato de la ficha.
- Pestaña de tablas para editar clases, flores y recompensas.

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La aplicación completa. Es el único archivo que cambia al actualizar. |
| `firebase-config.js` | Configuración de tu proyecto de Firebase. Se rellena una sola vez. |
| `firestore.rules` | Reglas de seguridad de la base de datos. |
| `manifest.webmanifest` e `icon.svg` | Permiten instalarla en el móvil como app. |

## Uso

1. El DM entra con Google, usando el correo que puso en las reglas, y fija el nivel máximo.
2. Cada jugador entra, escribe su nombre y aparece en el panel del DM.
3. El DM pulsa "Permitir nuevo personaje" y el jugador crea su ficha y hace las tiradas.
4. Al terminar, la ficha se envía sola al DM.

## Actualizar

Sustituye `index.html` sin tocar `firebase-config.js`. Si cambian las reglas, vuelve a pegar `firestore.rules`. Los datos se conservan en Firestore.

## Instalar en el móvil

Abre la dirección en el navegador y elige "Añadir a la pantalla de inicio".

## Tecnología

HTML, CSS y JavaScript sin servidor propio. Usa Firebase (Authentication y Firestore) y three.js para los dados 3D.
