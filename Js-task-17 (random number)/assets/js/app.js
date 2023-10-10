//ureyimde bir reqem tutmusam 0 dan 50 e qeder user her defesinde hemin ededi sorussun 
//eger sehvdirse yeniden sorussun  duz olanda kapital bank hesabina 1000 manat kocurulsun console.log cixarin


const BAZA_EDED =Math.floor((Math.random()*100+1)/2);

let userEded = +prompt(" 1 ve 50 arasinda bir eded daxil edin");
let count = 1;

if(userEded && !isNaN(userEded) ){
    while (userEded !== BAZA_EDED) {
        if(userEded>BAZA_EDED){
         userEded = +prompt("daha kicik eded daxil edin");
        }else{
         userEded = +prompt("daha boyuk eded daxil edin");
        }
         
         count++
         if (userEded === BAZA_EDED) {
           
             console.log(`ehsen ${count} defeye tapdin`)
     
     
            if(count===10){
             console.log(" kapital bank hesabina 1000  manat kocuruldu")
            }else if(count<=5 && count>=2){
             console.log(" kapital bank hesabina 750  manat kocuruldu")
            }else if(count<=9 && count>=6){
             console.log(" kapital bank hesabina 250  manat kocuruldu")
            }else if(count>10){
             console.log("hesabindan -250azn cixildi")
            }else{
             console.log("error")
            }
         }
     }
}
else{
    alert("duzgun eded yazn")
}



