var monthInput = document.querySelector('.month-value');
var monthBills = document.querySelector('.month-bills');
var totalIng = document.querySelector('.total-month');
const resultContainer = document.querySelector('.result-container')
const infoContainer = document.querySelector('.info-container')
const infoList = document.querySelector('.info-list')
const btnNext = document.querySelector('.next');
const btnCalc = document.querySelector('.calc-btn');
const backBtn = document.querySelector('.back-btn') 

btnNext.addEventListener('click', continuarFuncion);
//btnCalc.addEventListener('click', calcularmensuales);
//backBtn.addEventListener('click', backFuncion)

function continuarFuncion(){
    const isListClosed = infoList.classList.contains('inactive');

    if(isListClosed){
        infoList.classList.toggle('inactive');
    }

    if(totalIng.value == '2'){
        infoContainer.innerHTML = "<label>ingrese el valor del ingreso numero 1</label> <br> <input> <br> <label>ingrese el valor del ingreso numero 2</label> <br> <input>";
        resultContainer.innerHTML = "<h2 class = 'tittle'>La cantidad de ingresos mensual es</h2> <br> "+totalIng.value+"" 
    }
}




