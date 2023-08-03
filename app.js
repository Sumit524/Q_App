const questions = [
    {
      'que': 'Which of the following is a markup language?',
      'a': 'HTML',
      'b': 'CSS',
      'c': 'Java',
      'd': 'Node.js',
    'correct': 'a'
  
  
    },
    {
      'que': 'Which of the following stands for Cascading style sheet?',
      'a': 'HTML',
      'b': 'CSS',
      'c': 'Python',
      'd': 'Node.js',
      'correct': 'b'
    },
    {
      'que': 'What is an array?',
      'a': 'A programming language',
      'b': 'Identifier in c++ language',
      'c': 'A collection of similar types of data',
      'd': 'Web developing tool for frontend',
      'correct': 'c'
    }
  ];
  



  const resetQuiz = function () { // Use a function expression instead of a function declaration
    optionInputs.forEach((input) => {
      input.checked = false;
    });
  };

  const endQuiz = () => {
    const boxElement = document.getElementById("box");
    const resultMessage = `<h5 class='yellow-text'>!! Thank You !!</h5><h3 class='result-message'>${right}/${total} are correct</h3>`;
    boxElement.innerHTML = resultMessage;
  };


  let index = 0;
  let total = questions.length;
  let right = 0;
  let wrong = 0;
  const quesbox = document.getElementById("quesbox");
  const optionInputs = document.querySelectorAll('input[type="radio"]');  
  let initialContent = document.getElementById("box").innerHTML;
  const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
      }
    resetQuiz(); 
    const data = questions[index];
    quesbox.innerText = data.que;
    document.getElementById("Option 1").nextSibling.textContent = data.a;
    document.getElementById("Option 2").nextSibling.textContent = data.b;
    document.getElementById("Option 3").nextSibling.textContent = data.c;
    document.getElementById("Option 4").nextSibling.textContent = data.d;
  };
  

  loadQuestion();
  
  const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if (ans === data.correct) {
      right++;
    } else {
      wrong++;
    }
    index++;
    loadQuestion();
    return;
  };
  
  const getAnswer = () => {
    let selectedAnswer = null;
  
    optionInputs.forEach((input) => {
      if (input.checked) {
        selectedAnswer = input.value; 
      }
    });
  
    return selectedAnswer;
  }

