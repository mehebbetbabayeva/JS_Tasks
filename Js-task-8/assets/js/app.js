//jsde 3 eded arasinda en boyuyu tapin hem if else ile yazin hem de math.max ile

//if else

let value_1=Number(prompt("1ci ededi daxil edin"));
let value_2=Number(prompt("2ci ededi daxil edin"));
let value_3=Number(prompt("3ci ededi daxil edin"));
if(value_1>value_2 && value_1>value_3){
    console.log(`yazdiginiz ${value_1},${value_2},${value_3} ededlerinden en boyuyu ${value_1}dir`)
}else if (value_2>value_3 && value_2>value_1){
    console.log(`yazdiginiz ${value_1},${value_2},${value_3}  ededlerinden en boyuyu ${value_2}dir`)
}else{
    console.log(`yazdiginiz ${value_1},${value_2},${value_3} ededlerinden en boyuyu ${value_3}dir`)
}


//math.max()


let result = Math.max(value_1,value_2,value_3);
console.log(`yazdiginiz ${value_1},${value_2},${value_3} ededlerinden en boyuyu ${result}dir`)