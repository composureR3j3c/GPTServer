const { conn, sqlize } = require("../conn");

async function insertBUY(  buy, sell,id,date
  ) {
    try {
      conn();
      const results = await sqlize.query(
        `UPDATE currency SET Rate = '${buy}', Sell = '${sell}',Date='${date}' WHERE ID = '${id}';`
      );
      console.log(results)
      return results;
    }catch(ex){
        console.log(ex);
}
}

module.exports ={insertBUY }