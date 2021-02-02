
$(document).ready(function () { 
  
    // FETCHING DATA FROM JSON FILE 
    $.getJSON("list.json",  
            function (data) { 
        var student = ''; 

        // ITERATING THROUGH OBJECTS 
        $.each(data, function (key, value) { 

            //CONSTRUCTION OF ROWS HAVING 
            // DATA FROM JSON OBJECT 
            student += '<tr>'; 
            student += '<td>' +  
                value.Slno + '</td>'; 

            student += '<td>' +  
                value.Name + '</td>'; 

            student += '<td>' +  
                value.Quantity + '</td>'; 

            student += '<td>' +  
                value.Unit + '</td>'; 

                student += '<td>' +  
                value.Department + '</td>'; 

                student += '<td>' +  
                value.Notes + '</td>'; 

            student += '</tr>'; 
        }); 
          
        //INSERTING ROWS INTO TABLE  
        $('#tablelist').append(student); 
    }); 
}); 