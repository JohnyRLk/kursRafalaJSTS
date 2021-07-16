let faker = require("faker");
let randomName = faker.name.findName();
let randomEmail = faker.internet.email();
let randomAge = faker.datatype.number({ min: 1, max: 100 });

let user = { Name: randomName, Age: randomAge, Email: randomEmail };
console.log(user);
