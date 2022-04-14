
function clubSelector(){
    let clubs = ["Driver", "Pitching Wedge", "5 Iron", "7 Iron", "60 Degree"];
    let randomClub = Math.floor(Math.random() * 5);
    console.log(clubs[randomClub]);
    document.getElementById('club').textContent = clubs[randomClub];
}

function resumeGenerator(name){

    if (name = "Adam"){
        console.log("Your names is" + name)
    }
    return name;
}


$(document).ready(function(){
    $("button").click(function(){
    $.get("https://jsonplaceholder.typicode.com/posts", function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
        });
    });
});






const header = document.getElementById('club');
header.style.color = 'green';
header.style.fontWeight = '800'

getRequest();  
clubSelector();