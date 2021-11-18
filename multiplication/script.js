

// Event
const inputs = document.querySelectorAll('.size input');
const matrix = document.querySelectorAll('.matrix-box');



for(let i = 0; i < 2; i++){
    input = inputs[i];

    input.addEventListener('blur', function() {
        matrix[0].innerHTML = '';

        let row1 = parseInt(inputs[0].value, 10)
        let col1 = parseInt(inputs[1].value, 10)

        for(let i = 0; i < row1; i++){
            for(let j = 0; j < col1; j++){
                let element = document.createElement('input');
                element.setAttribute('type', 'number');
                matrix[0].appendChild(element);
            }
        }

        matrix[0].style.gridTemplateColumns = 'repeat('+ col1+ ',1fr)';
    })
}

for(let i = 2; i < 4; i++){
    input = inputs[i];

    input.addEventListener('blur', function() {
        matrix[1].innerHTML = '';

        let row2 = parseInt(inputs[2].value, 10)
        let col2 = parseInt(inputs[3].value, 10)

        for(let i = 0; i < row2; i++){
            for(let j = 0; j < col2; j++){
                let element = document.createElement('input');
                element.setAttribute('type', 'number');
                matrix[1].appendChild(element);
            }
        }

        matrix[1].style.gridTemplateColumns = 'repeat('+ col2+ ',1fr)';
    })
}

const calculate = document.querySelector('.calc');

calculate.addEventListener('click', function(){
    
    let row1 = parseInt(inputs[0].value, 10)
    let col1 = parseInt(inputs[1].value, 10)

    let row2 = parseInt(inputs[2].value, 10)
    let col2 = parseInt(inputs[3].value, 10)

    let alert = document.querySelector('.alert');
    if(col1 != row2){
        alert.innerHTML = 'ukuran col 1 dan row 2 harus sama!'
    }else{
        alert.innerHTML = ''
        matrix[2].innerHTML = ''

        let arr1 = []
        for(let i = 0; i < row1; i++){
            for(let j = 0; j < col1; j++){
                arr1[i] = []
            }
        }
        let matrix1 = document.querySelectorAll('.matrix-box input')
        let index = 0;
        for(let i = 0; i < row1; i++){
            for(let j = 0; j < col1; j++){
                arr1[i].push(parseInt(matrix1[index].value, 10))
                index++;
            }
        }
        console.log(arr1)
        
        let arr2 = []
        for(let i = 0; i < row2; i++){
            for(let j = 0; j < col2; j++){
                arr2[i] = []
            }
        }
        let matrix2 = document.querySelectorAll('.matrix-box input')
        index = row2;
        for(let i = 0; i < row2; i++){
            for(let j = 0; j < col2; j++){
                arr2[i].push(parseInt(matrix2[index].value, 10))
                index++;
            }
        }
        console.log(arr2)

        let res = []
        for(let i = 0; i < row1; i++){
            for(let j = 0; j < col2; j++){
                res[i] = []
            }
        }

        for(let i = 0; i < row1; i++){
            for(let j = 0; j < col2; j++){
                let sum = 0;
                for(let k = 0; k < row2; k++){
                    sum += arr1[i][k] * arr2[k][j]
                }
                res[i].push(sum);
            }
        }
        console.log(res)
        

        for(let i = 0; i < row1; i++){
            for(let j = 0; j < col2; j++){

                element = document.createElement('input');
                element.setAttribute('type', 'number');
                element.setAttribute('readonly', '');
                element.value = res[i][j];
                matrix[2].appendChild(element);

                
            }
        }
        matrix[2].style.gridTemplateColumns = 'repeat('+ col2+ ',1fr)';
        console.log(matrix[2])


    }
})

/*
// for(let i = 0; i < row; i++){
//     for(let j = 0; j < col; j++){
        
//         let element1 = document.createElement('input');
//         element1.setAttribute('type', 'number');
//         matrix[0].appendChild(element1);
        
//         let element2 = document.createElement('input');
//         element2.setAttribute('type', 'number');
//         element2.setAttribute('readonly', '');
//         matrix[1].appendChild(element2);

//     } 
// }
*/

