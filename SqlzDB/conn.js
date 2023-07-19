
const { Sequelize } = require('sequelize');

const sqlize = new Sequelize('fims_db', 'root', '', {
  host: 'localhost', 
  dialect: 'mysql'
});
   
async function  conn(){

try {
    await sqlize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

}



module.exports={conn,sqlize}
