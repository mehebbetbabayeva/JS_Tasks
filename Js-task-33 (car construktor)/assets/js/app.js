// #task2
// Car constructor-u yaradin. Biz hemin constructor-u cagiranda onun modelini, istehsal ilini, sahibini verek. Ve elbette, masinin surmek, tormozlamaq kimi methodlari olmalidir ki, onlari da verin. Meselen, surmek methodunu cagirsam ekrana,
//   ali zapi markali masinina qaz verir


function Car (model,year,owner){
this.model=model;
this.year=year;
this.owner=owner
this.drive=function(){
    return`${this.owner} ${this.model} markali masini surur`
}
}

const test = new Car ("bmw",2009,"ehmed")
console.log(test)
console.log(test.drive())