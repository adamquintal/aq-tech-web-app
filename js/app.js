
function clubSelector(){
    let clubs = ["Driver", "Pitching Wedge", "5 Iron", "7 Iron", "60 Degree"]
    let randomClub = Math.floor(Math.random() * 5);
    document.getElementById('club').textContent = clubs[randomClub]
}