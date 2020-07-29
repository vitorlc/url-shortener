# :link: URL Shortener

Assuming you already have Node, NPM and Mysql,

### Clone or fork this repository

#### `git clone https://github.com/vitorlc/url-shortener`

 cd to directory

### Install dependencies

#### `npm install`

### Edit config/database.js file:

You need to set your database environment variables configuration, like this example:

#### username: "root",
#### password: "12345678",
#### database: "database_development",

### Connect to database
 
Now, you need to connect to the database and then create another database with the name you gave in the config/database.js file. In this example, the database name is "database_development". For this step you can use any mysql client interface like MySQL Workbench, DBeaver, etc.

### Run migrations

Now you can run migrations to build the relations on database created

#### `npx sequelize db:migrate`

### Server is ready! You can run it with:

#### `npm run dev`

Runs the app in the development mode.