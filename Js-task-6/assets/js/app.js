//istifadecinin daxil etdiyi ededin menfi musbet ve ya sifir oldugunu teyin edin
let value= Number(prompt("eded daxil edin"));
if(value>0){
    console.log("ededininiz musbetdir")
}else if (value===0){
    console.log("edediniz 0a beraberdir")
}else(
    console.log("edediniz menfidir")
)