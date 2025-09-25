let gameLibrary = [];

// let game = {
//     name: "NashwasFavouriteGames",
//     number: "5",
// };

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let nashwasFavouriteGames;

nashwasFavouriteGames = ['Resident Evil 2', ' The Last of Us', 'Until Dawn','Assassin\'s Creed', 'GTA V', 'Mario Kart 8 Deluxe'];
console.log(gameLibrary); //returns 'Resident Evil 2'


for (let i=0; i<nashwasFavouriteGames.length; i++){
    let game = {
        name: nashwasFavouriteGames[i],
        score:getRandomInt(100)
    }
    gameLibrary.push(game);
}

console.log(gameLibrary); //returns array of objects with game names and random scores

let playerScore = 23; 

let MarioKart8Deluxe = {
     score: playerScore,

};



function currentPlayerScore() {return playerScore;}
if (playerScore >= 20) { //wins
    MarioKart8Deluxe.score--;
}
else  {//loses
    MarioKart8Deluxe.score++;
    
}
console.log(playerScore);
console.log(MarioKart8Deluxe.score); //returns 20






