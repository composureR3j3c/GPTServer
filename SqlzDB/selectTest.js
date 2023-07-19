const { conn, sqlize } = require("./conn");

async function checkDBconn(
  ) {
    try {
      conn();
      const [results, metadata] = await sqlize.query(
        `select 1+1 from dual;`
      );
      console.log(results)
      return results;
    }catch(ex){
        console.log(ex);
}
}

module.exports ={checkDBconn}