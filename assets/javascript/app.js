$('.start').on('click', function(){
    $('#start').remove();
        for (var i=0; i<questions.length; i++){
            $('#subwrapper').append('<h2>' + questions[i].questions + '</h2');

}


});

//create start button
//make a timer
//display score

let questions = [
      { answer: 'b',
        question: 'What were Boston terriers originally bred for?',
        options: ['Hunting', 'Fighting', 'Snoring', 'Herding']
      },
      { answer: 'c',
        question: 'Which group do Boston terriers belong to?',
        options: ['Toy', 'Sporting', 'Nonsporting']
      },
      { answer: 'a',
        'question': 'Boston terriers are the state dog for which state??',
        'options': ['Massachusetts', 'India', 'Hawaii']
      },
      { answer: 'true',
        'question': 'True or false? Boston terriers were the first official breed created in the US.',
        'options': ['True', 'False']
      },
      { answer: 'super true',
        'question': 'True or false? Boston terriers are the best dogs.',
        'options': ['True', 'False', 'Super True']
      },
    ]
    
    for (let y = 0; y < questions.length; y++){
        let options = questions[y].options;
        for (let i = 0; i < options.length;i++){
            let radioInput = $('<input>').text(options[i]);

            radioInput.attr('type', 'radio');
            radioInput.attr('value', options[i]);
            radioInput.attr('name', "questions-"+ y)
            radioInput.val(options[i]);
            let label = $('<label>').text(options[i])

            $('#options-' + y).append(radioInput);
            $('#options-' + y).append(label)
        }
    }    

    $('.answer').on('click', function(){
        console.log($(this).attr('id'));
    })

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <=0){
            console.log("Time is uo!");
            game.done();
        }
    }
};

