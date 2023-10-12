//propertyTaker adinda funksiya yaradin argument kimi obj ve string (propertyName) alsin
// hemin objectin verdiyim propertini cixarsin  

const propertyTaker= (obj,propertyName)=>{
   return obj[propertyName]
}


console.log(propertyTaker({continent:'asia',country:"japan"},'continent'));
console.log(propertyTaker({country:"sweeden",continent:'auropa'},'country'));
console.log(propertyTaker({name:"ali",age:12},'name'));



