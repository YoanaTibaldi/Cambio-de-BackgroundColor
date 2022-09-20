const miModulo = (() => {
    'use strict'

    const btnCambiar = document.querySelector('#btnCambiar')



    btnCambiar.addEventListener('click', () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor =  '#' + randomColor;
        color.innerHTML = "#" + randomColor;
    })  
})





