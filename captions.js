const protobuf = require("protobufjs");

//load the protobuf message definition
const testProto = protobuf.loadSync("test.proto");

// Get the root object
const protoRoot = testProto.root;

// Serailize data would be recived in the stream-message event.

// v1 stt payload data (works)
const bytes = new Uint8Array([
  32, 188, 170, 237, 121, 48, 235, 146, 234, 155, 214, 49, 72, 158, 10, 82, 29,
  10, 13, 72, 101, 108, 108, 111, 46, 32, 72, 101, 108, 108, 111, 46, 24, 136,
  4, 32, 1, 41, 0, 0, 0, 0, 233, 36, 224, 63, 96, 136, 4, 106, 10, 116, 114, 97,
  110, 115, 99, 114, 105, 98, 101, 122, 5, 101, 110, 45, 85, 83, 128, 1, 188,
  150, 234, 155, 214, 49,
]);

// v2 stt payload data  (not works)
const sttBytes = new Uint8Array([
  101, 187, 64, 242, 0, 3, 0, 52, 19, 85, 189, 206, 80, 202, 155, 28, 168, 215,
  144, 37, 67, 139, 34, 149, 152, 195, 172, 33, 113, 142, 235, 157, 12, 107,
  244, 123, 56, 82, 32, 161, 114, 98, 172, 156, 76, 39, 126, 124, 179, 224, 146,
  69, 62, 181, 176, 42, 220, 117, 254, 66, 180, 72, 191, 182, 137, 162, 5, 97,
  91, 137, 162, 41, 187, 28, 206, 80, 215, 117, 31, 25, 134, 211, 184, 107, 63,
  39, 110, 19, 217, 197,
]);

// Deseralize V1 API data  the binary data :
//const textstream = protoRoot.lookupType("Text").decode(bytes);

// Deseralize V2 API data  the binary data : not works format issue
const textstream = protoRoot.lookupType("Text").decode(sttBytes);

console.log("Decoded payload ", textstream);
