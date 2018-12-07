let squares = 16;
// boton reset
const containerButton = document.createElement('div');
containerButton.classList.add('flex-container');
const btnReset = document.createElement('button');
btnReset.textContent='Reset';
btnReset.style.border ='solid black'
containerButton.appendChild(btnReset);
document.body.appendChild(containerButton);



let createRow = function(){
    let lados = squares;
    let x = 0;
    let container = document.createElement('div');
    let randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    container.classList.add('flex-container');
    for(x;x<lados;x++){
        
        const content = document.createElement('div');
        content.style.background = 'white';
        content.style.border = 'solid black';
        content.style.width = '30px';
        content.style.height = '30px';
        content.addEventListener('mouseover',()=> content.style.background = randomColor,true);
        content.removeEventListener('click',()=> content.style.background = randomColor,true);
        container.appendChild(content);
        document.body.appendChild(container);
        
    }        
}
let createColumn = function(){
    let lados = squares;
    let x = 0;
    while(x<lados){
        createRow();
        x++;
    }
}


let canvas = function(){
    let lados = squares;
    let x = 0;
    while(x<lados){
        createRow();
        x++;
    }
}




btnReset.addEventListener('click',() => squares = prompt("Cuantos cuadros queres","16") );
btnReset.addEventListener('click', canvas );






