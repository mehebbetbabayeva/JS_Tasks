//existandtruthy adinda funk yaradin arqument kimi obj ve string (propertyName) alsin
//eger hemin objectde o adda property varsa ve truthydirse ture qaytarsin eks halda false qaytrasin

const existAndTruthy=(obj,propertyName)=>!!(obj[propertyName])


console.log(existAndTruthy({a:1,b:2,c:3},'b'))
console.log(existAndTruthy({x:"a",y:null,z:'c'},'y'))
console.log(existAndTruthy({x:"a",b:'b',z:undefined},'z'))




