


class Matrix {
    constructor(row, col){
        this.row = row;
        this.col = col;

        
    }

    
}

function add(m1, m2){

}


// Event Handling
const input = document.querySelectorAll('.size input')

const inputA = document.querySelector('.input-a')
const inputB = document.querySelector('.input-b')
const result = document.querySelector('.result')

for(let index = 0; index < 2; index++){
    input[index].addEventListener('blur', function(){
        inputA.innerHTML = ''
        inputB.innerHTML = ''
        result.innerHTML = ''

        let row = parseInt(input[0].value, 10)
        let col = parseInt(input[1].value, 10)
        console.log(row + col)

        for(let i = 0; i < row; i++){
            for(let j = 0; j < col; j++){
                let element1 = document.createElement('input')
                element1.setAttribute('type', 'number');
                inputA.appendChild(element1);


                let element2 = document.createElement('input')
                element2.setAttribute('type', 'number');
                inputB.appendChild(element2);

                
                let element3 = document.createElement('input')
                element3.setAttribute('readonly', '')
                element3.setAttribute('type', 'number')
                
                result.appendChild(element3)
                
            } 
        }
        inputA.style.gridTemplateColumns = 'repeat('+ col+ ',1fr)'
        inputB.style.gridTemplateColumns = 'repeat('+ col+ ',1fr)'
        result.style.gridTemplateColumns = 'repeat('+ col+ ',1fr)'

        
        console.log(inputA);
        console.log(inputB);
    })
}

const calculate = document.querySelector('.calc')

calculate.addEventListener('click', function(){
    result.innerHTML = '';
    let row = parseInt(input[0].value, 10)
    let col = parseInt(input[1].value, 10)

    let matrixA = document.querySelectorAll('.input-a input')
    console.log(matrixA)
    let matrixB = document.querySelectorAll('.input-b input')
    console.log(matrixB)
    
    let ind = 0;
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            element = document.createElement('input')
            element.setAttribute('readonly', '')
            element.setAttribute('type', 'number')
            element.value = parseInt(matrixA[ind].value,10) 
                        + parseInt(matrixB[ind].value, 10)

            result.appendChild(element)
            ind++;
        }
    }

})



/* Event Handling
// const input = document.getElementsByTagName('input');
// for(let i = 0; i < 4; i++){
//     input[i].addEventListener('mouseenter', function(){
//         input[i].style.background = '#eeeeee';
//     })
//     input[i].addEventListener('mouseleave', function(){
//         input[i].style.background = '';
//     })
// }

// const a = document.querySelector(".matrix-a");
// const aInput = a.getElementsByTagName('input');

// const aMatrix = a.querySelector(".matrix-a .input");

// for(let index = 0; index < 2; index++){
//     aInput[index].addEventListener('blur', function(){
//         let row = parseInt(aInput[0].value, 10);
//         let col = parseInt(aInput[1].value, 10);
        
//         aMatrix.innerHTML=''
//         for(let i = 0; i < row; i++){
//             for(let j = 0; j < col; j++){
//                 let element = document.createElement('input')
//                 element.setAttribute("type", "number")
//                 aMatrix.appendChild(element)
//                 console.log(element)
//             }
//         }
//     })
// }


// const b = document.querySelector(".matrix-b");
// const bInput = b.getElementsByTagName('input');

// const bMatrix = b.querySelector(".matrix-b .input");

// for(let index = 0; index < 2; index++){
//     bInput[index].addEventListener('blur', function(){
//         let row = parseInt(bInput[0].value, 10);
//         let col = parseInt(bInput[1].value, 10);
        
//         bMatrix.innerHTML=''
//         for(let i = 0; i < row; i++){
//             for(let j = 0; j < col; j++){
//                 let element = document.createElement('input')
//                 element.setAttribute("type", "number")
//                 bMatrix.appendChild(element)
//                 console.log(element)
//             }
//         }
//     })
// }
*/




