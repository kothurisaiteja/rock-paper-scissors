let choice=['rock','paper','scissor'];
const player=document.getElementById("Player");
const comp=document.getElementById("Computer");
const res=document.getElementById("Result");
const pscore=document.getElementById("pscore");
const cscore=document.getElementById("cscore");
let a=0;
let b=0;
function play(Mychoice){
    let CompChoice=choice[Math.floor(Math.random()*3)];
    let result="";
    if(Mychoice===CompChoice){
        result="IT'S A TIE"
        res.style.color="yellow";
    }else{
        switch(Mychoice){
            case 'rock':
                result=(CompChoice==='scissor')?"You Won":"you Lose";
                break;
            case 'paper':
                result=(CompChoice==='rock')?"You Won":"you Lose";    
                break;
            case 'scissor':
                result=(CompChoice==='paper')?"You Won":"you Lose";
                break;
        }  
    }
    player.textContent=`Player  : ${Mychoice}`;
    comp.textContent=`Computer  : ${CompChoice}`;
    res.textContent=result;
    switch(result){
    case "You Won":
        res.style.color="rgb(47,255,0)";
        a++;
        showPopup("+1","lime");
        break;

    case "you Lose":
        res.style.color="red";
        b++;
        showPopup("+1","red");
        break;

    case "IT'S A TIE":
        showPopup("0","yellow");
        break;
}
    pscore.textContent=`Player score :${a}`;
    cscore.textContent=`Computer score :${b}`;
}
const popup = document.getElementById("popup");
function showPopup(text,color){
    popup.textContent = text;
    popup.style.color = color;

    popup.classList.remove("popup-show");
    void popup.offsetWidth;
    popup.classList.add("popup-show");
}