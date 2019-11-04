let allCustomerData = []
customerSelect.onshow=function(){
     // get all the data from the database when program loads
      let query = "SELECT * FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tlb91133&pass=BIA375&database=tlb91133&query=" + query)

    if (req1.status == 200) { //transit worked.
            allCustomerData = JSON.parse(req1.responseText)
            console.log(allCustomerData)
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  
   
  for(i=0; i<allCustomerData.length; i++){
    for(j=4; i<allCustomerData[i].length; j+=6){
      let states = []
      states.push[j]
      console.log(states)
      
  }
  }

}
