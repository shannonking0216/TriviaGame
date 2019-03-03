window.onload = function () {
    $("#start").on("click", start);
};

var intervalId;
var clockRunning = false;
var time = 0;

function start() {

    if (!clockRunning) {
        intervalId = setInterval(onload, 1000);
        clockRunning = true;
    }
}
function stop() {
    clearInterval(intervalId);
    clockRunning = false;
}

var myQuestions = [
    {
        question: "This Hawaiian pro surfer had her entire arm bitten off by a Tiger shark in 2003. She surfs competitively on the World Surf League Tour to this day.",
        answers: {
            a: "Malia Manuel",
            b: "Bethany Hamilton",
            c: "Rochelle Ballard",
            d: "Coco Ho"
        },
        correctAnswer: "b: Bethany Hamilton"
    },
    {
        question: "This famous surf break in Bali, Indonesia is especially popular with Australians. It was on the World Surf League tour for the first time in 2018.",
        answers: {
            a: "Uluwatu",
            b: "J-Bay",
            c: "Pekat",
            d: "Mentawais"
        },
        correctAnswer: "a: Uluwatu"
    },
    {
        question: "This American surfer has won the most World Surf League titles of anyone in history.",
        answers: {
            a: "Gerry Lopez",
            b: "Laird Hamilton",
            c: "Kelly Slater",
            d: "Tom Curren"
        },
        correctAnswer: "c: Kelly Slater"
    },
    {
        question: "Where did Jack O'neil invent the first modern wetsuit?",
        answers: {
            a: "Huntington Beach",
            b: "Malibu",
            c: "Santa Cruz",
            d: "San Francisco"
        },
        correctAnswer: "d: San Francisco"
    },
    {
        question: "At which surf spot, on the island of Maui, did Laird Hamilton first decide to have his friend tow him behind a jet ski to be able to ride waves that were previously off-limits? ",
        answers: {
            a: "Jaws",
            b: "Pipeline",
            c: "Sunset Beach",
            d: "Waimea Bay"
        },
        correctAnswer: "a: Jaws"
    },
];

