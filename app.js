let gameSeq=[];
let userSeq=[];
let started = false;
let level =0;
let color = ["yellow","red","purple","green"];
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started == false ){
        console.log("Game is Started");
        started = true;
        levelUp();
    }
});
function gameflash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash")
   },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
     btn.classList.remove("userflash")
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `level ${level}`;
    let btnIdx = Math.floor(Math.random()*3);
    let btncolor = color[btnIdx];
    let randbtn = document.querySelector(`.${btncolor}`);
    gameSeq.push(btncolor);
    gameflash(randbtn);
}
function checkans(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your Score was <b> ${level} </b>. <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="rgb(220, 201, 201)"
        },250);
        reset();
    }
}
function btnpress(){
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    checkans(userSeq.length-1);
}
function reset(){
    level=0;
    userSeq = [];
    gameSeq=[];
    started = false;
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
