const  container = document.getElementById('container');
const  buttonContainer = document.getElementById('button-container');

const  pinkButton = document.getElementById('pinkButton');
const  blueButton = document.getElementById('blueButton');
const  yellowButton = document.getElementById('yellowButton');
const  resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', () => {
    document.body.classList.remove('pink-background', 'blue-background', 'yellow-background');
});

pinkButton.addEventListener('click', () => {
    document.body.classList.toggle('pink-background');
});

blueButton.addEventListener('click', function() {
    document.body.classList.toggle('blue-background');
});

yellowButton.addEventListener('click', function() {
    document.body.classList.toggle('yellow-background');
});
