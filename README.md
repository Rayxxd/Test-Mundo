# Test-Mundo
Prueba programador 

## Instalación

- Instalar Composer desde **(https://getcomposer.org)**
- Instalar NodeJs desde **(https://node.js.org)**
- Instalar Git desde **(https://git-scm.com/dowloads)**
- Clonar el proyecto

```bash
git clone https://github.com/Rayxxd/test-mundo.git
```

## Backend

- Instalar dependencias en el directorio 'backend'
```bash
composer install
```
- Crear y configurar .env
```bash
cp .env.example .env
```
En el archivo .env agregar las credenciales de su base de datos.
```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE= 'Nombre base de datos'
DB_USERNAME=root
DB_PASSWORD= 'contraseña'
```
- Crear clave de seguridad
```bash
php artisan key:generate
```
- Migrar la base de datos  
```bash
php artisan migrate:fresh
```
- Poblar la base de datos
```bash
php artisan db:seed
```
- Ejecutar la aplicación
```bash
php artisan serve
```
## Frontend
- Instalar dependencias en el directorio 'frontend'
```bash
npm install
```
- Ejecutar la aplicación
```bash
npm start
```

