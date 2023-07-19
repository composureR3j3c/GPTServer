const { conn, sqlize } = require("../conn");

async function insertProfit(Type,Amount,Description
  ) {
    try {
      conn();
      const [results, metadata] = await sqlize.query(
        `INSERT INTO profit (Type, Amount, date,Description) VALUES ('${Type}', '${Amount}', current_timestamp(),'${Description}');`
      );
      console.log(results)
      return results;
    }catch(ex){
        console.log(ex);
}
}

module.exports ={insertProfit}