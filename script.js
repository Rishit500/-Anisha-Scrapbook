// ==========================================
// HAPPY BIRTHDAY ANISHA ❤️
// SCRIPT.JS - PART 1
// ==========================================

// -------------------------
// ELEMENTS
// -------------------------

const loader = document.getElementById("loader");

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

const coverPage = document.getElementById("coverPage");
const giftSection = document.getElementById("giftSection");
const bookSection = document.getElementById("bookSection");

const openGift = document.getElementById("openGift");

const giftBox = document.querySelector(".gift-box");
const bookCover = document.querySelector(".book-cover");

const typingText = document.getElementById("typingText");

// -------------------------
// LOADER
// -------------------------

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

            document.body.style.overflow = "hidden";

        },1000);

    },2500);

});

// -------------------------
// MUSIC
// -------------------------

let playing = false;

musicBtn.addEventListener("click", () => {

    if(!playing){

        bgMusic.play();

        musicBtn.innerHTML = "⏸️";

        playing = true;

    }

    else{

        bgMusic.pause();

        musicBtn.innerHTML = "🎵";

        playing = false;

    }

});

// -------------------------
// FLOATING HEARTS
// -------------------------

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "%";

    heart.style.fontSize = (15 + Math.random()*25) + "px";

    heart.style.animationDuration = (5 + Math.random()*5) + "s";

    document.getElementById("floatingHearts").appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,500);

// -------------------------
// OPEN GIFT
// -------------------------

openGift.addEventListener("click",()=>{

    coverPage.classList.add("fade-out");

    setTimeout(()=>{

        coverPage.style.display="none";

        giftSection.style.display="flex";

    },800);

    setTimeout(()=>{

        giftBox.classList.add("gift-open");

    },1500);

    setTimeout(()=>{

        giftSection.style.display="none";

        bookSection.style.display="flex";

    },3000);

    setTimeout(()=>{

        bookCover.classList.add("cover-open");

    },3600);

    setTimeout(()=>{

        startTyping();

    },4300);

});

// -------------------------
// TYPING EFFECT
// -------------------------

const message =

`Dear Miss Clumsy ❤️,

Happy Birthday!

Today is all about YOU.

I just wanted to remind you
how special you are to me.

Thank you for making my life
more beautiful every single day.

I hope this little scrapbook
brings a smile to your face.

Happy Birthday once again ❤️

Love,

Rishit`;

let index = 0;

function startTyping(){

    typingText.innerHTML="";

    index = 0;

    const interval = setInterval(()=>{

        typingText.innerHTML += message.charAt(index);

        index++;

        if(index>=message.length){

            clearInterval(interval);

        }

    },40);

}
// ==========================================
// PAGE NAVIGATION
// ==========================================

const pages = document.querySelectorAll(".page");

const nextBtns = document.querySelectorAll(".nextBtn");

const prevBtns = document.querySelectorAll(".prevBtn");

let currentPage = 0;

function showPage(page){

    pages.forEach(p=>{

        p.classList.remove("active");

    });

    pages[page].classList.add("active");

    currentPage = page;

}

// Next Buttons

nextBtns.forEach(btn=>{

    btn.addEventListener("click",()=>{

        if(currentPage < pages.length-1){

            showPage(currentPage+1);

        }

    });

});

// Previous Buttons

prevBtns.forEach(btn=>{

    btn.addEventListener("click",()=>{

        if(currentPage>0){

            showPage(currentPage-1);

        }

    });

});

// Show First Page

showPage(0);

// ==========================================
// CAKE
// ==========================================
// ==========================================
// BIRTHDAY CAKE
// ==========================================

const candle = document.querySelector(".candle");
const flame = document.querySelector(".flame");
const cakeNext = document.getElementById("cakeNext");

// Disable Continue button initially
cakeNext.disabled = true;
cakeNext.style.opacity = "0.5";
cakeNext.style.cursor = "not-allowed";

let candleBlown = false;

candle.addEventListener("click", () => {

    if (candleBlown) return;

    candleBlown = true;

    // Blow out the flame
    flame.style.transition = "0.5s";
    flame.style.opacity = "0";
    flame.style.transform = "translateX(-50%) scale(0)";

    // Enable Continue button
    cakeNext.disabled = false;
    cakeNext.style.opacity = "1";
    cakeNext.style.cursor = "pointer";

});

// ==========================================
// FINISH BUTTON
// ==========================================

const finishBtn = document.getElementById("finishBtn");

const celebrationScreen=document.getElementById("celebrationScreen");

finishBtn.addEventListener("click",()=>{

    bookSection.style.display="none";

    celebrationScreen.style.display="flex";

    startConfetti();

});

// ==========================================
// FOREVER BUTTON
// ==========================================

const foreverBtn=document.getElementById("foreverBtn");

const foreverScreen=document.getElementById("foreverScreen");

foreverBtn.addEventListener("click",()=>{

    celebrationScreen.style.display="none";

    foreverScreen.style.display="flex";

});

// ==========================================
// REPLAY
// ==========================================

const restartBtn=document.getElementById("restartBtn");

restartBtn.addEventListener("click",()=>{

    location.reload();

});

// ==========================================
// CONFETTI
// ==========================================

function startConfetti(){

    const duration=5000;

    const end=Date.now()+duration;

    (function frame(){

        confetti({

            particleCount:8,

            angle:60,

            spread:70,

            origin:{x:0}

        });

        confetti({

            particleCount:8,

            angle:120,

            spread:70,

            origin:{x:1}

        });

        if(Date.now()<end){

            requestAnimationFrame(frame);

        }

    })();

}
