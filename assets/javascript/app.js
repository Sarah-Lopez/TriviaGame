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
  question: "What state is the Boston Terrier the official dog of?",
  answers: ["Texas", "Massachusetts", "New York", "Washington"],
  correctAnswer: "Massachusetts",
  image: "assets/images/daisy.jpg",
  caption: "Brynn Finnimore-Ladd - Daisy"
}, {
  question: "What year was the breed recognized by the AKC?",
  answers: ["1933", "2016", "1771", "1893"],
  correctAnswer: "1893",
  image: "assets/images/basil.jpg",
  caption: "Gerri Gallup - Basil"
}, {
  question: "What is the Boston Terrier's official nicname?",
  answers: ["American gentleman", "Pug's cousin", "Tuxedo dog", "Penguin dog"],
  correctAnswer: "American gentleman",
  image: "assets/images/cheerioVicky.jpg",
  caption: "Sarah Lopez - Miss Vicky"
}, {
  question: "Which group do Boston Terriers belong to?",
  answers: ["Toy", "Terrier", "Non-sporting", "Herding"],
  correctAnswer: "Non-sporting",
  image: "assets/images/lilo.jpg",
  caption: "Jennifer Johnson Deoliveira - Lilo"
}, {
  question: "Which of the following is the most commonly reported biological feature of Boston Terriers?",
  answers: ["Excellent sight", "Flatulence", "Long tail", "Large size"],
  correctAnswer: "Flatulence",
  image: "assets/images/brutus.jpg",
  caption: "Brynn Finnimore-Ladd - Brutus"
}, {
  question: "What were Boston Terriers originally bred for?",
  answers: ["Fighting", "Ostrich hunting", "Companionship", "Lap warming"],
  correctAnswer: "Fighting",
  image: "assets/images/hugo.jpg",
  caption: "Brannon Dagilas - Hugo"
},
{
  question: "True or false: The Boston terrier was the first official breed created in the United States.",
  answers: ["True", "False"],
  correctAnswer: "True",
  image: "assets/images/sweetie.jpg",
  caption: "Lea Martin - Sweetie"
},
{
  question: "Which American president had two Boston Terriers named Fleck and Spot?",
  answers: ["Herbert Hoover", "John F. Kennedy", "William Howard Taft", "Gerald Ford"],
  correctAnswer: "Gerald Ford",
  image: "assets/images/liloPup1.jpg",
  caption: "Jennifer Johnson Deoliveira - Zeus"
}];

// Variable to hold our setInterval
var timer;

var game = {
  questions: questions,
  currentQuestion: 0,
  counter: countStartNumber,
  correct: 0,
  incorrect: 0,
  
  countdown: function () {
    game.counter--;
    $("#counter-number").text(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.timeUp();
    }
  },
  
  loadQuestion: function () {
    timer = setInterval(game.countdown, 1000);
    card.html("<h3>" + questions[this.currentQuestion].question + "</h3>");
    
    for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
      card.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
      + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
    }
  },
  
  nextQuestion: function () {
    game.counter = countStartNumber;
    $("#counter-number").text(game.counter);
    game.currentQuestion++;
    game.loadQuestion();
  },
  
  timeUp: function () {
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
  
  results: function () {
    clearInterval(timer);
    card.html("<h2>All done, heres how you did!</h2>");
    $("#counter-number").text(game.counter);
    
    card.append("<h3>Correct Answers: " + game.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
    card.append("<h3>Unanswered: " + (questions.length - (game.incorrect + game.correct)) + "</h3>");
    card.append("<br><button id='start-over'>Start Over?</button>");
  },
  
  clicked: function (e) {
    clearInterval(timer);
    if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
      this.answeredCorrectly();
    }
    else {
      this.answeredIncorrectly();
    }
  },
  
  answeredIncorrectly: function () {
    game.incorrect++;
    clearInterval(timer);
    card.html("<h2>Nope!</h2>");
    card.append("<h3>The Correct Answer was: " + questions[game.currentQuestion].correctAnswer + "</h3>");
    card.append("<img src='" + questions[game.currentQuestion].image + "' />");
    card.append("<p> Photo by " + questions[game.currentQuestion].caption + "</p>");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1500);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1500);
    }
  },
  
  answeredCorrectly: function () {
    clearInterval(timer);
    game.correct++;
    card.html("<h2>Correct!</h2>");
    card.append("<img src='" + questions[game.currentQuestion].image + "' />");
    card.append("<p> Photo by " + questions[game.currentQuestion].caption + "</p>");
    
    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1500);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1500);
    }
  },
  
  reset: function () {
    this.currentQuestion = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};

// CLICK EVENTS

$(document).on("click", "#start-over", function () {
  game.reset();
});

$(document).on("click", ".answer-button", function (e) {
  game.clicked(e);
});

$(document).on("click", "#start", function () {
  $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
  game.loadQuestion();
});
