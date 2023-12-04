//1-3
// // MyScene1クラス
// // 他のJSファイルから呼び出された場合はシーンを返す
// class MyScene extends Phaser.Scene {

//     // 継承した「Phaser.Scene」クラスのコンストラクタの呼び出し
//     constructor() {
//         super({ key: 'MyScene', active: true });
//     }

//     // シーンの事前読み込み処理
//     preload() {
//         this.load.image('back', 'assets/background.png');
//         this.load.image('taro', 'assets/taro.png');
//     }

//     // シーン初期化処理
//     create() {
//         this.back = this.add.image(D_WIDTH/2, D_HEIGHT/2, 'back');
//         this.taro = this.add.image(D_WIDTH/2, D_HEIGHT/2, 'taro');
//         this.text = this.add.text(10, 10, 'Scene 1').setFontSize(32).setColor('#ff0');

//         this.taro_direction = 1;
//     }
    
//     update() {
//         if (this.taro.y >= D_WIDTH - 100) this.taro_direction = -1;

//         if (this.taro.y <= 100) this.taro_direction = 1;
        
//         if (this.taro_direction == 1) {

//             this.taro.x += 6;// 横方向へ移動を設定
//             this.taro.y += 6;
        
//         } else {
        
//              this.taro.x -= 6;// 横方向へ移動を設定
//              this.taro.y -= 6;
        
//         }
//     }

// }1-4
// class MyScene extends Phaser.Scene {
//     constructor() {
//         super({ key: 'MyScene', active: true });
//     }

//     preload() {
//         this.load.image('back', 'assets/background.png');
//         this.load.image('taro', 'assets/taro.png');
//     }

//     create() {
//         this.back = this.add.image(D_WIDTH / 2, D_HEIGHT / 2, 'back');
//         this.taro = this.add.image(D_WIDTH / 2, D_HEIGHT / 2, 'taro');
//         this.text = this.add.text(10, 10, 'Scene 1').setFontSize(32).setColor('#ff0');

//         this.taro_direction = 1;
//         this.taro.angle = 0; // 初期角度を0度に設定
//     }

//     update() {
//         this.taro.angle += 5;

//         const angleInRadians = Phaser.Math.DegToRad(this.taro.angle);

//         if (this.taro.y >= D_WIDTH - 100) this.taro_direction = -1;

//                  if (this.taro.y <= 100) this.taro_direction = 1;
                
//                  if (this.taro_direction == 1) {
        
//                      this.taro.x += 5;
//                      this.taro.y += 5;
                
//                  } else {
                
//                       this.taro.x -= 5;
//                       this.taro.y -= 5;
                
//                  }
//              }
        
//          }

//1-5
class MyScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MyScene', active: true });
    }

    preload() {
        this.load.image('back', 'assets/background.png');
        this.load.image('taro', 'assets/taro.png');
        this.load.image('jiro', 'assets/jiro.png');
    }

    create() {
        this.back = this.add.image(D_WIDTH / 2, D_HEIGHT / 2, 'back');
        this.taro = this.add.image(D_WIDTH / 2, D_HEIGHT / 2, 'taro');
        this.jiro = this.add.image(D_WIDTH / 3, D_HEIGHT / 3, 'jiro');
        this.text = this.add.text(10, 10, 'Scene 1').setFontSize(32).setColor('#ff0');
        
        this.worldText = this.add.text(600, 400, 'MyWorld', { fontSize: '24px', fill: '#fff' });

        
        this.cursors = this.input.keyboard.createCursorKeys();
        this.input.keyboard.on('keydown-A', this.handleAKey, this);
        this.input.keyboard.on('keydown-S', this.handleSKey, this);
        this.input.keyboard.on('keydown-D', this.handleDKey, this);
    }

    update() {
        if (this.cursors.right.isDown) {
            this.taro.x += 50;
        } else if (this.cursors.left.isDown) {
            this.taro.x -= 50;
        }

        if (this.cursors.right.isDown) {
            this.jiro.x -= 50;
        } else if (this.cursors.left.isDown) {
            this.jiro.x += 50;
        }
    }

    handleAKey() {
        this.add.text(100, 50, 'Hello!', { fontSize: '24px', fill: '#fff' });
    }

    handleSKey() {
        this.add.text(100, 50, 'Hey!', { fontSize: '24px', fill: '#fff' });
    }

    handleDKey() {
        this.worldText.setText(''); 
    }
}
