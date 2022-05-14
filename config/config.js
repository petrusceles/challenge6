module_exports = {
  "development": {
    "username": "postgres",
    "password": "putrasena21",
    "database": "challenge4",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres",
    "dialectOptions": {
       "ssl": {
         "require": true,
         "rejectUnauthorized": false
       }
     }
   }
}
