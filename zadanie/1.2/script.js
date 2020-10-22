const button = document.querySelector('.button')
const parameter = document.querySelector('.parameter')
const value = document.querySelector('.value')
const result = document.querySelector('.result')


button.addEventListener('click', e => {

    if(parameter.value === "None" || value.value === "" || value.value <= 0){
        alert('Ошибка!')
        return
    }

    calc(parameter.value, value.value)
})

function calc(parameter, value){
    result.textContent = "Площадь: "

    let square = 0;

    if(parameter == "Radius"){
        square = Math.PI * Math.pow(value, 2)
    }
    else{
        square = Math.PI * Math.pow(value / 2, 2)
    }

    result.textContent += square.toFixed(2)
}