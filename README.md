# rest-api-seed

To get started

- you must have mysql, and node installed
- create local db named rest-api-seed
- npm install
- npm start

Dev server

- npm run dev

Routes

 - / : Home
 - get > /users : list of all users
 - get > /users/<userId> : get single user by ID
 - post > /users/register body:{username:<username>, email:<email>, password:<password>} create user 

Recommended Installations

 - nodemon

Technology and node packages used
 - mySql
 - sequelize
 - sequelize-cli
 - express-generators
 - bcrypt (For password encryption)

Future project extension
- Adding JWT for user auth
- Implementing custom middlewheres