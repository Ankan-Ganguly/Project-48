var database;
var gameState = 0;
var playerCount;
var game, form,player;
var character=0;
var play1Bg, play2Bg, play3Bg;
var allPlayers;

function preload(){
    openingBgImg = loadImage("../images/Opening_BG.jpg");
    caseBGImg = loadImage("../images/Reaction_Pic2.jpg");
    quizBGImg = loadImage("../images/Quiz_BG.jpg");
    reactionImg = loadImage("../images/Reaction_Pic1.jpg");

    quizS = loadSound("../sound/Sherlock_Theme.mp3");
    caseBS = loadSound("../sound/sherlock_holmes_them.mp3");
    playBS = loadSound("../sound/sherlock-theme-song.mp3");
    //moriartyWinS = loadSound("../sound/did_you_miss_me.mp3");
    //sherlockWinS = loadSound("../sound/absurdly_simple.mp3");
    //moriartyLoseS = loadSound("../sound/Moriarty_Lost.mp3");
    //sherlockLoseS = loadSound("../sound/Sherlock_Lost.mp3");
}

function setup(){
    createCanvas(displayWidth- 20, displayHeight-30);
    database = firebase.database();
    //form = new Form1();
    game = new Game();
    game.getState();
    game.start();
    coronaGroup = new Group();
    knifeGroup = new Group();
    bulletGroup = new Group();
    boulderGroup = new Group();
}
function draw(){
    //background(openingBgImg);
    //form.display();
    if(playerCount===2){
        game.update(1);
    }
    if(character === 1){
        if (gameState === 1) {
            clear();
            game.case1();
        }

        if (gameState === 1 && keyIsDown("space")) {
            clear();
            game.update(2);
            var quiz1 = new Quiz(); 
            quiz1.display();
        }
        if (gameState === 2 && player.score === 4) {
            clear();
            game.update(3);
            background(reactionImg);
            playBS.play();
            text("Whoa! You successfully solved the first case", width / 2 - 20, height / 2 - 30);
            text("Press l to move to the next level", width / 2 - 20, height / 4);
            player.score++;

        }
        else if (gameState === 2 && player.score < 4) {
            clear();
            game.update(3)
            background(reactionImg);
            playBS.play();
            text("Oops! You failed to solve the first case", width / 2 - 20, height / 2 - 30);
            text("Press l to move to the next level", width / 2 - 20, height / 4);
            player.lives--;
        }
        if (gameState === 3 && keyIsDown("l")) {
            clear();
            game.update(4);
            game.case2();
        }
        if (gameState === 4 && keyIsDown("space")) {
            clear();
            game.update(5);
            var quiz2 = new Quiz();
            quiz2.display();
        }
        if (gameState === 5 && player.score === 9) {
            clear();
            game.update(6);
            background(reactionImg);
            playBS.play();
            text("Wonderful! You successfully solved the first case", width / 2 - 20, height / 2 - 30);
            text("Press l to move to the next level", width / 2 - 20, height / 4);
            player.score++;
        }
        else if (gameState === 5 && player.score < 9) {
            clear();
            game.update(6);
            background(reactionImg);
            playBS.play();
            text("Oops! You failed to solve the case", width / 2 - 20, height / 2 - 30);
            text("Press l to move to the next level", width / 2 - 20, height / 4);
            player.lives--;
        }
        if (gamestate === 6 && keyIsDown("l")) {
            clear();
            game.update(7);
            game.case3();
            //spawnKnife();
        }
        if (gameState === 7 && keyIsDown("space")) {
            clear();
            game.update(8);
            var quiz3 = new Quiz();
            quiz3.display();
        }
        if (gameState === 8 && player.score === 14) {
            clear();
            game.update(9);
            background(reactionImg);
            playBS.play();
            text("Great! You successfully solved the first case", width / 2 - 20, height / 2 - 30);
            text("Press l to move to the next level", width / 2 - 20, height / 4);
            player.score++;
        }
        else if (gameState === 8 && player.score < 14) {
            clear();
            game.update(9);
            background(reactionImg);
            playBS.play();
            text("Oops! You failed to solve the case", width / 2 - 20, height / 2 - 30);
            text("Press l to move to the next level", width / 2 - 20, height / 4);
            player.lives--;
        }
        if (gameState === 9 && keyIsDown("l")) {
            clear();
            game.update(10);
            game.case4();
        }
        if (gameState === 10 && keyIsDown("space")) {
            clear();
            game.update(11)
            var quiz4 = new Quiz();
            quiz4.display();
        }
        if (gameState === 11 && player.score < 19) {
            clear();
            game.update(12);
        }
        else if (gameState === 12) {
            player.lives--;
        }
        if(player.lives===0){
        game.end2();
        }
        else if (gameState === 11 && player.score === 19){
            clear();
            game.update(12);

        }
}
if(character === 2){
    if (gameState === 1) {
        clear();
        game.case1();
    }

    if (gameState === 1 && keyIsDown("space")) {
        clear();
        game.update(2);
        var quiz1 = new Quiz();
        quiz1.display();
    }
    if (gameState === 2 && player.score === 4) {
        clear();
        game.update(3);
        background(reactionImg);
        playBS.play();
        text("Whoa! You successfully solved the first case", width / 2 - 20, height / 2 - 30);
        text("Press l to move to the next level", width / 2 - 20, height / 4);
        player.score++;

    }
    else if (gameState === 2 && player.score < 4) {
        clear();
        game.update(3);
        background(reactionImg);
        playBS.play();
        text("Oops! You failed to solve the first case", width / 2 - 20, height / 2 - 30);
        text("Press l to move to the next level", width / 2 - 20, height / 4);
        player.lives--;
    }
    if (gameState === 3 && keyIsDown("l")) {
        clear();
        game.update(4);
        game.case2();
    }
    if (gameState === 4 && keyIsDown("space")) {
        clear();
        game.update(5);
        var quiz2 = new Quiz();
        quiz2.display();
    }
    if (gameState === 5 && player.score === 9) {
        clear();
        game.update(6);
        background(reactionImg);
        playBS.play();
        text("Wonderful! You successfully solved the first case", width / 2 - 20, height / 2 - 30);
        text("Press l to move to the next level", width / 2 - 20, height / 4);
        player.score++;
    }
    else if (gameState === 5 && player.score < 9) {
        clear();
        game.update(6);
        background(reactionImg);
        playBS.play();
        text("Oops! You failed to solve the case", width / 2 - 20, height / 2 - 30);
        text("Press l to move to the next level", width / 2 - 20, height / 4);
        player.lives--;
    }
    if (gamestate === 6 && keyIsDown("l")) {
        clear();
        game.update(7);
        game.case3();
        //spawnKnife();
    }
    if (gameState === 7 && keyIsDown("space")) {
        clear();
        game.update(8);
        var quiz3 = new Quiz();
        quiz3.display();
    }
    if (gameState === 8 && player.score === 14) {
        clear();
        game.update(9);
        background(reactionImg);
        playBS.play();
        text("Wonderful! You successfully solved the first case", width / 2 - 20, height / 2 - 30);
        text("Press l to move to the next level", width / 2 - 20, height / 4);
        player.score++;
    }
    else if (gameState === 8 && player.score < 14) {
        clear();
        game.update(9);
        background(reactionImg);
        playBS.play();
        text("Oops! You failed to solve the case", width / 2 - 20, height / 2 - 30);
        text("Press l to move to the next level", width / 2 - 20, height / 4);
        player.lives--;
    }
    if (gameState === 9 && keyIsDown("l")) {
        clear();
        game.update(10);
        game.case4();
    }
    if (gameState === 10 && keyIsDown("space")) {
        clear();
        game.update(11)
        var quiz4 = new Quiz();
        quiz4.display();
    }
    if (gameState === 11 && player.score < 19) {
        clear();
        game.update(12);
    }
    else if (gameState === 12) {
        player.lives--;
    }
    if (player.lives === 0) {
        game.end2();
    }
    else if (gameState === 11 && player.score === 19) {
        clear();
        game.update(12);

    }
    }
}
