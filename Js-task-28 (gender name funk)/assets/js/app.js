//bir parametrli funk yazin parametr olaraq cins ve ad qebul etsin 
//hemin funksiya geriye funk gondersin
//geriye gonderdiyi funksiyada eger cins qadindirsa qarsisina xanim kisidirse cenab yazilib consola cixarsin




const showFunc=(a)=>{
   return a("mehebbet","Q")
}

const funk=(name,gender)=>{
   if(gender==="k"){
    return `${name} cenab`
   }
   else if(gender==="Q"){
        return `${name} xanim`
     }
     else{
        return "error"
     }
   
}
console.log(showFunc(funk))
