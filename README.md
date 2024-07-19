
# Api

Este proyecto permite consultar y visualizar datos de solicitudes almacenadas en MongoDB Atlas. Utiliza Node.js para el backend y jQuery para la interacción en el frontend.

## Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. **Instalar las dependencias**

   ```bash
   npm install
   ```

3. **Configurar la conexión a MongoDB**

   Abre el archivo `fetchDocuments.js` y reemplaza la URI de conexión con la URI de tu base de datos MongoDB Atlas.

   ```javascript
   const uri = 'mongodb+srv://usuario:contraseña@cluster0.mongodb.net/?retryWrites=true&w=majority';
   ```

4. **Iniciar el servidor**

   ```bash
   node fetchDocuments.js
   ```

   Esto iniciará un servidor en `http://localhost:3000` que proporciona una API para obtener los datos de las solicitudes.

## Explicación del Código

### `fetchDocuments.js`

- **Objetivo:** Configura un servidor Express que consulta una base de datos MongoDB y devuelve los documentos en formato JSON.
- **Función Principal:** `fetchDocuments` se conecta a MongoDB, consulta todos los documentos de la colección `solicitudes`, y los devuelve en formato JSON.

### `index.html`

- **Objetivo:** Proporciona una interfaz web para visualizar y filtrar las solicitudes.
- **Funcionalidad:**
  - **Carga de Datos:** Utiliza `fetch` para obtener datos del servidor Express.
  - **Filtro de Datos:** Permite filtrar los datos por diferentes criterios (responsable, estatus, solicitante, fecha).
  - **Visualización:** Muestra los datos en una tabla y calcula el rendimiento general basado en los estatus de las solicitudes.

## Uso

1. **Asegúrate de que el servidor Express está en funcionamiento.**
2. **Abre el archivo `index.html` en un navegador web.** Esto cargará la interfaz que muestra los datos de las solicitudes.
3. **Utiliza los filtros disponibles** para buscar y filtrar los datos según los diferentes criterios.




Este `README.md` proporciona una guía rápida sobre cómo instalar, configurar y usar el proyecto, además de una breve descripción del código principal. Asegúrate de reemplazar los detalles específicos con los de tu configuración.
