let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;

/// Jesus Norrod Feed Da Whales, 4/18/22, 24 Hours over the course of 3 days. //
// (60) Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) 
    // redid the spaceships into whales, added a yummy! effect when whales eat the rocket fishie, and added a new scrolling background
    // splish splash noise and yummy noise recorded by me in audacity
// (10) Display the time remaining (in seconds) on the screen 
    // Caleb Zarko from ARTG 120 section helped code the in game timer 
// (5) Add your own (copyright-free) background music to the Play scene
 // music provided by https://www.youtube.com/watch?v=a9WPkHd4fvs
// (10) Create a new title screen (e.g., new artwork, typography, layout) 
    // rewrote the title and added new font and text, and textbox color.
    // I'm not the best at coding and implementing this change was an accomplishment for me. 
    // apologies if it is not up to par