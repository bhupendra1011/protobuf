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

// payload data  (not works when encryption is on )
const encryption_bytes = new Uint8Array([
  101, 216, 65, 224, 0, 1, 0, 52, 19, 118, 91, 78, 226, 27, 203, 81, 114, 69,
  220, 22, 65, 60, 33, 66, 177, 201, 234, 188, 69, 42, 180, 245, 37, 254, 231,
  207, 68, 43, 247, 239, 13, 249, 0, 150, 19, 31, 103, 183, 15, 138, 15, 28,
  212, 152, 226, 108, 31, 127, 250, 7, 41, 25, 56, 144, 171, 109, 57, 247, 40,
  239, 212, 134, 15, 165, 39, 250, 109, 44, 94, 53, 77, 140, 4, 235, 171, 239,
  222, 182, 148, 123,
]);

// Deseralize V1 API data  the binary data :
//const textstream = protoRoot.lookupType("Text").decode(bytes);

// Deseralize V2 API data  the binary data : not works format issue
const textstream = protoRoot.lookupType("Text").decode(encryption_bytes);

console.log("Decoded payload ", textstream);
