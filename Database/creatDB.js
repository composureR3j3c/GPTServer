const conn = require('./db_conn');

    conn.query("CREATE DATABASE mydb", (err) => {
        if (err) throw err;
        console.log('database created');
        });