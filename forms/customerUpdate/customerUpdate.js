customerUpdate.onshow=function(){    

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

  taCompanies21.value = message      

    }         

  } else               

    NSB.MsgBox("Error code: " + req1.status)

}



btnEnter11.onclick=function(){    

  let oldName = inptCustomer1.value    

  let newName = inptCustomer1.value    

  let query9 = 'UPDATE customer SET name = ' + '"' + newName + '"' + ' WHERE name = ' + '"' + oldName + '"' + ';'    

    console.log(query9)    

    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tlb91133&pass=BIA375&database=tlb91133&query=" + query9)    

  

    if (req1.status == 200) {        

      if (req1.responseText == 500) {              

        let result = JSON.parse(req1.responseText)            

        NSB.MsgBox("You have successfully changed the customer name.")        

      } else            

          NSB.MsgBox("There was a problem changing the customer name.")    

    } else {                

        NSB.MsgBox("Error: " + req1.status);    

    }     

    let query10 = "SELECT DISTINCT name FROM customer;"          

  

    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tlb91133&pass=BIA375&database=tlb91133&query=" + query10)    

  

    if (req1.status == 200) {         

      result = JSON.parse(req1.responseText)    

    if (result.length == 0)        

      NSB.MsgBox("Error")    

    else {                       

      let message = ""        

      for (i = 0; i <= results.length - 1; i++)            

        message = message + results[i][0] + "\n"        

          taNew.value = message    

    }      

  }

}