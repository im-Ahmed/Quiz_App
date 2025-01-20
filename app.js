const questions = [
  {
    question: "What is the default value of a byte variable in Java?",
    options: [
      { text: "0.0", correct: false },
      { text: "0", correct: true },
      { text: "null", correct: false },
      { text: "1", correct: false },
    ],
  },
  {
    question: "Why is double preferred for calculations over float in Java?",
    options: [
      { text: "Faster calculations", correct: false },
      { text: "Greater precision", correct: true },
      { text: "Smaller size", correct: false },
      { text: "More compatibility with integers", correct: false },
    ],
  },
  {
    question:
      "In Java, which conditional statement allows checking multiple conditions simultaneously?",
    options: [
      { text: "if-else", correct: false },
      { text: "nested-if", correct: false },
      { text: "switch", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question:
      "What is the main benefit of using a switch statement over multiple if-else blocks?",
    options: [
      { text: "Easier to debug", correct: false },
      {
        text: "Better readability and performance for fixed values",
        correct: true,
      },
      { text: "Avoids break condition", correct: false },
      { text: "Supports boolean expressions", correct: false },
    ],
  },
  {
    question:
      "In which loop is the condition evaluated after the loop body executes?",
    options: [
      { text: "for loop", correct: false },
      { text: "while loop", correct: false },
      { text: "do-while loop", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question:
      "When is it appropriate to use a for loop instead of a while loop?",
    options: [
      { text: "When the number of iterations is unknown", correct: false },
      {
        text: "When the termination condition changes dynamically",
        correct: false,
      },
      {
        text: "When the number of iterations is fixed and known beforehand",
        correct: true,
      },
      { text: "For loops cannot be used dynamically", correct: false },
    ],
  },
  {
    question: "What is abstraction in OOP?",
    options: [
      {
        text: "Hiding implementation details and showing essential features",
        correct: true,
      },
      { text: "Storing multiple values in a single object", correct: false },
      { text: "Inheriting behavior from parent classes", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question:
      "Which OOP concept allows using the same operation with different meanings in derived classes?",
    options: [
      { text: "Encapsulation", correct: false },
      { text: "Abstraction", correct: false },
      { text: "Polymorphism", correct: true },
      { text: "Inheritance", correct: false },
    ],
  },
  {
    question: "Why are classes referred to as 'blueprints' in Java?",
    options: [
      { text: "They store object data at runtime", correct: false },
      {
        text: "They define the properties and behaviors of objects",
        correct: true,
      },
      { text: "They are mandatory to create objects", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "What determines the memory allocation for an object in Java?",
    options: [
      { text: "Constructor size", correct: false },
      { text: "Number of methods in the class", correct: false },
      { text: "Instance variables in the class", correct: true },
      { text: "Scope of the object", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT true about constructors?",
    options: [
      { text: "They have the same name as the class", correct: false },
      { text: "They can return a value explicitly", correct: true },
      { text: "They can be overloaded", correct: false },
      { text: "They are invoked automatically", correct: false },
    ],
  },
  {
    question: "Can a constructor be synchronized in Java?",
    options: [
      { text: "Yes", correct: false },
      { text: "No", correct: true },
      { text: "Only in multithreaded classes", correct: false },
      { text: "Only when it is static", correct: false },
    ],
  },
  {
    question:
      "Which concept in OOP allows a child class to access the properties of its parent?",
    options: [
      { text: "Aggregation", correct: false },
      { text: "Polymorphism", correct: false },
      { text: "Encapsulation", correct: false },
      { text: "Inheritance", correct: true },
    ],
  },
  {
    question:
      "What happens when a class inherits from a parent class with private members?",
    options: [
      {
        text: "The private members are inherited but inaccessible directly",
        correct: true,
      },
      { text: "The private members are not inherited", correct: false },
      { text: "The child class can access them by default", correct: false },
      { text: "Compilation error occurs", correct: false },
    ],
  },
  {
    question: "What is the primary advantage of runtime polymorphism?",
    options: [
      { text: "Faster code execution", correct: false },
      { text: "Simplified testing of methods", correct: false },
      { text: "Dynamic method binding", correct: true },
      { text: "Supports inheritance restrictions", correct: false },
    ],
  },
  {
    question:
      "Which method in a subclass must override its parent class's abstract method?",
    options: [
      { text: "Any method", correct: false },
      { text: "Final method", correct: false },
      { text: "Abstract method", correct: true },
      { text: "Synchronized method", correct: false },
    ],
  },
  {
    question: "What is the key feature of multilevel inheritance?",
    options: [
      {
        text: "It allows two classes to inherit from one parent",
        correct: false,
      },
      {
        text: "It creates a chain of inheritance from one base class",
        correct: true,
      },
      {
        text: "Only one child class inherits all parents simultaneously",
        correct: false,
      },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question:
      "In multilevel inheritance, if a superclass method is overridden in one class and reused, which method is executed?",
    options: [
      { text: "The parent’s original method", correct: false },
      { text: "The child class’s method", correct: true },
      { text: "The most recently defined method in the chain", correct: false },
      { text: "Compilation error occurs", correct: false },
    ],
  },
  {
    question: "In Java, the this keyword can be used to:",
    options: [
      { text: "Call the constructor of the parent class", correct: false },
      {
        text: "Access the current object's methods and variables",
        correct: true,
      },
      { text: "Change the memory location of an object", correct: false },
      { text: "Refer to a local variable explicitly", correct: false },
    ],
  },
  {
    question: "What is the restriction of using the this keyword?",
    options: [
      { text: "It cannot be used to reference variables", correct: false },
      { text: "It cannot be used in the main method", correct: false },
      { text: "It cannot be used inside a static context", correct: true },
      { text: "It cannot call non-final methods", correct: false },
    ],
  },
];

const quest = document.querySelector(".quest");
const nextBtn = document.querySelector(".next-btn");
const stBtn = document.querySelector(".start-btn");
const list = document.querySelector(".answer");
const starting = document.querySelector(".starting");
const card = document.querySelector(".card");
const heading = document.querySelector(".heading");
let index = 0;
let score = 0;
const startQuiz = () => {
  index = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
};
const showQuestion = () => {
  resetState();
  let currentquestion = questions[index];
  let questionNo = index + 1;
  quest.innerHTML = questionNo + ". " + currentquestion.question;

  currentquestion.options.forEach((option) => {
    let li = document.createElement("li");
    li.innerHTML = option.text;
    li.classList.add("opt");
    list.appendChild(li);
    if (option.correct) {
      li.dataset.correct = true;
    }

    li.addEventListener("click", selectAnswer);
  });
};

const resetState = () => {
  nextBtn.style.display = "none";
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};
const selectAnswer = (e) => {
  const selectedOption = e.target;
  const isCorrect = selectedOption.dataset.correct === "true";
  if (isCorrect) {
    selectedOption.classList.add("correct");
    score++;
  } else {
    selectedOption.classList.add("wrong");
  }
  Array.from(list.children).forEach((option) => {
    if (option.dataset.correct === "true") {
      option.classList.add("correct");
    }

    option.classList.add("disabled");
  });
  nextBtn.style.display = "block";
};
const showScore = () => {
  resetState();
  let scale = (questions.length / 100) * 60;
  if (score > scale) {
    quest.innerHTML = `You give ${score} correct answers out of ${questions.length} 👏`;
  } else {
    quest.innerHTML = `You give ${score} correct answers out of ${questions.length} ☹`;
  }
  nextBtn.style.display = "block";
  nextBtn.innerHTML = "PLay again";
  heading.innerHTML = "Result";
};
const handelNextButton = () => {
  index++;
  if (index < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
};
nextBtn.addEventListener("click", () => {
  if (index < questions.length) {
    handelNextButton();
  } else {
    startQuiz();

    heading.innerHTML = "Quiz Questions";
  }
});
stBtn.addEventListener("click", () => {
  startQuiz();
  starting.style.display = "none";
  card.style.display = "block";
});
