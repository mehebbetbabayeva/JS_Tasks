//1. Massiv yaradin.  olcusunu 5e menimsedin ve prompt-la massivi number-lerle doldurun. 
let arr=[];
for (let i=0;i<5;i++){
    let eded= +prompt("eded daxil edin")
    arr.push(eded)
}
console.log(arr);

//2. Funksiya yazin ki, massivde olan butun elementlerin hasilini ekrana cixarsin. 
const array=[1,2,3]
let multiply=1
const multiple=(array)=>{
    for (let value of array){
        multiply*=value
    }
    return multiply
}

console.log(multiple(array));
//3. multiply(a,b,c) funksiyasi yaradin. Men ona istediyim 
//sayda argument versem bele islemelidir, hasilini geri qaytarmalidir.
const multiplytask3=(...arr)=>{
  let multiple=1;
  for (let value of arr){
    multiple*=value
}
return multiple

}
console.log(multiplytask3(1,2,3))