
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

function getRequest(){
    let request =

    ajax({
        uri: "https://jsonplaceholder.typicode.com/posts",
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
            console.log(res);
            alert(res);
            document.getElementById('getRequest').textContent = res
        }
    });
    console.log(request);
}





const header = document.getElementById('club');
header.style.color = 'green';
header.style.fontWeight = '800'

getRequest();  
clubSelector();