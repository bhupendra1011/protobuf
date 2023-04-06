const Schema = require("./captions_pb");

// Serailize data would be recived in the stream-message event.

const bytes = new Uint8Array([32, 218, 187, 137, 109, 88, 1])


// Deseralize the binary data :
const deSerailizedData = Schema.Text.deserializeBinary(bytes);
console.log("De-serialized data ==>", deSerailizedData.toString())