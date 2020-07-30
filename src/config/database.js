require('dotenv').config({
  path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'
})

module.exports = { 
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || "mysql",
    storage: './__tests__/database.sqlite'
  },
  test: {
    dialect: process.env.DB_DIALECT,
    storage: './__tests__/database.sqlite'
  }
}
