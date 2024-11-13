## Backend Project - Node.js, Express, TypeScript, Sequelize
Este proyecto backend está construido con Node.js, Express, TypeScript, y Sequelize para gestionar una base de datos SQL. A través de este backend, se gestionan operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para manejar datos de personas, y se conecta con un frontend donde se muestran gráficos, eventos en un calendario, localizaciones en un mapa y una tabla de datos de personas.

## Tecnologías utilizadas
- Node.js: Plataforma de JavaScript para ejecutar el backend.
- Express: Framework de Node.js para manejar rutas y solicitudes HTTP.
- TypeScript: Superset de JavaScript que añade tipado estático.
- Sequelize: ORM para interactuar con bases de datos SQL, en este caso, MySQL.
- dotenv: Para gestionar variables de entorno y proteger las credenciales de acceso a la base de datos.
- MySQL: Sistema de gestión de bases de datos relacionales utilizado para almacenar la información.


## Estructura del proyecto

/project-root
├── /controllers                    # Lógica de negocio y manejo de solicitudes CRUD
│   └── eventosController.ts      
│   └── localizacionController.ts     
│   └── personasController.ts     
│   └── ventasController.ts   
│
├── /db
│   └── database.ts              # Conexión e inicialización de la base de datos
│
├── /routes
│   └── eventos-routes.ts          # Rutas para interactuar con los eventos que se enseñaran en calendario en el front-end
│   └── localizaciones-routes.ts   # Rutas para interactuar con las localizaciones que se enseñaran en un mapa en el front-end
│   └── personas-routes.ts         # Rutas para interactuar con las ersonas que se enseñaran mediante una tabla en el front-end
│   └── ventas-routes.ts           # Rutas para interactuar con las ventas que se enseñaran mediante gráficos en el front-end
│
│
├── .env                         # Archivo de variables de entorno (protege las credenciales de DB)
├── server.ts                       # Configuración general de la aplicación Express
├── package.json                 # Dependencias y scripts del proyecto
├── tsconfig.json                # Configuración de TypeScript
└── README.md                    # Este archivo

## Descripción de las carpetas y archivos:
/controllers: Esta carpeta contiene los controladores, que gestionan la lógica de negocio de las solicitudes HTTP. Se maneja las operaciones CRUD para los diferentes datos.

/db: Contiene la configuración de la base de datos y los modelos. En config.ts, se definen las credenciales y configuraciones para la conexión con la base de datos. El archivo database.ts inicializa la conexión, se define el modelo Sequelize

/routes: Aquí se definen las rutas para acceder a los recursos de la API. En personRoutes.ts, se configuran las rutas para realizar las operaciones

.env: Un archivo que contiene las variables de entorno, como las credenciales de acceso a la base de datos, de forma que no estén hardcodeadas en el código.

server.ts: El archivo principal donde se configura y ejecuta el servidor Express.

## Instalación
- Clona este repositorio:

bash
Copiar código
git clone https://github.com/jhor94/Sprint_8_back.git 

- Instala las dependencias:

bash
Copiar código
npm install

- Crea el archivo .env en el directorio raíz y añade las credenciales de tu base de datos:

makefile
Copiar código
DB_HOST=localhost
DB_PORT=3306
DB_USER=tu-usuario
DB_PASSWORD=tu-contraseña
DB_NAME=sprintAngular

- Compila el código TypeScript:

bash
Copiar código
npm run tsc
Ejecuta el servidor:
- Dentro del SQL crea una base de datos llamada sprintAngular e importa la base de datos dentro.

- Inicia el servidor local del back
bash
Copiar código
npm  run servidor
El servidor ahora debería estar en ejecución, escuchando las solicitudes HTTP en el puerto que hayas configurado (por defecto, en el puerto 3000).

## Funcionalidades
- CRUD: El backend maneja operaciones CRUD sobre los datos. Para utilizarlos de manera dinamica en el front-end
- Protección de credenciales: Las credenciales de acceso a la base de datos están protegidas utilizando un archivo .env.
- Conexión a la base de datos: El backend está conectado a una base de datos SQL mediante Sequelize, permitiendo operaciones CRUD sobre las tablas definidas.
- Conexión con el frontend

Este backend se conecta a un frontend donde los usuarios pueden interactuar con los datos a través de gráficos, eventos en un calendario, un mapa con localizaciones y una tabla con los datos de las personas. Las operaciones CRUD realizadas desde el frontend se reflejan en la base de datos a través de las rutas y controladores de este backend.