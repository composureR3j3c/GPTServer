const { conn, sqlize } = require("../conn");

async function deleteRecord( table,id
  ) {
    try {
      conn();
      const results = await sqlize.query(
        `UPDATE ${table} SET deleted=1 WHERE ID=${id};`
      );
      console.log(results)
      return results;
    }catch(ex){
        console.log(ex);
}
}

module.exports ={deleteRecord}