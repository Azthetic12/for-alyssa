// PASSCODE
const passcode = document.getElementById("passcode");
const enterBtn = document.getElementById("enterBtn");
const wrongPassword = document.getElementById("wrongPassword");

// PAGES
const passcodePage = document.getElementById("passcodePage");
const welcomePage = document.getElementById("welcomePage");
const flowerPage = document.getElementById("flowerPage");
const bloomPage = document.getElementById("bloomPage");
const questionPage = document.getElementById("questionPage");
const envelopePage = document.getElementById("envelopePage");
const letterPage = document.getElementById("letterPage");

// BUTTONS
const nextBtn = document.getElementById("nextBtn");
const continueBtn = document.getElementById("continueBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// IMAGES
const lily = document.getElementById("lily");
const envelope = document.getElementById("envelope");

// MUSIC
const bgMusic = document.getElementById("bgMusic");

// CORRECT PASSCODE
const correctPasscode = "071216";

// ==========================
// PASSCODE FUNCTION
// ==========================

enterBtn.addEventListener("click", function () {

    if (passcode.value === correctPasscode) {

        // Hide passcode page
        passcodePage.style.display = "none";

        // Show welcome page
        welcomePage.style.display = "flex";

        // Hide wrong password message
        wrongPassword.style.display = "none";

        // Play music
        bgMusic.play();

    }

    else {

        // Wrong password
        wrongPassword.style.display = "block";

        // Clear input
        passcode.value = "";

    }

});


// Press Enter on keyboard
passcode.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        enterBtn.click();

    }

});

// ==========================
// WELCOME PAGE
// ==========================

nextBtn.addEventListener("click", function () {

    // Hide Welcome Page
    welcomePage.style.display = "none";

    // Show Flower Page
    flowerPage.style.display = "flex";

});

// ==========================
// LILY BLOOM
// ==========================

lily.addEventListener("click", function () {

    // Change image
    lily.src = "images/lily-open.png";

    // Small delay before next page
    setTimeout(function () {

        flowerPage.style.display = "none";
        bloomPage.style.display = "flex";

    }, 2000);

});

// ==========================
// CONTINUE BUTTON
// ==========================

continueBtn.addEventListener("click", function () {

    // Hide Bloom Page
    bloomPage.style.display = "none";

    // Show Question Page
    questionPage.style.display = "flex";

});

// ==========================
// YES / NO QUESTION
// ==========================

// YES
yesBtn.addEventListener("click", function () {

    // Hide Question Page
    questionPage.style.display = "none";

    // Show Envelope Page
    envelopePage.style.display = "flex";

});


// NO
noBtn.addEventListener("click", function () {

    alert("TRY AGAIN");

});

// ==========================
// ENVELOPE
// ==========================

envelope.addEventListener("click", function () {

    // Hide Envelope Page
    envelopePage.style.display = "none";

    // Show Letter Page
    letterPage.style.display = "flex";

});

// ==========================
// LETTER
// ==========================

const letter = document.getElementById("letter");

letter.innerHTML = `
<p>
She was like a shot of espresso, leaving warmth on the tongue and a little electricity beneath the skin. There was something wonderfully untamed about her, like the ocean refusing to be held by the shore, beautiful not because it was calm, but because it never pretended to be. She carried both sunshine and thunderstorms within her, the kind of girl who could be soft as a Sunday afternoon and fierce as the wind before a storm. I imagined her as a city with its lights still on at three in the morning, full of hidden streets, open windows, and stories that never made it into the postcards. There was no single color that could contain her, no familiar melody that could explain her entirely. She was a little bit of everything, and somehow, never too much of anything.
</p>

<br>

<p>
And perhaps what I find most beautiful about you is that you remind me how a person can feel like both an escape and a destination. You are the open road beneath a lavender sky, the first page of a book I already know I will miss when it ends, the kind of unexpected that makes life feel less like something to get through and more like something to experience. I cannot promise to understand every season of you, nor do I think I need to. Even the moon has phases, and nobody asks it to remain full to deserve the night sky. So be restless when your heart needs movement, be quiet when the world becomes too loud, and let yourself change without feeling guilty for becoming someone new. I hope you never mistake your changing colors for a lack of beauty. Some things were never meant to be understood at first glance; some things ask to be witnessed slowly. And you, darling, are not a moment I want to figure out. You are a whole universe I would gladly spend my lifetime learning to look at.
</p>

<br>

<h2 style="text-align:center;">
I love having you in my life.
</h2>
`;