function findItemsOver20(itemList){
    var results = [];
      
      for(var i=0; i<itemList.length;i++){
      
      var myList = itemList[i]
      
      if(myList.qty > 20){
      
        var theList = results.push(myList)
        console.log(theList)
      
      }
      }
     return results
    }
    
    
    function findItemsOver (itemList,quality){
    var results = [];
      
      for(var i=0; i<itemList.length;i++){
      
      var myList = itemList[i]
      
      if(myList.qty > quality){
      
        var theList = results.push(myList)
        console.log(theList)
      
      }
      }
     return results
    }