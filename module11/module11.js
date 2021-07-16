let fs = require("fs");
fs.readFile("./tmp.txt", function (err, data) {
  if (err) throw err;
  console.log(data);
});

let text = fs.readFileSync("./tmp.txt", "utf8");
console.log(text);
let readStream = fs.createReadStream("./tmp.txt");
let writeStream = fs.createWriteStream("./outputTmp.txt");
readStream.pipe(writeStream);

let readableStream = fs.createReadStream("./tmp.txt");
let data = "";
let chunk;
let result = "";
readableStream.on("readable", function () {
  while ((chunk = readableStream.read()) != null) {
    data = chunk.toString();
    result += data.replace(/(.{1})/g, "$1.");
  }
  fs.writeFile("./filetxt", result, (err) => {
    if (err) throw err;
  });
});
readableStream.on("end", function () {});
let readStream = fs.createReadStream("./tmp.txt");
let writeStream = fs.createWriteStream("./outputTmp.txt");
readStream.pipe(writeStream);
