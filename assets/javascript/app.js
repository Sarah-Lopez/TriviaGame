// $('.start').on('click', function(){
//     $('#start').remove();
//         for (var i=0; i<questions.length; i++){
//             $('#subwrapper').append('<h2>' + questions[i].questions + '</h2');

// }


// }); 

// //create start button
// //make a timer
// //display score

// let questions = [
//       { answer: '1',
//         question: 'What were Boston terriers originally bred for?',
//         options: ['Hunting', 'Fighting', 'Snoring', 'Herding']
//       },
//       { answer: '1',
//         question: 'Which group do Boston terriers belong to?',
//         options: ['Toy', 'Sporting', 'Nonsporting']
//       },
//       { answer: '0',
//         'question': 'Boston terriers are the state dog for which state??',
//         'options': ['Massachusetts', 'India', 'Hawaii']
//       },
//       { answer: '0',
//         'question': 'True or false? Boston terriers were the first official breed created in the US.',
//         'options': ['True', 'False']
//       },
//       { answer: '2',
//         'question': 'True or false? Boston terriers are the best dogs.',
//         'options': ['True', 'False', 'Super True']
//       },
//     ]
    
//     for (let y = 0; y < questions.length; y++){
//         let options = questions[y].options;
//         for (let i = 0; i < options.length;i++){
//             let radioInput = $('<input>').text(options[i]);

//             radioInput.attr('type', 'radio');
//             radioInput.attr('value', options[i]);
//             radioInput.attr('name', "questions-"+ y)
//             radioInput.val(options[i]);
//             let label = $('<label>').text(options[i])

//             $('#options-' + y).append(radioInput);
//             $('#options-' + y).append(label)
//         }
//     }    

//     $('.answer').on('click', function(){
//         console.log($(this).attr('id'));
//     })

// var game = {
//     correct: 0,
//     incorrect: 0,
//     counter: 120,
//     countdown: function(){
//         game.counter--;
//         $('#counter').html(game.counter);
//         if (game.counter <=0){
//             console.log("Time is up!");
//             game.done();
//         }
//     }
// };

// //capture user answers, determine if answered, 
// //empty out questions, calc score, display score
// $(document).on('click', "#submit", function(){
//   console.log("Clicked");
//   var addup = $("#questionWrapper").children("input:checked");
//   console.log(addup);
// });

var card = $("#quiz-area");
var countStartNumber = 30;

// Question set
var questions = [{
  question: "Where does the Boston Terrier breed originate from?",
  answers: ["Texas", "Massachusetts", "New York", "Washington"],
  correctAnswer: "Massachusetts",
  image: "assets/images/bostonUniversity.png"
}, {
  question: "What year was the breed recognized by the AKC?",
  answers: ["1933", "2016", "1771", "1893"],
  correctAnswer: "1893",
  image: "assets/images/vintageBt.jpg"
}, {
  question: "What is the Boston Terrier's official nicname?",
  answers: ["American gentleman", "Pug's cousin", "Tuxedo dog", "Penguin dog"],
  correctAnswer: "American gentleman",
  image: "assets/images/dapperBoston.jpg"
}, {
  question: "Which group do Boston Terriers belong to?",
  answers: ["Toy", "Hound", "Non-sporting", "Herding"],
  correctAnswer: "Non-sporting",
  image: "assets/images/btNonsporting.jpg"
}, {
  question: "Which of the following is the most commonly reported biological feature of Boston Terriers?",
  answers: ["Excellent sight", "Flatulence", "Long tail", "Large size"],
  correctAnswer: "Flatulence",
  image: "assets/images/bostonToot.jpg"
}];

// Variable to hold our setInterval
var timer;

var game = {

  questions: questions,
  currentQuestion: 0,
  counter: countStartNumber,
  correct: 0,
  incorrect: 0,

  countdown: function() {
    game.counter--;
    $("#counter-number").text(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.timeUp();
    }
  },

  loadQuestion: function() {

    timer = setInterval(game.countdown, 1000);

    card.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

    for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
      card.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
      + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
    }
  },

  nextQuestion: function() {
    game.counter = countStartNumber;
    $("#counter-number").text(game.counter);
    game.currentQuestion++;
    game.loadQuestion();
  },

  timeUp: function() {

    clearInterval(timer);

    $("#counter-number").html(game.counter);

    card.html("<h2>Out of Time!</h2>");
    card.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
    card.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  results: function() {

    clearInterval(timer);

    card.html("<h2>All done, heres how you did!</h2>");

    $("#counter-number").text(game.counter);

    card.append("<h3>Correct Answers: " + game.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
    card.append("<h3>Unanswered: " + (questions.length - (game.incorrect + game.correct)) + "</h3>");
    card.append("<br><button id='start-over'>Start Over?</button>");
  },

  clicked: function(e) {
    clearInterval(timer);
    if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
      this.answeredCorrectly();
    }
    else {
      this.answeredIncorrectly();
    }
  },

  answeredIncorrectly: function() {

    game.incorrect++;

    clearInterval(timer);

    card.html("<h2>Nope!</h2>");
    card.append("<h3>The Correct Answer was: " + questions[game.currentQuestion].correctAnswer + "</h3>");
    card.append("<img src='" + questions[game.currentQuestion].image + "' />");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  answeredCorrectly: function() {

    clearInterval(timer);

    game.correct++;

    card.html("<h2>Correct!</h2>");
    card.append("<img src='" + questions[game.currentQuestion].image + "' />");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  reset: function() {
    this.currentQuestion = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};

// CLICK EVENTS

$(document).on("click", "#start-over", function() {
  game.reset();
});

$(document).on("click", ".answer-button", function(e) {
  game.clicked(e);
});

$(document).on("click", "#start", function() {
  $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
  game.loadQuestion();
});
