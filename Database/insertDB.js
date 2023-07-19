const conn = require('./db_conn');

var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  conn.query(sql,  (err, result)=> {
    if (err) throw err;
    console.log("1 record inserted");
  });