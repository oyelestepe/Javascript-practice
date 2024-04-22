const questions = document.querySelectorAll('.question');

questions.forEach(question => {
  const answer = question.querySelector('.answer');
    
  question.addEventListener('click', () => {
    if (answer.classList.contains('show')) {
      answer.style.maxHeight = null;
      answer.classList.remove('show');
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.classList.add('show');
    }
  });
});
  
  