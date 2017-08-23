<!--
    var myQuestions = [
    	{
    		question: "1. Which of the following is NOT a reason why we shouldn't buy bottled water?",
    		answers: {
          a: "It comes packaged in petroleum.",
          b: "It generates waste.",
          c: "It decreases corporate control of the water market.",
          d: "It arrives by truck."
    		},
    		correctAnswer: 'c'
    	},
    	{
    		question: "2. What percentage of the plastic produced in the the United States is recycled?",
    		answers: {
    			a: '10%',
    			b: '25%',
    			c: '40%',
          d: '55%'
    		},
    		correctAnswer: 'b'
    	},
      {
        question: "3. How much does tap water cost the public per gallon?",
        answers: {
          a: "$0.01",
          b: "$0.25",
          c: "$1.00",
          d: "$2.50"
        },
        correctAnswer: 'a'
      },
      {
        question: "4. How many bottles do we throw away every year?",
        answers: {
          a: "5 million",
          b: "50 million",
          c: "5 billion",
          d: "50 billion"
        },
        correctAnswer: 'd'
      },
      {
        question: "5. If we recycled every single plastic bottle that we used, how many gallons of oil would we save?",
        answers: {
          a: "1 million",
          b: "1 billion",
          c: "10 million",
          d: "10 billion"
        },
        correctAnswer: 'b'
      },
      {
        question: "6. How much plastic debris do we have floating around in our oceans today?",
        answers: {
          a: "10 tons",
          b: "50 tons",
          c: "100 million tons",
          d: "500 milion tons"
        },
        correctAnswer: 'c'
      },
      {
        question: "7. All in all, should you keep drinking from plastic bottles?",
        answers: {
          a: "Yes",
          b: "No"
        },
        correctAnswer: 'b'
      }

    ];

    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');
    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){


    function showQuestions(questions, quizContainer){
          // // we'll need a place to store the output and the answer choices
      	var output = [];
      	var answers;

      	// for each question...
      	for(var i=0; i<questions.length; i++){

      		// first reset the list of answers
      		answers = [];

      		// for each available answer to this question...
      		for(letter in questions[i].answers){

      			// ...add an html radio button
      			answers.push(
      				'<label>'
      					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
      					+ letter + ') '
      					+ questions[i].answers[letter]
      				+ '</label>'
      			);
      		}

      		// add this question and its answers to the output
      		output.push(
      			'<div class="question">' + questions[i].question + '</div>'
      			+ '<div class="answers">' + answers.join('') + '</div>'
      		);
      	}

      	// finally combine our output list into one string of html and put it on the page
      	quizContainer.innerHTML = output.join('');

      }

    function showResults(questions, quizContainer, resultsContainer){
      var answerContainers = quizContainer.querySelectorAll('.answers');

    	// keep track of user's answers
    	var userAnswer = '';
    	var numCorrect = 0;

    	// for each question...
    	for(var i=0; i<questions.length; i++){

    		// find selected answer
    		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

    		// if answer is correct
    		if(userAnswer===questions[i].correctAnswer){
    			// add to the number of correct answers
    			numCorrect++;

    			// color the answers green
    			answerContainers[i].style.color = 'lightgreen';
    		}
    		// if answer is wrong or blank
    		else{
    			// color the answers red
    			answerContainers[i].style.color = 'red';
    		}
    	}

    	// show number of correct answers out of total
    	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show the questions
    showQuestions(questions, quizContainer);

    // when user clicks submit, show results
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
      }
    }
-->
