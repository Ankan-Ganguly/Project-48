class Quiz {
    constructor(){
        //check buttons for sherlock
        this.sButton = createButton("Check");

        //check buttons for moriarty
        this.mButton = createButton("Check");
        
        //input for sherlock
        this.sInput1 = createInput("").attribute("placeholder", "Answer");
        this.sInput2 = createInput("").attribute("placeholder", "Answer");
        this.sInput3 = createInput("").attribute("placeholder", "Answer");
        this.sInput4 = createInput("").attribute("placeholder", "Answer");

        //input for moriarty
        this.mInput1 = createInput("").attribute("placeholder", "Answer");
        this.mInput2 = createInput("").attribute("placeholder", "Answer");
        this.mInput2 = createInput("").attribute("placeholder", "Answer");
        this.mInput4 = createInput("").attribute("placeholder", "Answer");
    }

    display(){
        background(quizBGImg);
        //sherlock
        if (character === 1){
            fill('white');
            text("Score: " + player.score, 40, 30);
            text("Lives: " + player.lives, displayWidth - 40, 30);
            quizBS.play();
            //quiz buttons and inputs for first case
            if (gameState === 2){
                this.sInput1.position(100, 90);
                this.sInput2.position(700, 190);
                this.sInput3.position(100, 290);
                this.sInput4.position(700, 290);
                this.sButton.position(height-250, width/2+50);
                this.sButton.mousePressed(() => {
                    this.sButton.hide();
                    if(system.authenticate(sAnswer1,this.sInput1.value())){
                        this.sInput1.hide();
                        score++ ;
                    }
                    if(system.authenticate(sAnswer2,this.sInput2.value())){
                        this.sInput2.hide();
                        score++ ;
                    }
                    if(system.authenticate(sAnswer3,this.sInput3.value())){
                        this.sInput3.hide();
                        score++ ;
                    }
                    if(system.authenticate(sAnswer4,this.sInput4.value())){
                        this.sInput4.hide();
                        score++ ;
                    }
                });                    
            }
             //quiz buttons and inputs for second case
            if (gameState === 5) {
                this.sInput1.position(100, 90);
                this.sInput2.position(700, 190);
                this.sInput3.position(100, 290);
                this.sInput4.position(700, 290);
                this.sButton.position(height-250, width/2+50);
                this.sButton.mousePressed(() => {
                    this.sButton.hide();
                    if(system.authenticate(sAnswer5,this.sInput1.value())){
                        this.sInput1.hide();
                        score++ ;
                    }
                    if(system.authenticate(sAnswer6,this.sInput2.value())){
                        this.sInput2.hide();
                        score++ ;
                    }
                    if(system.authenticate(sAnswer7,this.sInput3.value())){
                        this.sInput3.hide();
                        score++ ;
                    }
                    if(system.authenticate(sAnswe86,this.sInput4.value())){
                        this.sInput4.hide();
                        score++ ;
                    }
                });
            }
             //quiz buttons and inputs for third case
            if (gameState === 8) {
                this.sInput1.position(100, 90);
                this.sInput2.position(700, 190);
                this.sInput3.position(100, 290);
                this.sInput4.position(700, 290);
                this.sButton.position(height-250, width/2+50);
                this.sButton.mousePressed(() => {
                    this.sButton.hide();
                    if(system.authenticate(sAnswer9,this.sInput1.value())){
                        this.sInput1.hide();
                        score++ ;
                    }
                    if(system.authenticate(sAnswer10,this.sInput2.value())){
                        this.sInput2.hide();
                        score++ ;
                    }
                    if(system.authenticate(sAnswer11,this.sInput3.value())){
                        this.sInput3.hide();
                        score++ ;
                    }
                    if(system.authenticate(sAnswer12,this.sInput4.value())){
                        this.sInput4.hide();
                        score++ ;
                    }
                });                    
            }
             //quiz buttons and inputs for fourth case
            if (gameState === 11) {
                this.sInput1.position(100, 90);
                this.sInput2.position(700, 190);
                this.sInput3.position(100, 290);
                this.sInput4.position(700, 290);
                this.sButton.position(height-250, width/2+50);
                this.sButton.mousePressed(() => {
                    this.sButton.hide();
                    if(system.authenticate(sAnswer13,this.sInput1.value())){
                        this.sInput1.hide();
                        score++ ;
                    }
                    if(system.authenticate(sAnswer14,this.sInput2.value())){
                        this.sInput2.hide();
                        score++ ;
                    }
                    if(system.authenticate(sAnswer15,this.sInput3.value())){
                        this.sInput3.hide();
                        score++ ;
                    }
                    if(system.authenticate(sAnswer16,this.sInput4.value())){
                        this.sInput4.hide();
                        score++ ;
                    }
                });

            }
        }
        //moriarty
        if (character === 2) {
            fill('white');
            text("Score: " + player.score, 40, 30);
            text("Lives: " + player.lives, displayWidth - 40, 30);
            quizBS.play();
             //quiz buttons and inputs for first case
            if (gameState === 2) {
                this.mInput1.position(100, 90);
                this.mInput2.position(700, 190);
                this.mInput3.position(100, 290);
                this.mInput4.position(700, 290);
                this.mButton.position(height-250, width/2+50);
                this.mButton.mousePressed(() => {
                    this.sButton.hide();
                    if(system.authenticate(mAnswer1,this.mInput1.value())){
                        this.mInput1.hide();
                        score++ ;
                    }
                    if(system.authenticate(mAnswer2,this.mInput2.value())){
                        this.mInput2.hide();
                        score++ ;
                    }
                    if(system.authenticate(mAnswer3,this.mInput3.value())){
                        this.mInput3.hide();
                        score++ ;
                    }
                    if(system.authenticate(mAnswer4,this.mInput4.value())){
                        this.mInput4.hide();
                        score++ ;
                    }
                });
            }
             //quiz buttons and inputs for second case
            if (gameState === 5) {
                this.mInput1.position(100, 90);
                this.mInput2.position(700, 190);
                this.mInput3.position(100, 290);
                this.mInput4.position(700, 290);
                this.mButton.position(height-250, width/2+50);
                this.mButton.mousePressed(() => {
                    this.sButton.hide();
                    if(system.authenticate(mAnswer5,this.mInput1.value())){
                        this.mInput1.hide();
                        score++ ;
                    }
                    if(system.authenticate(mAnswer6,this.mInput2.value())){
                        this.mInput2.hide();
                        score++ ;
                    }
                    if(system.authenticate(mAnswer7,this.mInput3.value())){
                        this.mInput3.hide();
                        score++ ;
                    }
                    if(system.authenticate(mAnswer8,this.mInput4.value())){
                        this.mInput4.hide();
                        score++ ;
                    }
                });
            }
             //quiz buttons and inputs for third case
            if (gameState === 8) {
                this.mInput1.position(100, 90);
                this.mInput2.position(700, 190);
                this.mInput3.position(100, 290);
                this.mInput4.position(700, 290);
                this.mButton.position(height-250, width/2+50);
                this.mButton.mousePressed(() => {
                    this.sButton.hide();
                    if(system.authenticate(mAnswer9,this.mInput1.value())){
                        this.mInput1.hide();
                        score++ ;
                    }
                    if(system.authenticate(mAnswer10,this.mInput2.value())){
                        this.mInput2.hide();
                        score++ ;
                    }
                    if(system.authenticate(mAnswer11,this.mInput3.value())){
                        this.mInput3.hide();
                        score++ ;
                    }
                    if(system.authenticate(mAnswer12,this.mInput4.value())){
                        this.mInput4.hide();
                        score++ ;
                    }
                });
            }
             //quiz buttons and inputs for fourth case
            if (gameState === 11) {;
                this.mInput1.position(100, 90);
                this.mInput2.position(700, 190);
                this.mInput3.position(100, 290);
                this.mInput4.position(700, 290);
                this.mButton.position(height-250, width/2+50);
                this.mButton.mousePressed(() => {
                    this.sButton.hide();
                    if(system.authenticate(mAnswer13,this.mInput1.value())){
                        this.mInput1.hide();
                        score++ ;
                    }
                    if(system.authenticate(mAnswer14,this.mInput2.value())){
                        this.mInput2.hide();
                        score++ ;
                    }
                    if(system.authenticate(mAnswer15,this.mInput3.value())){
                        this.mInput3.hide();
                        score++ ;
                    }
                    if(system.authenticate(mAnswer16,this.mInput4.value())){
                        this.mInput4.hide();
                        score++ ;
                    }
                });
            }
        }
    }
}