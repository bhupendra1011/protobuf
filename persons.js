
const protobuf = require("protobufjs");

const testProto = protobuf.loadSync("persons.proto");
// Get the root object 
const root = testProto.root;

// Get the message Type
const Persons = root.lookupType("Persons");
const Person = root.lookupType("Person");


// raw data to encode
const persons = [
    { name: "Rohit", city: "delhi", pin: 248100 },
    { name: "Mohit", city: "blore", pin: 290110 }
]


// Create an array of Person objects
const personObjects = persons.map((person) =>
    Person.create({
        name: person.name,
        city: person.city,
        pin: person.pin,
    })
);

const personsMessage = Persons.create({ persons: personObjects });


// encoding to binary buffer
const buf = Persons.encodeDelimited(personsMessage).finish();
console.log('encoded :', buf)

// decoding from binary
const decodedData = Persons.decodeDelimited(buf);

console.log('decoded', decodedData)








