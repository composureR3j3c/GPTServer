const axios = require("axios");

async function chat(srcid, content){


const config = {
  headers: {
    "x-api-key": "sec_ToygIcNsiqbgqDefT8OfMqxqBHS6fvSg",
    "Content-Type": "application/json",
  },
};

const data = {
  sourceId: srcid,
  messages: [
    {
      role: "user",
      content: content,
    },
  ],
};
var result;

await axios
  .post("https://api.chatpdf.com/v1/chats/message", data, config)
  .then((response) => {
     console.log("Result:", response.data.content);
    result=response.data.content.toString();
  })
  .catch((error) => {
    console.error("Error:", error.message);
    console.log("Response:", error.response.data);
    result= "error";
  });

  return result;
}

module.exports ={chat}