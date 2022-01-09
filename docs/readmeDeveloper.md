## 1. Ejecutar el Servidor con Nodemon
### En la carpeta package.json, buscaremos:
  "scripts": {
    "vercel-build": "node index.js",
    "build": "nodemon index.js",
    "start": "node index.js"
  }
### Este nos indicará dos cosas, el comando que se debe usar para ejecutar el archivo y la ubicación del archivo que se va a ejecutar con dicho comando
### Hay que escribir en la terminal "npm run" + nombre del comando correspondiente con la ejecución del archivo:
npm run start

### Convertir terminal en la consola de MySQL
mysql -u root -p -h 127.0.0.1 -P 3306
password: NO

# Abrir Panel del Desarrollador Web
- Ctrl + Shift + I
- Consola

# Cargar y Guardar en Repositorios Git y GitHub
## 1. Cargar modificaciones de otros colaboradores:
git fetch
git pull
## 2. Guardar todo los archivos modificados:
Ctrl K S
## 3. Guardar en GitHub al escribir en Consola:
git add .
git commit -m "escribir un comentario de lo desarrollado en tu labor"
git push

# Guardar en la Aplicación de GitHub
## 1.- Abrir la Aplicación de GitHub
## 2.- Buscar el repositorio a trabajar: Botón Grande de la parte superior izquierda con una flechita
## 3.- Escribir el Commit en el panel de la parte inferior izquierda.
## 4.- Presionar el botón de "Push" que aparecerá en la parte superior central.

# Instalaciones
## Node
### Comenzar con node para crear un package.json
npm init -y

### Instalar Dependencias del Proyecto:
npm install express ejs morgan vercel bcryptjs util mysql

### Instalar Dependencias de Desarrollo: Para evitar el tener que reiniciar el servidor por cada modificación.
npm install nodemon -D

### Instalar paquete para subir a un servidor de manera global
<!-- npm install -g now -->
npm install -g vercel


### Usar Heroku:
#### Instalar el Programa de Heroku desde la página y seguir instrucciones:
heroku create
git push heroku main

### Habilitar la ejecución de ps1 (https://www.blai.blog/2019/05/habilitar-ejecucion-de-archivos-ps1-en.html) para poder hacer uso de los comandos de 'now' y subir el proyecto a un servidor
Set-ExecutionPolicy -Scope LocalMachine unrestricted
