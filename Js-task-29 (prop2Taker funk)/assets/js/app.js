//prop2Taker adinda funksiya yaradin argument kimi obj alsin hemin objectin prop-2 propertisinin valuesini 
//cixarsin

const prop2Taker=(obj)=>{
   return obj['prop-2']
}

console.log(prop2Taker({one:1,'prop-2':2}));
console.log(prop2Taker({'prop-2':"two",prop:'test'}));