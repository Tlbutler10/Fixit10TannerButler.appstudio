customerDelete.onshow=function(){    

  let query = "SELECT DISTINCT name FROM customer;"          

  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tlb91133&pass=BIA375&database=tlb91133&query=" + query)    

  

  if (req1.status == 200) { 

    results = JSON.parse(req1.responseText)        

    companies = JSON.parse(req1.responseText)    

  if (results.length == 0)        

    NSB.MsgBox("Error")    

  else {                

    let message = ""        

    for (i = 0; i <= results.length - 1; i++)            

      message = message + results[i][0] + "\n"        

    taCurrent.value = message 

  }        

} else        

    NSB.MsgBox("Error code: " + req1.status)

}



btnEnter1.onclick=function(){    

  let companyNameDel = inptCustomer.value

  let found = false    

  for (i = 0; i <= results.length - 1; i++) {        

    if (companyNameDel == results[i][0])            

      found = true 

  }    

  if (found == false)        

    NSB.MsgBox("That customer name is not in the database.")    

  else if (found == true) { 

check = inptCustomer.value  

let query2 = "DELETE FROM customer WHERE name = " + '"' + check + '"';   

req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mrs82759&pass=3751223&database=mrs82759&query=" + query2)        

    

  if (req1.status == 200) { 

    results = JSON.parse(req1.responseText)        

    console.log(results)               

    

  if (results.length == 0)                       

    NSB.MsgBox("There are no customers with that name.")    

  else {                

    console.log("the parsed JSON is " + results)        

    console.log("eg. temp[0] or first row in big array is " + results[0])              

    let message = ""        

    for (i = 0; i <= results.length - 1; i++)            

      message = message + results[i][0] + "\n"        

    taCurrent.value = message          

      for (var i = 0; i < companies.length; i++){    

  if (companies[i] === companyNameDel) {     

    companies.splice(i, 1);    

  } 

} 

taRemaining.value = companies 

    }   

  } else                

    NSB.MsgBox("Error code: " + req1.status) 

  }

}