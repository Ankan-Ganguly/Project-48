//answer of sherlock's questions
const sAnswer1 = "A STUDY IN SCARLET";
const sAnswer2 = "MYCROFT";
const sAnswer3 = "POISONING";
const sAnswer4 = "2";
const sAnswer5 = "VIOLIN";
const sAnswer6 = "STEPHEN HOPKINS";
const sAnswer7 = "28th February, 2020";
const sanswer8 = "26";
const sAnswer9 = "SWITZERLAND";
const sanwer10 = " A SIGN OF FOUR";
const sAnswer11 = "SABRINA KVIST JENSEN";
const sAnswer12 = "INTER MILAN";
const sAnswer13 = "IRENE ADLER";
const sAnswer14 = "DRUG";
const sAnswer15 = "19 June 1964";
const sAnswer16 = "57 years"

//answer of moriarty's questions
const mAnswer1 = "SWITZERLAND";
const mAnswer2 = "THE REICHENBACH FALL";
const mAnswer3 = "RELIC";
const mAnswer4 = "MONEY";
const mAnswer5 = "THE VALLEY OF FEAR";
const mAnswer6 = "REICHENBACH FALLS";
const mAnswer7 = "28th February, 2020";
const mAnswer8 = "26";
const mAnswer9 = "1892";
const mAnswer10 = "SEBASTIAN MORAN";
const mAnswer11 = "SABRINA KVIST JENSEN";
const mAnswer12 = "INTER MILAN";
const mAnswer13 = "ARMY COACH";
const mAnswer14 = "BINOMIAL THEOREM";
const mAnswer15 = "19 June 1964";
const mAnswer16 = "57 years";


