var min = document.getElementById("min");
var sec=document.getElementById("sec");
var mili=document.getElementById("milli");
var s=0;
var m=0;
var ml=0;
var interval;
var start=document.querySelector(".start");
var st=document.querySelector(".stop");
var reset=document.querySelector(".reset");
start.addEventListener("click",startTimer)
st.addEventListener("click",stopTimer)
reset.addEventListener("click",resetTimer)
function timer(){
    ml++;
    mili.innerHTML=ml;
    if(ml>=100){
        s++;
        sec.innerHTML=s;
        ml=0;
    }
    if(s>=60){
        m++;
        min.innerHTML=m;
        s=0;
    }
}

function startTimer(){
    interval=setInterval(timer,10)
    start.disabled=true;
}

function stopTimer(){
clearInterval(interval)
}

function resetTimer(){
    ml=0;
    s=0;
    m=0;
    mili.innerHTML= ml;
    sec.innerHTML=s;
    min.innerHTML=m;
    stopTimer();
    start.disabled=false
}