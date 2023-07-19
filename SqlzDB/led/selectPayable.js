const { conn, sqlize } = require("../conn");

async function selectPayable(
  type) {
    try {
      conn();
      const [results, metadata] = await sqlize.query(
        `SELECT * FROM payable where type='${type}' and deleted=0 ORDER BY date;`
      );
      console.log(results)
      return results;
    }catch(ex){
        console.log(ex);
}
}

async function selectPayment(
  Invoice) {
    try {
      conn();
      const [results, metadata] = await sqlize.query(
        `SELECT * FROM payments where Invoice='${Invoice}' ORDER BY date;`
      );
      console.log(results)
      return results;
    }catch(ex){
        console.log(ex);
}
}

module.exports ={selectPayable,selectPayment}