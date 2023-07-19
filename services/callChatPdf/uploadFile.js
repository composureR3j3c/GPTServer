const axios = require("axios");
const formidable = require('formidable');

async function upload(fdata){
    var result;
    const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");



let formData = new FormData();
 console.log("fdata"+fdata);
 formData.append('file',fs.createReadStream(fdata));

const options = {
  headers: {
    "x-api-key": "sec_ToygIcNsiqbgqDefT8OfMqxqBHS6fvSg",
    'Content-Type': "multipart/form-data"
    // ...formData.getHeaders(),
  },
};
// console.log(formData);
await axios
  .post("https://api.chatpdf.com/v1/sources/add-file", formData, options)
  .then((response) => {
    console.log("Source ID:", response.data.sourceId);
    result=response.data.sourceId 
  })
  .catch((error) => {
    console.log("Error:", error.message);
    console.log("Response:", error.response.data);
    result="error"
  });

  return result;
}

module.exports ={upload}