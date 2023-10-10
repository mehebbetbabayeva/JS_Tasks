//bir add funksiyasi yazin 3 arqument alsin ilk 2si ededler 3cu su ise funksiya olsun
//men o funksiyaya console,log ve ya alert verib ozum teyin edim neticeni alertde gostersin yoxsa konsolda 

const add= (ed1,ed2,callback)=>{
callback(ed1+ed2)
}
add(3,5,console.log)
add(3,5,alert)
