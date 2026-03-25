const Game = function (gameTitle, gamePublisher, supportedPlatforms) {
    this.title = gameTitle;
    this.publisher = gamePublisher;
    this.platforms = supportedPlatforms;

    this.toString = () => {
     let output = `Game Title: ${this.title} Publisher: ${this.publisher}\r\nAvailable on:\r\n`;
     for (const p of this.platforms){
        output += `${p}\r\n`;
     }

     return output;
    }
}

const game1 = new Game('Age of Empires','Microsoft', ['PC','Mac','Playstation 4','Playstation 5','Xbox Series X']);
const game2 = new Game('Zelda Breathe of the Wild', 'Nintendo', ['Wii U','Switch']);
const game3 = new Game('Batman Arkham Knight', 'Rocksteady Studios', ['PC','Playstation 4','Xbox One']);


console.log('\r\n');
console.log(game1.toString());
console.log(game2.toString());
console.log(game3.toString());



