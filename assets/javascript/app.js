$(document).ready(function() {
  var questionsLibrary = [
    {
      question: "Which of these celebrities was a bouncer when he was young?",
      choices: ["Steven Seagal", "Prince", "The Rock", "Pope Francis"],
      validAnswer: 3
    },
    {
      question: "Which of the following is censored in China?",
      choices: [
        "Woody Allen movies",
        "Time travel movies",
        "Western movies",
        "Cheesy Christmas movies"
      ],
      validAnswer: 1
    },
    {
      question: "Which statement about Inuits is true?",
      choices: [
        "They use refrigerators despite the cold",
        "They put ice cubes in their cocktails despite the cold ",
        "They have AC despite the cold",
        "They love ice cream despite the cold"
      ],
      validAnswer: 0
    },
    {
      question:
        "The 1958 Olympics in Mexico had a very high number of records set. Why is that?",
      choices: [
        "Cocaine was very easy to get and very cheap ",
        "Being at high altitude, the athletes benefited from less air resistance",
        "It was the first time athletes had access to professional equipment",
        "President Gustavo Ordaz faked the results"
      ],
      validAnswer: 1
    },
    {
      question: "Who designed the Chupa Chups logo?",
      choices: [
        "Pablo Picasso",
        "Salvador Dali",
        "Andy Warhol",
        "Salvatore Chupa, inventor of the brand"
      ],
      validAnswer: 1
    },
    {
      question: "What did Barack Obama request before leaving the white house?",
      choices: [
        "To get the file about aliens so Trump could never see it",
        "Getting his face painted by Hollywood artists so he could leave incognito",
        "To get the season of Game of Thrones before its release",
        "Get custom-made Jordans"
      ],
      validAnswer: 2
    },
    {
      question: "Which of the following is true?",
      choices: [
        "The man who does Bugs Bunny’s voice is allergic to carrots",
        "The man who does Popeye’s voice is allergic to spinach",
        "The man who does Mickey Mouse’s voice is afraid of mice",
        "The man who does GPS’s voice doesn’t have his driving license"
      ],
      validAnswer: 0
    },
    {
      question: "Only one of the following deaths didn’t happen. Which one?",
      choices: [
        "An Italian butcher got eaten by a pig he thought was dead",
        "A Danish man died of laughter watching A Fish Called Wanda ",
        "A jokey died on his horse but still won his race",
        "An American man shot himself by mistaking his gun for a phone"
      ],
      validAnswer: 0
    }
  ];

  var currentQuestion = 0;
  var selectedAnswer = null;
  var score = 0;

  document.getElementById("nextQuestion").style.display = "none";
  $("input").css("display", "none");

  function reset() {
    var intervalId;
    var time = 15 * 1000;
    lap = 1;
    $("#display").text("00:15");
  }

  function startTimer() {
    var intervalId;
    var clockRunning = false;
    var time = 15 * 1000;
    var lap = 1;
    $("#display").text("00:15");
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }

    function count() {
      time -= 1000;
      var converted = timeConverter(time);
      console.log(converted);
      $("#display").text(converted);
    }

    function timeConverter(t) {
      var seconds = t / 1000;

      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      if (time === 0) {
        clearInterval(intervalId);
        clockRunning = false;
        time = 15000;
        timeOut();
      }
      return "00:" + seconds;
    }
  }

  $("#start").on("click", function() {
    document.getElementById("start").style.display = "none";
    document.getElementById("nextQuestion").style.display = "none";
    document.getElementById("score").style.display = "none";

    displayQuestions();
    startTimer();
  });

  $("#nextQuestion").on("click", function() {
    $(".choices").css("color", "black");
    currentQuestion++;
    displayQuestions();
    reset();
    startTimer();
  });

  function displayQuestions() {
    $("input").css("display", "block");
    document.getElementById("nextQuestion").style.display = "none";
    document.getElementById("score").style.display = "none";

    $("#question").text(questionsLibrary[currentQuestion].question);
    console.log(questionsLibrary[currentQuestion].question);
    let choicesArr = questionsLibrary[currentQuestion].choices;
    for (var j = 0; j < choicesArr.length; j++) {
      $("#answer1").text(" " + choicesArr[0]);
      $("#answer2").text(" " + choicesArr[1]);
      $("#answer3").text(" " + choicesArr[2]);
      $("#answer4").text(" " + choicesArr[3]);
      console.log(choicesArr[j]);
    }
  }

  $(".answers").on("click", function(event) {
    console.log(event.currentTarget.dataset.option);
    selectedAnswer = parseInt(event.currentTarget.dataset.option);
  });

  function timeOut() {
    //   $("#submit").on("click", function() {
    if (selectedAnswer === null) {
      return;
    }

    if (selectedAnswer === questionsLibrary[currentQuestion].validAnswer) {
      score++;
      console.log(score);
    } else {
      console.log("nope");
    }

    if (questionsLibrary[currentQuestion].validAnswer == 0) {
      $(".choices").css("color", "rgb(218, 57, 57)");
      $("#answer1").css("color", "rgb(52, 158, 52)");
    } else if (questionsLibrary[currentQuestion].validAnswer == 1) {
      $(".choices").css("color", "rgb(218, 57, 57)");
      $("#answer2").css("color", "rgb(52, 158, 52)");
    } else if (questionsLibrary[currentQuestion].validAnswer == 2) {
      $(".choices").css("color", "rgb(218, 57, 57)");
      $("#answer3").css("color", "rgb(52, 158, 52)");
    } else {
      $(".choices").css("color", "rgb(218, 57, 57)");
      $("#answer4").css("color", "rgb(52, 158, 52)");
    }
    var keepScore = currentQuestion + 1;
    $("#score").text("Your Score is: " + score + "/" + keepScore);
    document.getElementById("score").style.display = "block";
    document.getElementById("nextQuestion").style.display = "block";
  }
});
