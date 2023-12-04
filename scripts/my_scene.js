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
//          // 画像の読み込み(使用する時の名前, パス)
//         this.load.image('back', 'assets/background.png');
//         this.load.image('taro', 'assets/taro.png');
//     }

//     // シーン初期化処理
//     create() {
//          // 単体画像をシーンに追加(X座標,Y座標,画像名)
//         this.back = this.add.image(D_WIDTH/2, D_HEIGHT/2, 'back');
//         this.taro = this.add.image(D_WIDTH/2, D_HEIGHT/2, 'taro');
//         this.text = this.add.text(10, 10, 'Scene 1').setFontSize(32).setColor('#ff0');

//         this.taro_direction = 1;
//     }
    
//   // 毎フレーム実行される繰り返し処理
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
//         // this.taro.angle を5度ずつ増加させる
//         this.taro.angle += 5;

//         // 角度をラジアンに変換
//         const angleInRadians = Phaser.Math.DegToRad(this.taro.angle);

//         if (this.taro.y >= D_WIDTH - 100) this.taro_direction = -1;

//                  if (this.taro.y <= 100) this.taro_direction = 1;
                
//                  if (this.taro_direction == 1) {
        
//                      this.taro.x += 5;// 横方向へ移動を設定
//                      this.taro.y += 5;
                
//                  } else {
                
//                       this.taro.x -= 5;// 横方向へ移動を設定
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
        }
    
        create() {
             this.back = this.add.image(D_WIDTH / 2, D_HEIGHT / 2, 'back');
             this.taro = this.add.image(D_WIDTH / 2, D_HEIGHT / 2, 'taro');
            this.text = this.add.text(10, 10, 'Scene 1').setFontSize(32).setColor('#ff0');
    
            this.taro_direction = 1;
             this.taro.angle = 0; // 初期角度を0度に設定
         }
        }