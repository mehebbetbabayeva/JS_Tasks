//Write a JavaScript function to split a sentence 
//(JS funksiyasi yazin, cumle verilir, cumledeki sozleri ayirsin).

const sentence =(cumle)=>cumle.split(" ").toString()
console.log(sentence("salam js dersine xos gelmisiz"))


//removeCharacterFromString("Alion","A") -> "lion" . 
//bele bir funksiya yazin, sozden character silme.
// Alion sozu verdik ve A characteri verdik, sozden A-ni sildi. 



const removeCharacterFromString =(word,letter)=>{
   for (let i=0; i<word.length;i++){
          if(word[i]===letter){
            word=word.split(word[i])
            let result=""
            for (let key of word){
                result+=key
            }
            return result
          }
   }
}
console.log(removeCharacterFromString("Alion","A"));

//4. verify gmail address. (gmail addressleri sonu @gmail.com ile bitmelidir,
 //  ve ondan evvel en azi 5 simvol olmalidir. abcdf@gmail.com meselen)

const verifyGmail=(email)=>{
 if(email.endsWith("@gmail.com") && email.length>15){
    return "dogru email"
 }
}
console.log(verifyGmail(prompt("email girin")))