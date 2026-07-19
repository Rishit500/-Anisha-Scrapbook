// ===============================
// Elements
// ===============================

const openBtn = document.getElementById("openGift");

const coverPage = document.getElementById("coverPage");

const giftSection = document.getElementById("giftSection");

const giftBox = document.querySelector(".gift-box");

const bookSection = document.getElementById("bookSection");

const bookCover = document.querySelector(".cover-front");

// ===============================
// Open Gift
// ===============================

openBtn.addEventListener("click", () => {

    // Fade Cover

    coverPage.style.transition = "0.8s";

    coverPage.style.opacity = "0";

    setTimeout(() => {

        coverPage.style.display = "none";

        giftSection.style.display = "flex";

    },800);


    // Open Gift

    setTimeout(() => {

        giftBox.classList.add("gift-open");

    },2200);


    // Show Book

    setTimeout(() => {

        giftSection.style.display="none";

        bookSection.style.display="flex";

    },3400);


    // Open Book

    setTimeout(() => {

        bookCover.style.transform="rotateY(-160deg)";

        startTyping();

    },3900);

});


// ===============================
// Typing Animation
// ===============================

const message =

`Dear Miss Clumsy ❤️,

Happy Birthday!

I made this little scrapbook especially for you.

Every page holds a small piece of my heart.

I hope this makes you smile today. ❤️

Love,
Rishit`;

let i = 0;

function startTyping(){

    const typing = document.getElementById("typingText");

    typing.innerHTML="";

    const interval = setInterval(()=>{

        typing.innerHTML += message.charAt(i);

        i++;

        if(i>=message.length){

            clearInterval(interval);

        }

    },40);

}
