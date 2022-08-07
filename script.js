const container = document.querySelector('.container');

function grid() {
    for (let i = 0; i < 256; i++) {
        let square =  document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}

grid();