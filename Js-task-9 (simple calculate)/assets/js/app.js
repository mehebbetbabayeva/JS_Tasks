//sade kalkulator hazirlayin hem if else hem de switch

let value1=Number(prompt("1ci ededi daxil edin"));
let value2=Number(prompt("2ci ededi daxil edin"));
let operator=prompt("operatoru ededi daxil edin","+,-,*,/");


//if else
if(operator==="+"){
    console.log(`${value1}+${value2}=${value1+value2}`)
}
else if(operator==="-"){
    console.log(`${value1}-${value2}=${value1-value2}`)
}
else if(operator==="*"){
    console.log(`${value1}*${value2}=${value1*value2}`)
}
else if(operator==="/"){
    console.log(`${value1}/${value2}=${value1/value2}`)
}else{
    alert("daxil etdiyiniz emel duzgun deyil yeniden cehd edin")
}



//switch 
switch (operator) {
    case "+":
        console.log(`${value1}+${value2}=${value1 + value2}`);
        break;
    case "-":
        console.log(`${value1}-${value2}=${value1 - value2}`);
        break;
    case "*":
        console.log(`${value1}*${value2}=${value1 * value2}`)
        break;
    case "/":
        console.log(`${value1}/${value2}=${value1 / value2}`)
    default:
        alert("daxil etdiyiniz emel duzgun deyil yeniden cehd edin")
}