//istifadecini daxil etdiyi ededin boluneni olan butun 3reqemli ededlerin cemini tapin
let value=+prompt("bir eded yazin")
let sum=0;
for(let i=100;i<1000;i++){
   if(!(i%value===0))continue;
   sum+=i;
}
console.log(sum)