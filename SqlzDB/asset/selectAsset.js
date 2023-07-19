const { conn, sqlize } = require("../conn");

async function selectAsset(
  ) {
    try {
      conn();
      const [results, metadata] = await sqlize.query(
        `SELECT * FROM asset WHERE deleted=0 ORDER BY acqdate;`
      );
      console.log(results)
      return results;
    }catch(ex){
        console.log(ex);
}
}

module.exports ={selectAsset}