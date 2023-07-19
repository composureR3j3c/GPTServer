const conn = require('./db_conn');

var sql = "SELECT * FROM customers";
  conn.query(sql,  (err, result)=> {
    if (err) throw err;
    console.log(result);
  });