const { conn, sqlize } = require("../conn");

async function selectCurr(
  ) {
    try {
      conn();
      const [results, metadata] = await sqlize.query(
        `SELECT * FROM currency ORDER BY ID;`
      );
      console.log(results)
      return results;
    }catch(ex){
        console.log(ex);
}
}

module.exports ={selectCurr}