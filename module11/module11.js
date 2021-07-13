const fs = require("fs");

fs.readFile("./tmp.txt", function (err, data) {
  if (err) throw err;
  console.log(data);
});
function processFile(content) {
  console.log(content);
}
let text = fs.readFileSync("./tmp.txt", "utf8");
console.log(text);
let readStream = fs.createReadStream("./tmp.txt");
let writeStream = fs.createWriteStream("./outputTmp.txt");
readStream.pipe(writeStream);
