// capitalize(str) -> alion -=> Alion

const capitalize =(str)=> str.replace(str[0],str[0].toUpperCase())
console.log(capitalize("alion"))

// snakeToKebab(str) -=> SNAKE_CASE to kebab-case -=> BU_TEST_UCUNDUR -> bu-test-ucundur

const snakeToKebab=(str)=>str.toLowerCase().replaceAll("_","-")
console.log(snakeToKebab("SNAKE_CASE"));
console.log(snakeToKebab("BU_TEST_UCUNDUR"));


// nameFormat(str) —> Alion GreenHeart-=> Alion G.

const nameFormat=(str)=>{
  return  str.slice(0,7).concat(".")
}
console.log(nameFormat("Alion GreenHeart"));