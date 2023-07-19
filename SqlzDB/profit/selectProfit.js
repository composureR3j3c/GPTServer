const { conn, sqlize } = require("../conn");

async function selectProfit(
  ) {
    try {
      conn();
      const [results, metadata] = await sqlize.query(
        `SELECT * FROM profit WHERE deleted=0  ORDER BY date;`
      );
      console.log(results)
      return results;
    }catch(ex){
        console.log(ex);
}
}

module.exports ={selectProfit}