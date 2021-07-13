 let user = require('../user.json')
console.log(user.age);
const tryCatch = () =>{
    try{
        let userAge = Number(user.age);    
        if(18 >= userAge){
            throw new Error("Osoba jest niepelnoletnia");    
        }else{
            console.log("Osoba jest pelnoletnia")
        }   
    }catch(err){
        console.error(err.message);
    }
}
tryCatch();