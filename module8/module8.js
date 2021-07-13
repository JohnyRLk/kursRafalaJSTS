let fs = require("fs");
const path = "./file.txt";
function checkFile() {
  setInterval(() => {
    if (fs.existsSync(path)) {
      console.log("Plik istnieje");
    } else {
      console.log("Plik nie istnieje");
    }
  }, 5000);
}
checkFile();
const checkFilePromise = () => {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      if (fs.existsSync(path)) {
        resolve("Plik istnieje");
      } else {
        reject("Plik nie istnieje");
      }
    }, 5000);
  });
};
const check = async () => {
  console.log(await checkFilePromise());
};
check();
