class GameScene extends Phaser.Scene {
    preload() { //게임이 실행하자마자 이미지나 사운드 제이슨이나 데이터를 로딩해준다.
        this.load.setPath('/static/assets');
        this.load.image('bg', 'bg/1.png'); // 바닥
        this.load.image('cactus', 'bg/2.png'); //장애물
        this.load.spritesheet('player', 'player/1.png', {frameWidth: 50, frameHeight: 50}); //캐릭터, spritesheet 로 폭과 높이로 잘라서 두장으로 만든다.
    }


    create() {

        //바닥
        this.bg1 = this.add.tileSprite(0, HEIGHT - 30, WIDTH, 15, 'bg') //tileSprite : 바닥 그림이 끝나는 부분에 이어서 나오도록 설정 (x축, y축, 폭, 높이, 그림)
            .setOrigin(0, 0);

        this.bg2 = this.add.tileSprite(0, HEIGHT - 110, WIDTH, 15, 'bg')
            .setOrigin(0, 0);

        this.bg3 = this.add.tileSprite(0, HEIGHT - 190, WIDTH, 15, 'bg')
            .setOrigin(0, 0);

        this.bg4 = this.add.tileSprite(0, HEIGHT - 270, WIDTH, 15, 'bg')
            .setOrigin(0, 0);


        //공룡 달리기 속도 조절 가능
        this.anims.create({
            key: '한호',
            frames: this.anims.generateFrameNames('player', {start: 0, end: 1}), //0과 1 (두장)으로 애니메이션을 만드는 것이다.
            frameRate: 5, //두장 이미지가 반복되는 속도 커질수록 빨라진다.
            repeat: -1 // 이것을 해야 애니메이션이 계속 반복된다.???
        });

        this.anims.create({
            key: '준구',
            frames: this.anims.generateFrameNames('player', {start: 0, end: 1}),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: '진혁',
            frames: this.anims.generateFrameNames('player', {start: 0, end: 1}),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: '근혁',
            frames: this.anims.generateFrameNames('player', {start: 0, end: 1}),
            frameRate: 5,
            repeat: -1
        });


        //캐릭터1
        this.player1 = this.physics.add.sprite(50, HEIGHT - 30); //physics를 넣으면 충돌을 체크할 수 있고 빼면 충돌 없이 그냥 간다.
        this.player1.body.setSize(20, 50); // 충돌영역이 애매하기 때문에 충돌영역 크기를 설정해야 한다.
        this.player1.play('한호');

        //캐릭터2
        this.player2 = this.physics.add.sprite(50, HEIGHT - 110);
        this.player2.body.setSize(20, 50);
        this.player2.play('준구');

        //캐릭터3
        this.player3 = this.physics.add.sprite(50, HEIGHT - 190);
        this.player3.body.setSize(20, 50);
        this.player3.play('진혁');

        //캐릭터4
        this.player4 = this.physics.add.sprite(50, HEIGHT - 270);
        this.player4.body.setSize(20, 50);
        this.player4.play('근혁');

        this.delay = 3000; //장애물 나오는 시간 3000 = 3초마다 나오게 하겠다.
        this.timer = this.time.addEvent({
            delay: this.delay,
            callback: this.onTimerEvent, callbackScope: this, loop: true
        });

        // //점프기능
        // this.input.on('pointerdown', function (pointer) {
        //     if(this.player.y < HEIGHT -100)return;
        //     this.tweens.add({
        //         targets:this.player,
        //         y:this.player.y-50,
        //         duration:500,
        //         yoyo:true,
        //     });
        // }.bind(this));     
    }


    onTimerEvent() {
        this.addCactus1();
        this.addCactus2();
        this.addCactus3();
        this.addCactus4();
    }

