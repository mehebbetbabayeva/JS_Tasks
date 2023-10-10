//butun ikireqemli tek ededlerin cemi 

let sum=0;
for (let i=10;i<100;i++){
    if(i%2===0)continue;
    sum+=i
}
console.log(sum)