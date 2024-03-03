const button = document.querySelector('button');
const h1E1 = document.querySelector('h1');

const bgE2 = document.querySelector( '.left_side');
const bgE3 = document.querySelector( '.right_side');

button.addEventListener('click', () => {
    let color = '#';
    color +=Math.random().toString(16).slice(2,8);

    bgE2.style.backgroundColor = color;
    bgE3.style.backgroundColor = color;

    h1E1.innerText =color;
    console.log(color)


})