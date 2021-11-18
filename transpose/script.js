// Event
const input = document.querySelectorAll('.size input');


for(let inp of input)
    inp.addEventListener('blur', function(){
        
        const matrix = document.querySelectorAll('.matrix-box');
        matrix[0].innerHTML = ''
        matrix[1].innerHTML = ''

        let row = parseInt(input[0].value, 10)
        let col = parseInt(input[1].value, 10)

        

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
    
        matrix[0].style.gridTemplateColumns = 'repeat('+ col+ ',1fr)'
        matrix[1].style.gridTemplateColumns = 'repeat('+ row+ ',1fr)'
    })
    


const button = document.querySelector('.container button');

button.addEventListener('click', function(){
    const m = document.querySelectorAll('.matrix-box input')
    console.log(input)
    
    let row = parseInt(input[0].value, 10)
    let col = parseInt(input[1].value, 10)

    const arr = []
    let index = 0;
    for(let i = 0; i < row; i++){
        
        arr[i] = []
        for(let j = 0; j < col; j++){
            arr[i].push(parseInt(m[index].value, 10));
            index++;
        }

    }
    console.log(arr)

    
    const matrix = document.querySelectorAll('.matrix-box');
    matrix[1].innerHTML = ''

    for(let i = 0; i < col; i++){
        for(let j = 0; j < row; j++){
            
            let element = document.createElement('input');
            element.setAttribute('type', 'number');
            element.setAttribute('readonly', '');
            element.value = arr[j][i]
            matrix[1].appendChild(element);

        } 
    }

})