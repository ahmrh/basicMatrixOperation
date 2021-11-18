// Event
const input = document.querySelectorAll('.size input');
const matrix = document.querySelectorAll('.matrix-box');

let row = parseInt(input[0].value, 10)
let col = parseInt(input[1].value, 10)
console.log(row + col)

for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
        
        let element1 = document.createElement('input');
        element1.setAttribute('type', 'number');
        matrix[0].appendChild(element1);
        
        let element2 = document.createElement('input');
        element2.setAttribute('type', 'number');
        element2.setAttribute('readonly', '');
        matrix[1].appendChild(element2);

    } 
}

for(let i = 0; i < 2; i++)
    matrix[i].style.gridTemplateColumns = 'repeat('+ col+ ',1fr)'


const button = document.querySelector('.container button');
const m = document.querySelectorAll('.matrix-box input')

button.addEventListener('click', function(){
    let a = parseInt(m[0].value, 10)
    let b = parseInt(m[1].value, 10)
    let c = parseInt(m[2].value, 10)
    let d = parseInt(m[3].value, 10)

    let adj = (a * d) - (b * c)
    
    let index = 0;
    let output = document.querySelectorAll('.matrix-box input')
    output[4].value = d/adj;
    output[5].value = -1 * b/adj;
    output[6].value = -1 * c/adj;
    output[7].value = a/adj;


})