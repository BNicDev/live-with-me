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
        infoContainer.innerHTML = '<label>ingrese el valor del ingreso numero 1</label> <br> <input class ="first-salary"> <br> <label>ingrese el valor del ingreso numero 2</label> <br> <input class="second-salary"> <br> <button class = "second-next">next</button>';
        resultContainer.innerHTML = '<p class = "title">La cantidad de ingresos mensual es</p> <br> '+totalIng.value+'' 
        var firstSalary = document.querySelector('.first-salary');
        var secondSalary = document.querySelector('.second-salary');
    }else if(firstSalary == 0){
        const secondBtnNext = document.querySelector('.second-next');
        secondBtnNext.addEventListener('click', secondContinue(firstSalary.value, secondSalary.value));
    }
    
}


function secondContinue(firstSalary, secondSalary){
if(firstSalary>1 && secondSalary >1){
    resultContainer.innerHTML= "<p class = 'first-salary-title'>el primer salario es de </p> <br> "+firstSalary+"";
}else{
    console.log("no hay nadie");
}
}




