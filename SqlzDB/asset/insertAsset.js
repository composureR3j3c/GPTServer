const { conn, sqlize } = require("../conn");

async function insertAsset(Name, Category, acqDate, Rate, orgValue
  ) {
    try {
      conn();
      const results = await sqlize.query(
        `INSERT INTO asset (Name, Category, acqDate, Rate, orgValue) VALUES ('${Name}', '${Category}', '${acqDate}', '${Rate}', '${orgValue}');`
      );
      console.log(results)
      return results;
    }catch(ex){
        console.log(ex);
}
}

module.exports ={insertAsset}