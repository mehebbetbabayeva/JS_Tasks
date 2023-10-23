// #task object

// Calculator obyekti yaradin. 5 methodu olsun: read(), sum(), multiply(), divide(), subtract()

// read() -> prompt-la 2 eded alsin, ve onlari calculator-da proeprty kimi yadda saxlasin,
// qalanlari da neticeni console-a cixarsin.

// istifade edeceyiniz seylerden biri de   [ ] dynamic property-dir, ya da this.




const calculator ={
 
     read: function(){
         calculator.ed1=+prompt("1ci ededi yaz")
         calculator.ed2=+prompt("2ci ededi yaz")
         calculator.ed1;
         calculator.ed2;
     },
     sum:function(){
         return calculator.ed1+calculator.ed2;
     },
     multiply:function(){
         return calculator.ed1*calculator.ed2;
     },
     divide:function(){
         return calculator.ed1/calculator.ed2;
     },
     subtract:function(){
         return calculator.ed1-calculator.ed2;
     }
    
 }
 
 calculator.read()
 console.log("sum " + calculator.sum());
 console.log("multiply " + calculator.multiply());
 console.log("divide " + calculator.divide());
 console.log("subtract " + calculator.subtract());

  

