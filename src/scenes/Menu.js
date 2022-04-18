class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/yummy.wav');
        this.load.audio('sfx_rocket', './assets/splishy.wav');
        this.load.audio('music','./assets/Roa_Nightfall.mp3'); // 5 points background music provided by:
        // https://www.youtube.com/watch?v=a9WPkHd4fvs
    }
//testing repository
    create() {
        // menu text configuration
        let menuConfig = {
            fontFamily: 'cursive',
            fontSize: '25px',
            backgroundColor: '#6495ED',
            color: '#000',
            align: 'right',
            padding: {
                top: 10,
                bottom: 5,
            },
            fixedWidth: 0
        }
        // 10 points redid menu layout and typography 
        // show menu text
        this.add.text(game.config.width/4, game.config.height/4 - borderUISize - borderPadding, ' Feed da Whales! ', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, ' Use ←→ arrows to move & (F) to throw the fishie! ', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#6495ED';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, ' Press ← for Novice or → for Expert ', menuConfig).setOrigin(0.5);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // Novice mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.sound.play('music'); //added background music 
          this.scene.start("playScene");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // Expert mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.sound.play('music'); // added background music
          this.scene.start("playScene");    
        }
      }
}