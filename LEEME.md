# App de fichas de D&D — guía de puesta en marcha

Contenido de la carpeta:
- `index.html` — la app completa (dados 3D, sonido, panel del DM). **Es el único archivo que cambia al actualizar.**
- `firebase-config.js` — tu configuración de Firebase (se rellena una sola vez).
- `firestore.rules` — reglas de seguridad de la base de datos.
- `manifest.webmanifest` e `icon.svg` — para instalarla en el móvil.

Tiempo estimado: 30–45 minutos la primera vez. Todo es gratuito con el plan "Spark" de Firebase.

## 1. Crear el proyecto en Firebase
1. Entra en https://console.firebase.google.com con una cuenta de Google (puede ser la tuya) y pulsa **Crear un proyecto**.
2. Ponle un nombre (por ejemplo `fichas-dnd`). Puedes desactivar Google Analytics.

## 2. Registrar la app web y copiar la configuración
1. En la página principal del proyecto pulsa el icono **`</>`** (Web).
2. Ponle un apodo y pulsa **Registrar app**. No marques Hosting por ahora.
3. Te mostrará un bloque `const firebaseConfig = { ... }`. Copia esos valores.
4. Abre `firebase-config.js` con el Bloc de notas y sustituye cada `PEGA_AQUI` (son 6) por el valor que te dio Firebase. Guarda el archivo.

## 3. Activar el inicio de sesión
1. Menú **Compilación → Authentication → Comenzar**.
2. En **Método de acceso** activa **Google** y **Correo electrónico/contraseña**.
3. **El DM debe entrar con Google**, usando el correo que pongas en el paso 4.

## 4. Crear la base de datos y las reglas
1. Menú **Compilación → Firestore Database → Crear base de datos**.
2. Elige una ubicación en Europa (por ejemplo `eur3`) y el modo **producción**.
3. Pestaña **Reglas**: borra todo y pega el contenido de `firestore.rules`.
4. **Antes de publicar**, cambia `CORREO_DEL_DM@gmail.com` por el correo de Google del DM. Pueden ser varios, separados por comas, entre comillas.
5. Pulsa **Publicar**.

## 5. Subir la app a internet (la opción más fácil)
**Netlify Drop** (sin instalar nada):
1. Entra en https://app.netlify.com/drop (te pedirá crear una cuenta gratuita).
2. Arrastra la carpeta completa. Te dará una dirección tipo `https://nombre.netlify.app`.
3. Vuelve a Firebase: **Authentication → Configuración → Dominios autorizados → Agregar dominio** y añade esa dirección (sin `https://`). Sin este paso el inicio de sesión falla.

Alternativas: GitHub Pages o Firebase Hosting (este último necesita instalar Node y la herramienta de línea de comandos de Firebase).

## 6. Primer uso
1. El DM abre la dirección y entra con Google. Aparece el **Panel del DM**.
2. Fija el **nivel máximo** y pulsa Guardar (hazlo antes de dar permisos).
3. Cada jugador abre la dirección, crea su cuenta (Google o correo/contraseña) y escribe su nombre.
4. El jugador aparece en el panel del DM. Pulsa **➕ Permitir nuevo personaje** (con dados extra de bono si toca).
5. El jugador crea el personaje y hace las tiradas. Al terminar, la ficha aparece sola en el panel del DM, donde puede editarla y añadir Trasfondo, Profesión y Alineamiento.

## 7. Instalarla en el móvil
Abre la dirección en el navegador del móvil y elige **Añadir a la pantalla de inicio** (o **Instalar aplicación**). Se abre como una app. Si más adelante quieres un APK real, se puede empaquetar con PWABuilder o Capacitor.

## Cómo actualizar la app más adelante
1. Sustituye solo `index.html` por la versión nueva. `firebase-config.js` no se toca, así que no hay que volver a pegar nada de Firebase.
2. Si te aviso de que cambian las reglas, pega el nuevo `firestore.rules` en Firestore → Reglas (cambiando otra vez el correo del DM) y pulsa Publicar.
3. Vuelve a subir la carpeta a Netlify (o arrastra solo el archivo nuevo en Deploys). Los jugadores deben recargar la página, o cerrar y abrir la app instalada, para ver la versión nueva.
Los datos (jugadores, permisos y fichas) viven en Firestore, así que no se pierden al actualizar.

## Qué impiden las reglas del servidor
- Un jugador solo ve sus propios personajes; el DM ve todos.
- Solo el DM concede permisos y cambia el nivel máximo.
- Cada permiso da un único personaje, y su nivel no puede pasar del máximo.
- Cada paso (estadísticas, vida, maná y ánima) solo se puede guardar una vez y en orden.
- El jugador puede escribir Trasfondo, Profesión y Alineamiento, y repartir sus puntos de estadística (solo subiendo estadísticas y gastando los puntos).
- El DM puede editar todo lo demás en la ficha.

## Límite que conviene saber
Los dados se tiran en el dispositivo del jugador. Las reglas impiden repetir tiradas, pero un jugador con conocimientos técnicos podría escribir valores falsos en su primera tirada. El DM ve todos los dados y puede comprobarlos. Para eliminar este riesgo haría falta que las tiradas las hiciera el servidor (Cloud Functions, plan Blaze con tarjeta), algo que se puede añadir más adelante.

## Si algo falla
- **No inicia sesión:** falta añadir el dominio en Dominios autorizados (paso 5.3).
- **"Error de datos: permission-denied":** las reglas no están publicadas o el correo del DM no coincide.
- **No aparece el panel del DM:** el DM debe entrar con Google y con el mismo correo que pusiste en las reglas.
- **El jugador no puede crear personaje:** el DM no ha fijado el nivel máximo o no le ha concedido un permiso.
- **Tablas definitivas:** cuando las tengas, se cambian en `index.html` (clases, flores y recompensas, al inicio del script, más las reglas si cambia algo que ellas comprueban).
