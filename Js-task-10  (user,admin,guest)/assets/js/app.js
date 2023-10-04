//istifadeciden soz alin. eger daxil etdiyi soz "user"-e ==dirse console-a
//"xosgeldin istifadeci" sozu cixsin "admin" olsa "xos geldin cenab admin","guest" olsa
//"xos geldin qonaq"

let word= prompt("soz daxil edin", "user,admin,guest");
if (word==="user"){
    console.log(`xos geldin ${word}`)
}else if(word==="admin"){
    console.log(`xos geldin cenab ${word}`)
}
else if(word==="guest"){
    console.log(`xos geldin  ${word}`)
}else{
    console.log("zehmet olmasa verilen serte uygun soz daxil edin")
}