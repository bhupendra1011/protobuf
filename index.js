// to generate pb.js files use protoc compiler, run below in terminal 
//protoc --js_out=import_style=commonjs,binary:. employees.proto


const Schema = require("./employees_pb");

// json is unstructured, loosly typed and no sequencing logic for key value pairs
// [{'name':'Rohit','id':101,'salary':2000},{'name':'Shyam','id':103,'salary':5000}]

const emp1 = new Schema.Employee();
// auto generates the function
emp1.setId(101);
emp1.setName("Rohit");
emp1.setSalary(2000);
//console.log("My Name is " + emp1.getName())

const emp2 = new Schema.Employee();

emp2.setId(102);
emp2.setName("Mohit");
emp2.setSalary(5000);

const employees = new Schema.Employees();
employees.addEmployees(emp1);
employees.addEmployees(emp2);
//console.log('employees ===>', JSON.stringify(employees))

// Serailize / Deseralize to Binary , binary is send across the wire

const bytes = employees.serializeBinary();

console.log("serialized data ==>", bytes);

// need to know which schema the bytes belong to 
const deSerailizedData = Schema.Employees.deserializeBinary(bytes);
console.log("De-serialized data ==>", deSerailizedData.toString())
