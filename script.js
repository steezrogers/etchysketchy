const container = document.querySelector('.container');

function grid() {
    for (let i = 0; i < 256; i++) {
        let square =  document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}

grid();

const etch = document.querySelectorAll('.square');
etch.forEach(square => square.addEventListener('mouseover', function sketch(event) {
    event.target.style.backgroundColor = 'black';
}));