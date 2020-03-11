var mydamage;
var botdamage;
var bothp;
var myhp;
var botact;
var turn;
var myact;
function flip(){
    var c = document.getElementById("coin").value;
    var f = (Math.floor(Math.random()*2));
    turn = f;
    if(c==f){
        document.getElementById("turn").innerHTML = "Player first";
        turn=1;
    }
    else{
        document.getElementById("turn").innerHTML = "Bot first";
        turn=0;
    }
    
    bothp =100;
    myhp =100;
}
function punch(){
    myact = 1;
    mydamage = (Math.floor(Math.random()*6));
    botaction();
    calculate();
    HP();
    if(botact==1){
        document.getElementById("history").innerHTML = "you dealt "+mydamage+" damage,"+" bot decided to attack dealing "+botdamage; 
    }
    else{
        document.getElementById("history").innerHTML = "bot decided to block reducing your damage to "+mydamage;
    }
}
function defend(){
    myact = 2;
    botaction();
    calculate();
    HP();
    if(botact==1){
        document.getElementById("history").innerHTML = "you reduced bots damage to "+botdamage;
    }
    else{
        document.getElementById("history").innerHTML = "both of you blocked";
    }
}
function calculate(){
    if(turn==1){
        if(myact==1){
            if(botact==2){
                mydamage = mydamage-3;
                if(mydamage<0){ mydamage = 0;}
                botdamage = 0;
            }
            else{
                mydamage = mydamage;
                botdamage = botdamage;
            }
        }
        else{
            if(botact==1){
                mydamage = 0;
                botdamage = botdamage-3;
                if(botdamage<0){ botdamage =0;}
            }
            else{
                mydamage = 0;
                botdamage = 0;
            }
        }
    }
    else{
        if(myact==1){
            if(botact==2){
                mydamage = mydamage-3;
                if(mydamage<0){ mydamage = 0;}
                botdamage = 0;
            }
            else{
                mydamage = mydamage;
                botdamage = botdamage;
            }
            
        }
        else{
            if(botact==1){
                mydamage = 0;
                botdamage = botdamage-3;
                if(botdamage<0){ botdamage =0;}
            }
            else{
                botdamage = 0;
                mydamage = 0;
            }
        }
    }
}
function HP(){
//    history();
    if(mydamage>0){
        bothp = bothp - mydamage;
    }
    if(botdamage>0){
        myhp = myhp - botdamage;
    }
    document.getElementById("myhp").innerHTML = myhp;
    let barmyhp = document.getElementById("barmyhp").value = myhp;
    document.getElementById("bothp").innerHTML = bothp;
    let barbothp = document.getElementById("barbothp").value = bothp;
    if(myhp<=0){
        alert("GAME END BOT WINS");
    }
    if(bothp<=0){
        alert("GAME END PLAYER WINS");
    }
}
function botaction(){
    var random = (Math.floor(Math.random()*10));
    if(random%2==0||random%5==0){
        botact = 1;
        botdamage = (Math.floor(Math.random()*5));
    }
    else{
        botact = 2;
    }
}



