
function clubSelector(){
    let clubs = ["Driver", "Pitching Wedge", "5 Iron", "7 Iron", "60 Degree"];
    let randomClub = Math.floor(Math.random() * 5);
    console.log(clubs[randomClub]);
    document.getElementById('club').textContent = clubs[randomClub];
}

function resumeGenerator(name){

    if (name = "Adam"){
        console.log("Your name is" + name)
    }
    return name;
}

function getRequest(uri){
    const Http = new XMLHttpRequest();
    uri ='https://jsonplaceholder.typicode.com/posts';
    Http.open ("GET", uri);
    Http.send();
    console.log(Http.responseText)
    document.getElementById('getRequest').textContent = Http.responseText;
}





const header = document.getElementById('club');
header.style.color = 'green';
header.style.fontWeight = '800'

getRequest();  
clubSelector();