# :link: URL Shortener

Assuming you already have Node, NPM and Mysql,
***
### Clone or fork this repository

#### `git clone https://github.com/vitorlc/url-shortener`

 cd to directory

### Install dependencies

#### `npm install`

### Edit .env.example file:

You need to set your database environment variables configuration, like this example:

##### DB_HOST=127.0.0.1
##### DB_USER=root
##### DB_PASS=12345678
##### DB_NAME=database_development

Rename ".env.exemple" to ".env" and ".env.test.exemple" to ".env.test"

### Connect to database
 
Now, you need to connect to the database and then create another database schema with the name you gave in the .env file. In this example, the database name is "database_development". For this step you can use any mysql client interface like MySQL Workbench, DBeaver, etc.

### Run migrations

Now you can run migrations to create the database tables schema.

#### `npx sequelize db:migrate`

### Server is ready! You can run it with:

#### `npm run dev`

That runs the app in development mode.

***
### Run tests

#### `npm run test`

Also have a static page for public test.

Just access: http://localhost:3000/form.html

You could use some JSONView extension for better look to responses.



### Routes

ROUTE                      |     HTTP Method   |      Description              |      Links (via PostMan)                 
-------------------------  | ----------------- | ---------------------         | ---------------------------------------- 
/urls                      |       GET         | List all shortened Urls       | GET:    http://localhost:3000/urls      
/shortUrl                  |       POST        | Create a new Short Url        | POST:   http://localhost:3000/shortUrl
/:shortUrl                 |       GET         | Redirect to a original Url    | GET:    http://localhost:3000/:shortUrl
