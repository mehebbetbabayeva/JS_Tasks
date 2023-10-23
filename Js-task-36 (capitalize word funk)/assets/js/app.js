// Funksiya yaradin, ilk characterimizi deyisek: ilkHerfiDeyis(soz, ilkHerf)
// ilkHerfiDeyis('alion', "A") ---> Alion

const ilkHerfiDeyis=(soz,IlkHerf)=>{
return soz.replace(soz[0],IlkHerf)
}
console.log(ilkHerfiDeyis("alion","A"))