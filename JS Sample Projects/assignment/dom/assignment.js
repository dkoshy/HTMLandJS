const firstTask = document.getElementById('task-1');
const fiestTaskOne = document.querySelector('li'),
      docTitle = document.title,
      docAnotherTitle = document.querySelector('head'),
      docHeading = document.querySelector('h1');

firstTask.style.color = 'white';
fiestTaskOne.style.backgroundColor = 'black';

console.log(docTitle);
docAnotherTitle.querySelector('title').textContent = 'Assignment - Solved!';
docHeading.textContent = 'Assignment - Solved!';
