const mysql = require('mysql');

const conn = mysql.createConnection({
   host: "10.5.32.70",
   user: "root",
   password: "bereket",
   // if db created
   database: "FIMS_DB"
});

conn.connect((err) => {
   if (err) throw err;
   console.log('connected');
});

module.exports=conn