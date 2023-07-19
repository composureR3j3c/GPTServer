const conn = require('./db_conn');

var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  conn.query(sql,  (err, result)=> {
    if (err) throw err;
    console.log("Table created");
  });