function questions (){
    background(caseBGImg);
    if (character === 1){
        //first quiz of sherlock
        if (gameState === 2){
            fill('white');
            textSize(15);
            text("In which story does for the first time Holmes and Watson meet?", 100, 50);
            fill('lightblue');
            text("Hint: E C T T A I A S N R S L Y D U", 100, 70);

            fill('white');
            textSize(15);
            text("Who is the brother of Sherlock Holmes ?",700, 50);
            fill('lightblue');
            text("Hint: F C M Y T R O", 700, 70);

            fill('white');
            textSize(15);
            text("How do you think Roger was murdered?", 100, 250);
            fill('lightblue');
            text("Hint: There was no other injury in his body except the head", 100, 270);

            fill('white');
            textSize(15);
            text("How many people assissted the criminal in the matter ?", 700, 290);
            fill('lightblue');
            text("Hint: Someone is lying", 700, 310)
        }
        //second quiz of sherlock
        if (gameState === 5){
            fill('white');
            textSize(15);
            text("Which instrument did sherlock loved to play?", 100, 50);
            fill('lightblue');
            text("Hint: O V N I L I", 100, 70);

            fill('white');
            textSize(15);
            text("In which scotland yard detective did he see hope of personal success?", 700, 50);
            fill('lightblue');
            text("Hint: H S T O H N E K P N S I", 700, 70);

            fill('white');
            textSize(15);
            text("When was the first Covid case reported in New Zealand?", 100, 250);
            fill('lightblue');
            text("Hint: You may search it", 100, 270);

            fill('white');
            textSize(15);
            text("How many deaths have occured in the country before this new hike?", 700, 290);
            fill('lightblue');
            text("Hint: You may search it", 700, 310)
        }
        //third quiz of sherlock
        if (gameState === 8){
            fill('white');
            textSize(15);
            text("in which country did sherlock defeated moriarty?", 100, 50);
            fill('lightblue');
            text("Hint: W Z S L I D T R A E N", 100, 70);

            fill('white');
            textSize(15);
            text("In which story did watson met his wife?", 700, 50);
            fill('lightblue');
            text("Hint: F R A G S N F R U I O O", 700, 70);

            ill('white');
            textSize(15);
            text("Who is the wife of Christian Eriksen ?", 700, 50);
            fill('lightblue');
            text("Hint: N E S N E J T S I N A K V I S A B R", 100, 270);

            fill('white');
            textSize(15);
            text("He plays in which club ?", 700, 290);
            fill('lightblue');
            text("Hint: A M L E N N I T I R", 700, 310)
        }
        //fourth quiz of sherlock
        if (gameState === 11){
            fill('white');
            textSize(15);
            text("who plays a protagonistic role in A Scandal In Bohemia?", 100, 50);
            fill('lightblue');
            text("Hint:  R L D R E N E I E A", 100, 70);

            fill('white');
            textSize(15);
            text("what is the hound in the series 'Sherlock'?", 700, 50);
            fill('lightblue');
            text("Hint: H.O.U.N.D was written on a t-shirt", 700, 70);

            fill('white');
            textSize(15);
            text("When is the birthday of the PM ?", 100, 250);
            fill('lightblue');
            text("Hint: You may search it", 100, 270);

            fill('white');
            textSize(15);
            text("What is his age will become this year?", 700, 290);
            fill('lightblue');
            text("Hint: You may search it", 700, 310);
        }
    }
    if (character === 2){
        //first quiz of moriarty
        if (gameState === 2) {
            fill('white');
            textSize(15);
            text("in which country did sherlock defeated moriarty?", 100, 50);
            fill('lightblue');
            text("Hint: W Z S L I D T R A E N", 100, 70);

            fill('white');
            textSize(15);
            text("In the TV series, what was the episode in which Moriarty", 700, 50);
            fill('lightblue');
            text("Hint: L T L A H F C A B H N H E C E I R E", 700, 70);

            fill('white');
            textSize(15);
            text("What is the most probable thing you've smashed his head with?", 100, 250);
            fill('lightblue');
            text("Hint: He is a history professor", 100, 270);

            fill('white');
            textSize(15);
            text("What do you think is the last word of Roger's message?", 700, 290);
            fill('lightblue');
            text("Hint: Read the line carefully", 700, 310);
        }
        //second quiz of moriarty
        if (gameState === 5) {
            fill('white');
            textSize(15);
            text("In which only novel is Moriarty mentioned?", 100, 50);
            fill('lightblue');
            text("Hint: E R A L A Y F O E L F A V", 100, 70);

            fill('white');
            textSize(15);
            text("In which fall did Moriarty jumped into?", 700, 50);
            fill('lightblue');
            text("Hint: L S L A H F C A B N H E C I R E", 700, 70);

            fill('white');
            textSize(15);
            text("When was the first Covid case reported in New Zealand?", 100, 250);
            fill('lightblue');
            text("Hint: You may search it", 100, 270);

            fill('white');
            textSize(15);
            text("How many deaths have occured in the country before this new hike?", 700, 290);
            fill('lightblue');
            text("Hint: You may search it", 700, 310);
        }
        //third quiz of moriarty
        if (gameState === 8) {
            fill('white');
            textSize(15);
            text("On which year did Moriarty died?", 100, 50);
            fill('lightblue');
            text("Hint: ", 100, 70);

            fill('white');
            textSize(15);
            text("The day Moriarty died in stories, who was his only companion in chasing Holmes?", 700, 50);
            fill('lightblue');
            text("Hint: I T S A B E S N A R O M N A", 700, 70);

            fill('white');
            textSize(15);
            text("", 100, 250);
            fill('lightblue');
            text("Hint: ", 100, 270);

            fill('white');
            textSize(15);
            text("He plays in which club ?", 700, 290);
            fill('lightblue');
            text("Hint: Hint: A M L E N N I T I R", 700, 290);
        }
        //fourth quiz of moriarty
        if (gameState === 11) {
            fill('white');
            textSize(15);
            text("After resigning the post of maths professor, what did he become?", 100, 50);
            fill('lightblue');
            text("Hint: C A H C A O R Y M", 100, 70);

            fill('white');
            textSize(15);
            text("On what did Moriarty write a treatise on ?", 700, 50);
            fill('lightblue');
            text("Hint: H T M O N E M E I B I O R L A", 700, 70);

            fill('white');
            textSize(15);
            text("When is the birthday of the PM ?", 100, 250);
            fill('lightblue');
            text("Hint: You may search it", 100, 270);

            fill('white');
            textSize(15);
            text("What is his age will become this year?", 700, 290);
            fill('lightblue');
            text("Hint: You may search it", 700, 310);
        }
    }
    
}