$(document).ready(function () {

    // document.getElementById("question").style.display = "none";
    // document.getElementsByClassName("answers").style.display = "none";
    // document.getElementById("submit").style.display = "none";


    var questionsLibrary = [
        {
        question: "Which of these celebrities was a bouncer when he was young?",
        choices: ["Steven Seagal", "Woody Allen", "The Rock", "Pope Francis"],
        validAnswer: 3
        },
    {
        question: "Which of the following is censored in China?",
        choices: ["Woody Allen movies", "Time travels movies", "Western movies", "Christmas cheesy movies"],
        validAnswer: 1
    },
    {
        question: "Which information about the Inuits is true?",
        choices: ["They use refrigerators despite the cold", "They put ice cubs in their cocktails despite the cold ", "They have AC despite the cold", "They love ice cream despite the cold"],
        validAnswer: 0
    },
    {
        question: "The 1958 Olympics in Mexico had a very high number of records. Why is that?",
        choices: ["Cocaine was very easy to get and very cheap ", "Mexico being at high altitude, the athletes didn’t feel gravity as much", "it was the first time athletes had access to professional equipment", "president Gustavo Ordaz faked the results"],
        validAnswer: 1
    }, {
        question: "Who designed the Chupa Chups logo?",
        choices: ["Pablo Picasso", "Salvador Dali", "Andy Warhol", "Salvatore Chupa, inventor of the brand"],
        validAnswer: 1
    }, {
        question: "What did Barack Obama request before leaving the white house?",
        choices: ["To get the file about aliens so Trump could never see it", "Getting his face painted by Hollywood artists to go in the street incognito", "To get the season of Game of Thrones before its release", "Get custom-made Jordans"],
        validAnswer: 2
    }, {
        question: "Which of the following is true?",
        choices: ["The man who does Bugs Bunny’s voice is allergic to carrots", "The man who does Popeye’s voice is allergic to spinach", " The man who does Mickey Mouse’s voice is afraid of mice", "The man who does GPS’s voice doesn’t have his driving license"],
        validAnswer: 0
    }, {
        question: "Only one of the following deaths didn’t happen. Which one?",
        choices: ["An Italian butcher got eaten by its pig which he thought to be dead", "A Danish man died of laughter in watching A Fish Called Wanda ", "A jokey died on his horse but still won the race", "An American man shot himself by mistaking his gun for a phone"],
        validAnswer: 0
    }
    ];

    $("#start").on('click', function(){
    document.getElementById("start").style.display = "none";
    document.getElementById("submit").style.display = "block";
    displayQuestions();   
    })
    
    function displayQuestions(){
    var i;
    var j;   
     
    for (i=0; i < questionsLibrary.length; i++){
    $("#question").text(questionsLibrary[i].question); 
    console.log(questionsLibrary[i].question);
    
    let choicesArr = questionsLibrary[i].choices;
    for (j=0; j < choicesArr.length; j++){
    $("#answer1").text(choicesArr[0]);
    $("#answer2").text(choicesArr[1]);
    $("#answer3").text(choicesArr[2]);
    $("#answer4").text(choicesArr[3]);
    console.log (choicesArr[j]);  
    }
    }
   }
    //click on submit => style buttons to show right answer (compare the choice with the right answer)=> click next question button => display j++ with matching answers
    $("#submit").on('click', function(){
    //var to hold what the user clicked on
    //check if the button that was clicked matches with the right answer
    //booleans? if true: put text in green; if false: put text in red + right answer in green
    //win: if j=questionsLibrary[i].validAnswer => lose if j#questionsLibrary[i].validAnsw  
        })

     $("#nextQuestion").on('click', function(){
    //display question j++ with answers
    })
})