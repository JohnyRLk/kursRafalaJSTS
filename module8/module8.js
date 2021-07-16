let fs = require("fs");
const path = "./file.txt";
const checkFile = () => {
  if (fs.existsSync(path)) {
    console.log("Plik istnieje");
    clearInterval(interval);
  } else {
    console.log("Plik nie istnieje");
  }
};

const interval = setInterval(checkFile, 5000);
setTimeout(() => clearInterval(interval), 20000);

const path = "./file.txt";
function checkFilePromise() {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(path)) {
      resolve("Plik istnieje");
      clearInterval(interval);
    } else {
      reject("Plik nie istnieje");
    }
  });
}
const interval = setInterval(checkFilePromise, 5000);
setTimeout(() => clearInterval(interval), 20000);
const check = async () => {
  console.log(checkFilePromise());
};
check();
