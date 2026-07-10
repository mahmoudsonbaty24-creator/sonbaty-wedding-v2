// =========================================
// Mahmoud & Wesam Wedding
// Version 1.0
// =========================================

// Loader

document.addEventListener("DOMContentLoaded", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {
        if (loader) {
            loader.style.display = "none";
        }
    }, 1500);

});
   
// Music Button

const music = document.getElementById("music");

const playBtn = document.getElementById("playMusic");

if(playBtn){

playBtn.addEventListener("click",()=>{

if(music.paused){

music.play();

playBtn.innerHTML="❚❚ Pause Music";

}else{

music.pause();

playBtn.innerHTML="♫ Play Music";

}

});

}


// Open Invitation

const openBtn=document.getElementById("openInvitation");

if(openBtn){

openBtn.addEventListener("click",()=>{

document.getElementById("countdown").scrollIntoView({

behavior:"smooth"

});

});

}


// Countdown

const weddingDate = new Date("September 11, 2026 20:00:00").getTime();

setInterval(()=>{

const now=new Date().getTime();

const distance=weddingDate-now;

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

const seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;

},1000);
