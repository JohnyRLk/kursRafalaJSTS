let user = require("./user.json");
console.log(user.age);
const tryCatch = () => {
  let userAge = Number(user.age);
  try {
    if (18 >= userAge) {
      throw new Error("Osoba jest niepelnoletnia");
    }
  } catch (err) {
    console.error(err.message);
  } finally {
    return "Osoba jest pelnoletnia";
  }
};
tryCatch();
