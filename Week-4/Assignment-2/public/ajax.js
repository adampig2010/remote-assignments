function ajax(src, callback) {

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if( this.readyState === 4 && this.status === 200 ){
            let data = JSON.parse(this.responseText);
            callback(data);
        }
    }
    xhr.open("GET", src, true);
    xhr.send();
}

function render(data) {
    //-----------------------------
    // create table to index.pug
    //-----------------------------
    
    // parse json data to table th_col
    var th_cols = [];
             
    for (var i = 0; i < data.length; i++) {
        for (var key in data[i]) {
            if (th_cols.indexOf(key) === -1) {      // Avoid replicated title
                th_cols.push(key);
            }
        }
    }
    
    // Create table element
    var table = document.createElement("table");
    table.id = "products";
     
    // Create th element
    var tr = table.insertRow(-1);   // Insert from the end to make the first data in the top
    for (var i = 0; i < th_cols.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = th_cols[i];
        tr.appendChild(th);
    }
     
    // Add data to table
    for (var i = 0; i < data.length; i++) {
         
        row_data = table.insertRow(-1);          
        for (var j = 0; j < th_cols.length; j++) {
            var cell_data = row_data.insertCell(-1);
             
            // Insert data at particular cell
            cell_data.innerHTML = data[i][th_cols[j]];
        }
    }
    
    // Add table to div
    var div = document.getElementById("content");
    div.appendChild(table);
}

ajax('https://appworks-school.github.io/Remote-Aassigiment-Data/products'
    , function (response) {
        render(response);
}); // you should get product information in JSON format and render data in the page


