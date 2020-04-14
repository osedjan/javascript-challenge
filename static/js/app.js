// from data.js
var tableData = data;

// select tbody using d3
tbody = d3.select("tbody")

// Get into key and value pairs of data inside of the table
// and loop through to add to the table in html
function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)

var inputText = d3.select("#datetime")
var button = d3.select("filter-btn")

// Filter Data
function changeHandler(){
    d3.event.preventDefault();
    console.log(inputText.property("value"));
    var new_table = tableData.filter(sighting => sighting.datetime===inputText.property("value"))
    displayData(new_table)
}

// Change and click
inputText.on("change", changeHandler)
button.on("click", changeHandler)