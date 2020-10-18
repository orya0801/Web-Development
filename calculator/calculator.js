const output_result = document.querySelector('.output_result')
const output_expr = document.querySelector('.output_expression')
const buttons = document.querySelector('.buttons')

const math_actions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "/", "*", "-", "+", "^"]

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
        // по клику вызывается функция со значением кнопки в качестве параметра
        calc(this.value)
    })
})

document.addEventListener('keydown', e => {
    if ((e.key).match(/Backspace|Enter/) ||
        math_actions.indexOf(e.key) != -1) calc(e.key)
})


function calc(value) {
    if (value.match(/=|Enter/)) {
        try {
            if (output_expr.textContent !== '') {
                output_result.textContent = math.evaluate(output_expr.textContent)
            }
        } catch {
            let newValue = 'Ошибка'
            output_result.textContent = newValue
        }
    } else if (value === 'clean') {
        output_expr.textContent = ""
        output_result.textContent = 0
    } else if (value.match(/clean_entry|Backspace/)) {
        output_expr.textContent = output_expr.textContent.substring(0, output_expr.textContent.length - 1)
    } else {
        output_expr.textContent += value     
    }
}

