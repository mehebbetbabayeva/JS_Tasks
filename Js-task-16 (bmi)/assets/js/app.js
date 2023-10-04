//bmi
let weight= +prompt("cekinizi yazin");
let height = +prompt("boyunuzu yazin");
let bmi =weight/(height**2);
if(bmi<18.5){
    console.log(`siz bir az da cox yemelisiz cunki sizin bmi ${bmi} -dir`)
}else if(bmi>18.5 && bmi<25){
    console.log(`siz saglamsiz cunki sizin bmi ${bmi} -dir`)
}else if(bmi>25 && bmi<30){
    console.log(`siz pofuduksuz cunki sizin bmi ${bmi} -dir`)
}else{
    console.log(`siz obezsiz cunki sizin bmi ${bmi} -dir`)
}