let number_input = document.getElementById('input')
let number_input2 = document.getElementById('input2')
let run_button = document.getElementById('button')
let number_output = document.getElementById('output')

function show_number(){
    let number = Number(number_input.value);
    let number2 = Number(number_input2.value);
    let output = ''

    for (let i=1; i<=number2 ;i++){
        output += "<p>"
        output += number + 'x' + i + '=' + (number*i)
        output += "</p>"  
    }

    number_output.innerHTML = output
}

run_button.addEventListener('click',show_number)