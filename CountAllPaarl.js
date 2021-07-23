
function allPaarl(regNumbers){
    var regNumbersForPaarl = []
   //var count = 0;
   var Regs = regNumbers.split(",")
   
    for(var i=0;i<Regs.length;i++){
       var RegNums = Regs[i].trim();
      
      if(RegNums.startsWith("CJ")){ 
        //console.log(RegNums) 
        regNumbersForPaarl.push(RegNums)
      }   
    }
   
   /*console.log('There are 2 Paarl reg numbers.')*/
   
  return regNumbersForPaarl
 }