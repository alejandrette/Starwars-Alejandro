# 🌌 Star Wars Explorer
Star Wars Explorer es una aplicación desarrollada en React que utiliza la API de Star Wars para proporcionar información detallada sobre personajes, planetas, especies, vehículos y naves estelares del universo de Star Wars. Implementa variables globales con Context API para gestionar el estado de la aplicación y usa parámetros de URL (React Router Params) para extraer y mostrar datos específicos dinámicamente.

# 🌟 Características
- 🔍 Exploración de Datos: Obtén información detallada de personajes, planetas, vehículos y más.
- 📄 Páginas Dinámicas: Visualiza información específica extraída de la URL utilizando React Router Params.
- 🌐 Gestión Global de Estado: Utiliza Context API para compartir información entre componentes de forma eficiente.
- 📊 Diseño Interactivo: Interfaz limpia y amigable que mejora la experiencia de usuario.
- ❤️ Lista de Deseos: Agrega elementos a tu lista de favoritos y adminístrala fácilmente.
- 📱 Diseño Responsivo: Optimizado para dispositivos móviles y de escritorio.

# 🛠️ Tecnologías Utilizadas
- **React**: Para la creación de la interfaz de usuario y la lógica de componentes.
- **React Router**: Para la navegación dinámica entre diferentes vistas.
- **Context API**: Para el manejo de estado global.
- **Star Wars API (SWAPI)**: Para obtener datos detallados del universo de Star Wars.
- **Bootstrap**: Para un diseño responsivo y estilizado.
- **Fetch API**: Para realizar solicitudes a la API y obtener datos.

# 🚀 Instalación
1. Clona este repositorio:
```
git clone https://github.com/tu-alejandrette/Starwars-Alejandro.git
```
2. Accede al directorio del proyecto:
```
cd Starwars-Alejandro
```
3. Instala las dependencias necesarias:
```
npm install
```
4. Inicia la aplicación:
```
npm start
```

# 🧑‍💻 Uso

1. Explorar Datos:
	- Desde la página principal, selecciona una categoría: Personajes, Planetas, Vehículos, etc.
	- Haz clic en un elemento para ver información detallada.
2. Lista de Deseos:
	- Haz clic en el ícono de corazón para agregar un elemento a tu lista de deseos.
	- Gestiona tus favoritos desde el menú de lista de deseos.
3. Páginas Dinámicas:
	- Las páginas se renderizan dinámicamente usando datos obtenidos de los parámetros de la URL (e.g., /Information/characters/1).

# 📁 Estructura del Proyecto
- **store/appContext.js**: Archivo principal para manejar el estado global con Context API.
- **views/Home.js**: Página principal que muestra las categorías principales.
- **views/Information.js**: Página dinámica para mostrar detalles de cada elemento.
- **components/Navbar.js**: Barra de navegación con buscador y lista de deseos.
- **components/Card.js**: Componente reutilizable para mostrar tarjetas de elementos.
- **components/Pagination.js**: Navegación por paginación para explorar grandes cantidades de datos.
- **services/swapi.js**: Módulo para realizar solicitudes a la API de Star Wars.

# 🔮 Funcionalidades Futuras
- 🕹️ Interacciones Avanzadas: Agregar efectos interactivos para mejorar la experiencia de usuario.
- 🌍 Mapa Galáctico: Representar visualmente los planetas del universo de Star Wars.
- 📊 Estadísticas: Gráficos interactivos sobre datos relevantes.
- 🗂️ Historial de Favoritos: Mostrar un historial de elementos marcados como favoritos.

# 🤝 Contribuciones
¡Las contribuciones son bienvenidas! Si deseas colaborar:

1.Haz un fork del repositorio.
2. Crea una nueva rama:
```
git checkout -b feature-nueva-funcionalidad
```
3. Realiza tus cambios y haz un commit:
```
git commit -m "Agregada nueva funcionalidad"
```
4. Sube tu rama:
```
git push origin feature-nueva-funcionalidad
```
5. Abre un Pull Request y describe tus cambios.

# 👤 Autor
Este proyecto fue creado por @alejandrette. Si tienes preguntas o sugerencias, puedes contactarme a través de mi perfil de GitHub.

# 📜 Licencia
Este proyecto está bajo la Licencia MIT.
