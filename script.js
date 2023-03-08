var monthInput = document.querySelector('.month-value');
var monthBills = document.querySelector('.month-bills');
var totalIng = document.querySelector('.total-month');
const infoContainer = document.querySelector('.info-container')
const infoList = document.querySelector('.info-list')
const btnNext = document.querySelector('.next');
const btnCalc = document.querySelector('.calc-btn');
const backBtn = document.querySelector('.back-btn') 

btnNext.addEventListener('click', continuarFuncion);
btnCalc.addEventListener('click', calcularmensuales);
backBtn.addEventListener('click', backFuncion)

function continuarFuncion(){
    const isInfoListClosed = infoList.classList.remove('inactive');

    if(isInfoListClosed){
        infoList.classList.toggle('inactive')
    }
}

function backFuncion(){
    const isInfoListOpened = infoList.classList.contains('inactive');

    if(isInfoListOpened){
        infoList.classList.add('inactive')
    }
}


function calcularmensuales(){
    var totalMonth =  monthInput.value + monthBills.value;
}
