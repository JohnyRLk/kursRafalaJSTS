const dataF = require("./first");
const dataT = require("./secend");
const concatJsons = function (to, from) {
  const jsonKeysF = Object.keys(from);
  const jsonKeysTo = Object.keys(to);
  const result = {};

  jsonKeysF.forEach((key) => (result[key] = from[key]));
  console.log(result);

  jsonKeysTo.forEach((key) => (result[key] = to[key]));
  console.log(result);
};
concatJsons(dataT, dataF);
