const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const game = document.querySelector('.game');

document.addEventListener('keydown', function (event) {
    jump();
});

game.addEventListener('touchstart', function (event) {
    jump();
});

function jump() {
    if (dino.classList != 'jump') {
        dino.classList.add('jump');
    }
    setTimeout(() => {
        dino.classList.remove('jump');
    }, 300);
}

// function jump() {
//     if (!dino.classList.contains('jump')) {
//         dino.classList.add('jump');
//         setTimeout(function () {
//             dino.classList.remove('jump');
//         }, 500);
//     }
// }

let isAlive = setInterval(function () {
    let dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue('top')
    );

    let barrierLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue('left')
    );

    console.log(dinoTop, barrierLeft);

    // let time = window.getComputedStyle(barrier).animationIterationCount;

    if (barrierLeft < 100 && barrierLeft > 0 && dinoTop >= 50) {
        alert('Game over!!!');
        // time = 50;
    }
}, 10);
