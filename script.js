var monthInput = document.querySelector('.month-value');
var monthBills = document.querySelector('.month-bills');
const btnCalc = document.querySelector('.calc-btn');

btnCalc.addEventListener('click', calcularmensuales);

function calcularmensuales(){
    var totalMonth =  monthInput.value + monthBills.value;
}
