//1. Normalda Bazar ertesinden Cumeye qeder ders olur.
// Ele bir funksiya qurun ki, bize alert-le desin bu gun derse getmeliyik ya yox. 

const lesson = () => {
    const date = new Date();
    let day = date.getDay();
    switch (day) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return `bu gun ders var `

        case 6:
        case 0:
            return "bu gun ders yoxdur"
        default:
            return "error"

    }


}
console.log(lesson())
//2. Bu gunki tarixi document.write ile html-e yazin. 
document.write(new Date(),"<br>")
//3. *ADVANCED* Bu gun heftenin hansi gunudur, onun adini avtomatik document-e yazin. 
//(obyektlerden istifade ede bilersiniz)
const date = new Date()
const dayObj ={
   0:"bazar ",
   1:"bazar ertesi",
   2:"cersenbe axsami",
   3:"cersenbe",
   4:"cume axsami",
   5:"cume",
   6:"senbe"
}

// document.write(dayObj[date.getDay()],"<br>")
//4. *ADVANCED* Bu ay hansi aydir adini document-e yazin. (obyektden istifade ede bilersiniz)
const MonthObj={
    0:"yanvar",
    1:"fevral",
    2:"mart",
    3:"aprel",
    4:"may",
    5:"iyun",
    6:"iyul",
    7:"avqust",
    8:"sentyabr",
    9:"oktyabr",
    10:"noyabr",
    11:"dekabr",
}
document.write(MonthObj[date.getMonth()])

//5. Ezrail proqrami: user-den yasini sorusun. Ve omrune nece il qalib ona alert-le bildirin.
 //Tutaq ki, insanlar ucun maksimum yas 77 ildir. (meselen, 60 yas yazsa 17 ili qalib 🥺)


 const userAge=(age)=>{
    let maxAge=77;
    return `sizin ${maxAge-age} iliniz qalib`
 }
 console.log(userAge(+prompt("yasinizi daxil edin")))

 //6. Userin yasini sorusun. ve bele bir statistika yazin: doguldugu vaxtdan bu gune nece il, ay, gun,
 // saat, deqiqe, saniye kecib. (heresini ayrica) meselen, 
//kecen il sayi: 23,  age 
// kecen ay sayi: 234   
// kecen gun sayi: 6974 
// ve s.


let userbirthday = prompt("dogum tarixinizi girin");
let birthday = new Date(userbirthday);
let indikiTarix= new Date();
let ferq = indikiTarix - birthday;
let ilferqi = Math.floor(ferq / (1000 * 60 * 60 * 24 * 365));
let ayferqi = Math.floor(ferq / (1000 * 60 * 60 * 24 * 30));
let gunferqi = Math.floor(ferq / (1000 * 60 * 60 * 24));

console.log(`kecen il sayi : ${ilferqi} ---kecen ay ferqi: ${ayferqi}--- kecen gun ferqi ${gunferqi}`)
