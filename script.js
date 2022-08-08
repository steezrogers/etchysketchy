const container = document.querySelector('.container');

function grid(x) {
    for (let i = 0; i < x**2; i++) {
        container.style.setProperty('--colNum', x);
        container.style.setProperty('--rowNum', x);
        let square =  document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
    sketch();
}

grid(16);

function sketch() {
    let etch = document.querySelectorAll('.square');
        etch.forEach(square => square.addEventListener('mouseover', (event) =>
        event.target.style.backgroundColor = 'black'));
}

const change = document.getElementById('change');
change.addEventListener('click', squares);

function squares() {
    let box = prompt(`Please enter a value from 16 to 100.`);
        if ((box > 0 && box < 16) || box > 100 || isNaN(box)) {
            alert(`Please enter a valid number.`);
            return squares();
        } else if (box == null) {
            return;
        }
    remove(container);
    grid(box);
}

function remove(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}