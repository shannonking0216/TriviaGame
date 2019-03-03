

var countdown = 10;
var intervalId;

window.onload = function () {
    $("#start").on("click", start);
    start();
};

var clockRunning = false;
var time = 0;

var quizQuestions = {
    questions: {
        items: ["This Hawaiian pro surfer had her entire arm bitten off by a Tiger shark in 2003. She surfs competitively on the World Surf League Tour to this day.<br><br>a: Malia Manuel<br>b: Bethany Hamilton<br>c: Rochelle Ballard<br>d: Coco Ho<br><br>",
            "This famous surf break in Bali, Indonesia is especially popular with Australians. It was on the World Surf League tour for the first time in 2018.<br><br>a: Uluwatu<br>b: J-Bay<br>c: Pekat<br>d: Mentawais<br><br>",
            "This American surfer has won the most World Surf League titles of anyone in history.<br><br>a: Gerry Lopez<br>b: Laird Hamilton<br>c: Kelly Slater<br>d: Tom Curren<br><br>",
            "Where did Jack O'neil invent the first modern wetsuit?<br><br>a: Huntington Beach<br>b: Malibu<br>c: Santa Cruz<br>d: San Francisco<br><br>",
            "At which surf spot, on the island of Maui, did Laird Hamilton first decide to have his friend tow him behind a jet ski to be able to ride waves that were previously off-limits?<br><br>a: Jaws<br>b: Pipeline<br>c: Sunset Beach<br>d: Waimea Bay<br><br>"]
    }
};

var quizAnswers = {
    answers: {
        items: ["This Hawaiian pro surfer had her entire arm bitten off by a Tiger shark in 2003. She surfs competitively on the World Surf League Tour to this day.<br><br>b: Bethany Hamilton<br>",
            "This famous surf break in Bali, Indonesia is especially popular with Australians. It was on the World Surf League tour for the first time in 2018.<br><br>a: Uluwatu<br>",
            "This American surfer has won the most World Surf League titles of anyone in history.<br><br>c: Kelly Slater<br>",
            "Where did Jack O'neil invent the first modern wetsuit?<br><br>d: San Francisco<br>",
            "At which surf spot, on the island of Maui, did Laird Hamilton first decide to have his friend tow him behind a jet ski to be able to ride waves that were previously off-limits?<br><br>a: Jaws<br>"],
    }
};



function start() {
    if (!clockRunning) {
        clearInterval(intervalId);
        intervalId = setInterval(onload, (1000 * 90));
        clockRunning = true;
        var quizDiv = $("#quiz-options");
        for (var i = 0; i < quizQuestions.questions.items.length; i++) {
            var newQuestionDiv = $("<div>" + quizQuestions.questions.items[i] + "<div>");
            quizDiv.append(newQuestionDiv);
            var btnABCD = $("#btn-group btn-group-md").append(btnABCD);
        }
    }
        
function stop() {
            clearInterval(intervalId);
            clockRunning = false;
            var correctDiv = $("#correct-options");
            for (var i = 0; i < quizAnswers.answers.items.length; i++) {
                var newAnswerDiv = $("<div>" + quizAnswers.answers.items[i] + "<div>");
                correctDiv.append(newAnswerDiv);
            }
        }
    };     