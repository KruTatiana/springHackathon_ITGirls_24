const button = document.querySelector("#countdown");

button.addEventListener("click", function() {
    document.querySelector("#myVideo").play();
})

const timer = 20;
let amountTime = timer*60;

function calculateTime() {
    const countdown = document.querySelector("#countdown");
    
    let minutes = Math.floor(amountTime/60);
    let second = amountTime%60;

    if(second<10) {
        second = "0" + second;
    }
    
    countdown.textContent= `${minutes}:${second}`;
    amountTime--;

    if(amountTime<0){
        stopTimer();
        amountTime=0;
    }

    function stopTimer() {
        clearInterval(timerId);
    }
}
let timerId = setInterval(calculateTime, 1000);



let btnFlag = false;
const buttonPlay = document.querySelector("#myButton");
buttonPlay.addEventListener("click", function() {
    btnFlag = !btnFlag;
    if (btnFlag) {
        document.querySelector("#player").pause();
        document.getElementById('playBtn').src='https://img.icons8.com/fluency-systems-regular/2x/circled-play--v2.png';
    } 
    
    else {
        document.querySelector("#player").play();
        document.getElementById('playBtn').src='https://img.icons8.com/fluency-systems-regular/2x/circled-pause--v2.png';
    }
    
})