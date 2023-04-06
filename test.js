
const protobuf = require("protobufjs");

//load the protobuf message definition
const testProto = protobuf.loadSync("test.proto");

// Get the root object 
const root = testProto.root;

// Get the message Type
const Text = root.lookupType("Text");


//Uint8Array(7) [32, 144, 145, 187, 119, 88, 1, buffer: ArrayBuffer(7), byteLength: 7, byteOffset: 0, length: 7, Symbol(Symbol.toStringTag): 'Uint8Array']
const bytes = new Uint8Array([32, 214, 189, 187, 130, 1, 88, 1])
console.log("decoded buffer ==>");
const decodedData = Text.decode(bytes)
console.log(decodedData) // will get json

