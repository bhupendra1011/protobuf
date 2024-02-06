const protobuf = require("protobufjs");

//load the protobuf message definition
const testProto = protobuf.loadSync("test.proto");

// Get the root object
const protoRoot = testProto.root;

// Serailize data would be recived in the stream-message event.

// v1 stt payload data (works)
const bytes = new Uint8Array([
  32, 246, 211, 246, 105, 48, 172, 230, 131, 241, 215, 49, 72, 140, 21, 82, 36,
  10, 20, 72, 101, 108, 108, 111, 46, 32, 72, 101, 108, 108, 111, 46, 32, 72,
  101, 108, 108, 111, 46, 24, 192, 17, 32, 1, 41, 0, 0, 0, 192, 147, 176, 221,
  63, 96, 192, 17, 106, 10, 116, 114, 97, 110, 115, 99, 114, 105, 98, 101, 122,
  5, 101, 110, 45, 85, 83, 128, 1, 130, 248, 131, 241, 215, 49,
]);

// v2 stt payload data  (not works)
const sttBytes = new Uint8Array([
  101, 194, 20, 187, 0, 32, 0, 78, 31, 134, 117, 140, 105, 98, 22, 159, 118,
  110, 218, 46, 200, 220, 217, 243, 156, 75, 73, 194, 73, 116, 221, 5, 197, 228,
  162, 125, 64, 3, 217, 153, 236, 48, 241, 34, 213, 87, 252, 148, 182, 144, 237,
  109, 110, 16, 202, 44, 224, 167, 10, 205, 145, 31, 130, 96, 229, 22, 89, 187,
  20, 69, 106, 128, 159, 6, 249, 137, 236, 107, 13, 233, 194, 81, 132, 109, 165,
  158, 231, 179, 172, 232, 188, 166, 56, 90, 242, 220, 48, 62, 166, 27, 245, 53,
  164, 46, 66, 183,
]);

// Deseralize V1 API data  the binary data :
//const textstream = protoRoot.lookupType("Text").decode(bytes);

// Deseralize V2 API data  the binary data : not works format issue
const textstream = protoRoot.lookupType("Text").decode(sttBytes);

console.log("Decoded payload ", textstream);
