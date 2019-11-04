Button1.onclick=function(){
  query1 = "Select * From Customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tlb91133&pass=BIA375&database=tlb91133&query=" + query1)

    if (req1.status == 200) { 
    
    query2 = "INSERT INTO customer (name,street,city,state,zipcode) values(Jesse Antiques, 1113 F St, Omaha, NE, 68178")
    req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tlb91133&pass=BIA375&database=tlb91133&query=" + query2)

    }
}