    //1번 레인
    addCactus1() {
        this.cactusGroup1 = this.physics.add.group();
        let randomX = Phaser.Math.Between(100, 200); //장애물 크기 랜덤으로 생성 100~200사이

        let cactus1 = this.physics.add.sprite(WIDTH + randomX, HEIGHT - 30, 'cactus').setScale(0.5); //랜덤을 더해서 크기 조절
        cactus1.body.setSize(20, 50);
        this.cactusGroup1.add(cactus1);

        const rand = Math.floor(Math.random() * 5000 + 1000);

        this.tweens.add({
            targets: cactus1,
            x: 0,
            duration: rand,
            onComplete: function (tween, targets) {
                cactus1.destroy();
            }.bind(this)
        })
        this.physics.add.overlap(this.cactusGroup1, this.player1, this.hitCactusPlayer, null, this); //overlap으로 선인장과 캐릭터가 충돌되면 hitCactusPlayer을 띄어줘라
    }

    //2번 레인
    addCactus2() {
        this.cactusGroup2 = this.physics.add.group();
        let randomX = Phaser.Math.Between(100, 200); //장애물 크기 랜덤으로 생성 100~200사이

        let cactus2 = this.physics.add.sprite(WIDTH + randomX, HEIGHT - 110, 'cactus').setScale(0.5); //랜덤을 더해서 크기 조절
        cactus2.body.setSize(20, 50);
        this.cactusGroup2.add(cactus2);

        const rand = Math.floor(Math.random() * 5000 + 1000);

        this.tweens.add({
            targets: cactus2,
            x: 0,
            duration: rand,
            onComplete: function (tween, targets) {
                cactus2.destroy();
            }.bind(this)
        })
        this.physics.add.overlap(this.cactusGroup2, this.player2, this.hitCactusPlayer, null, this); //overlap으로 선인장과 캐릭터가 충돌되면 hitCactusPlayer을 띄어줘라
    }

    //3번 레인
    addCactus3() {
        this.cactusGroup3 = this.physics.add.group();
        let randomX = Phaser.Math.Between(100, 200);

        let cactus3 = this.physics.add.sprite(WIDTH + randomX, HEIGHT - 190, 'cactus').setScale(0.5); //랜덤을 더해서 크기 조절
        cactus3.body.setSize(20, 50);
        this.cactusGroup3.add(cactus3);

        const rand = Math.floor(Math.random() * 5000 + 1000);

        this.tweens.add({
            targets: cactus3,
            x: 0,
            duration: rand,
            onComplete: function (tween, targets) {
                cactus3.destroy();
            }.bind(this)
        })
        this.physics.add.overlap(this.cactusGroup3, this.player3, this.hitCactusPlayer, null, this); //overlap으로 선인장과 캐릭터가 충돌되면 hitCactusPlayer을 띄어줘라
    }

    //4번 레인
    addCactus4() {
        this.cactusGroup4 = this.physics.add.group();
        let randomX = Phaser.Math.Between(100, 200);

        let cactus4 = this.physics.add.sprite(WIDTH + randomX, HEIGHT - 270, 'cactus').setScale(0.5); //랜덤을 더해서 크기 조절
        cactus4.body.setSize(20, 50);
        this.cactusGroup2.add(cactus4);

        const rand = Math.floor(Math.random() * 5000 + 1000);

        this.tweens.add({
            targets: cactus4,
            x: 0,
            duration: rand,
            onComplete: function (tween, targets) {
                cactus4.destroy();
            }.bind(this)
        })
        this.physics.add.overlap(this.cactusGroup4, this.player4, this.hitCactusPlayer, null, this); //overlap으로 선인장과 캐릭터가 충돌되면 hitCactusPlayer을 띄어줘라
    }

    update() {
        this.bg1.tilePositionX += 5;
        this.bg2.tilePositionX += 7;
        this.bg3.tilePositionX += 9;
        this.bg4.tilePositionX += 11;
    }

    hitCactusPlayer() {
        alert("1등!!!");
        //if (cactusGroup1) {
        //    alert("1등!!!");
        //} else if (cactusGroup2) {
        //    alert("1등!!!");
        //} else if (cactusGroup3) {
        //  alert("1등!!!");
        //} else if (cactusGroup4)
        //   alert("1등!!!");
        this.scene.restart(); //확인 누르면 재시작하는 코드
    }


}