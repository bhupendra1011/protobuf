const protobuf = require("protobufjs");

//load the protobuf message definition
const testProto = protobuf.loadSync("test.proto");

// Get the root object
const root = testProto.root;

// Get the message Type
const Text = root.lookupType("Text");

//Uint8Array(7) [32, 144, 145, 187, 119, 88, 1, buffer: ArrayBuffer(7), byteLength: 7, byteOffset: 0, length: 7, Symbol(Symbol.toStringTag): 'Uint8Array']
const bytes = new Uint8Array([
  32, 152, 203, 169, 126, 72, 252, 243, 14, 82, 8, 10, 6, 121, 101, 108, 108,
  111, 119, 82, 3, 10, 1, 46, 96, 222, 2, 106, 10, 116, 114, 97, 110, 115, 99,
  114, 105, 98, 101, 122, 5, 101, 110, 45, 85, 83,
]);

// Uint8Array to base 64 --
const binaryString = String.fromCharCode.apply(null, bytes);
const base64String = btoa(binaryString);
console.log(base64String); //IJjLqX5I/PMOUggKBnllbGxvd1IDCgEuYN4Cagp0cmFuc2NyaWJlegVlbi1VUw==

// converting base 64 to Uint8Array as protobuf will only accept binary payload
const binaryString1 = atob(base64String);
const bytes1 = new Uint8Array(binaryString1.length);
for (let i = 0; i < binaryString1.length; i++) {
  bytes1[i] = binaryString.charCodeAt(i);
}

console.log("decoded buffer ==>");
const decodedData = Text.decode(bytes1);
console.log(decodedData); // will get json
