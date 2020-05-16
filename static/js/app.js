// from data.js
var tableData = data;

// select tbody using d3
tbody = d3.select("tbody");

// Get into key and value pairs of data inside of the table
// and loop through to add to the table in html
function displayData(data){ 
    tbody.html("");
    data.forEach((sighting)=>{
    var new_tr = tbody.append("tr");
    Object.values(sighting).forEach((value)=>{
        var new_td = new_tr.append("td").text(value);	
    });
});}




// var button = d3.select("#filter-btn")

// Filter Data
function changeHandler(){
    let new_table = tableData;
    // d3.event.preventDefault();
    // console.log(inputText.property("value"));
    var inputText = d3.select("#datetime").property("value");
    if (inputText){
    new_table = new_table.filter(new_tr => new_tr.datetime===inputText);
}
    displayData(new_table);
}

// Change and click
// inputText.on("change", changeHandler)
// button.on("click", changeHandler)

d3.selectAll("#filter-btn").on("click",changeHandler);
displayData(tableData)