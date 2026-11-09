const magicBall = document.getElementById("magicBall");
const answer = document.getElementById("answer");
const instruction = document.getElementById("instruction");

const answers = [
    // Positive
    "Oo naman, beh!",
    "Go na, mars!",
    "Manifesting yarn!",
    "Dasurv mo yan!",
    "Sana all, ikaw na!",
    "Push mo yan!",
    "May chance, lods!",

    // Negative
    "Wag na, beh.",
    "Ekis ka dyan!",
    "Ayaw ng universe.",
    "Tama na, teh.",
    "Move on na tayo.",
    "Walang pag-asa, mars.",
    "Delulu ka na naman!",

    // Sarcastic
    "Ikaw na bahala, pagod na ako.",
    "Ako pa talaga tatanungin mo?",
    "Obvious naman, beh.",
    "Dasal lang ang katapat.",
    "Bahala na si Batman.",
    "Nasa Diyos ang awa.",
    "Good luck na lang talaga.",
    "Kaya mo yan, sabi nila.",
    "Wala akong pake, beh.",

    // Love life
    "May iba na yan.",
    "Seen ka na naman.",
    "Hindi ka niya miss.",
    "Chat mo na, marupok!",
    "Move on, hindi na babalik.",
    "May jowa na yan, beh.",
    "Ikaw lang ang umaasa.",

    // Random memes
    "Edi wow!",
    "Sana all may plot twist.",
    "Bawal ang weak ngayon.",
    "Skill issue, lods.",
    "Walang ambag ang universe.",
    "Naurrr!",
    "HAHAHAHA, good luck!",
    "Hindi ko na kaya, beh."
];

magicBall.addEventListener("click", function() {

    magicBall.classList.remove("shake");

    void magicBall.offsetWidth;

    magicBall.classList.add("shake");

    answer.textContent = "...";
    instruction.textContent = "The Magic 8 Ball is thinking...";

    setTimeout(function() {

        const randomIndex = Math.floor(Math.random() * answers.length);

        answer.textContent = answers[randomIndex];

        instruction.textContent = "Tap again to ask another question.";

        magicBall.classList.remove("shake");

    }, 600);

});