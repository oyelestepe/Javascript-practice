const faqContainer = document.getElementById('faq');

const faqData = [
  {
    question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero excepturi, consequatur labore quo aut consequuntur blanditiis veritatis numquam eligendi unde!"
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur animi vel, earum consequuntur odit dolores."
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ex incidunt expedita inventore cum.",
    answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, sunt!",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A commodi doloribus provident libero laboriosam esse ratione quia."
  }
];

faqData.forEach((item, index) => {
  const questionDiv = document.createElement('div');
  questionDiv.classList.add('question');

  const questionContainer = document.createElement('div');
  questionContainer.classList.add('question-container');

  const questionHeading = document.createElement('h2');
  questionHeading.textContent = item.question;

  const icon = document.createElement('i');
  icon.classList.add('fa-solid', 'fa-plus');
  icon.setAttribute('id', `icon-${index}`);

  questionContainer.appendChild(questionHeading);
  questionContainer.appendChild(icon);
  questionDiv.appendChild(questionContainer);

  const answerDiv = document.createElement('div');
  answerDiv.classList.add('answer');
  answerDiv.textContent = item.answer;

  questionDiv.appendChild(answerDiv);

  faqContainer.appendChild(questionDiv);

  questionDiv.addEventListener('click', () => {
    if (answerDiv.classList.contains('show')) {
      answerDiv.style.maxHeight = null;
      answerDiv.classList.remove('show');
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus');
    } else {
      answerDiv.style.maxHeight = answerDiv.scrollHeight + "px";
      answerDiv.classList.add('show');
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
    }
  });
});