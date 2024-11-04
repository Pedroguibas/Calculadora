var display = document.getElementById('calcDisplay');
var displayString = '0';
var displayString2 = '';
var multi = document.getElementById('multiply');
var decimalAdded = false;
var v1Added = false;
var showedResult = false;
var temaAzulApplied = true;
var temaRoxoApplied = false;
var temaEscuroApplied = true;
var temaClaroApplied = false;
var displayString2Undefined = false;
var v1 = 0;
var v2 = 0;
var op = '';
var displayOp = '';

function addNumber(){
    let num = this.value;
    if(!showedResult)
        if(!v1Added)
        {
            if(displayString == '0')
                displayString = '';
            displayString = displayString + num;
        }
        else
        {
            if(displayString2Undefined)
            {
                displayString2 = '';
                displayString2Undefined = false;
            }
            displayString2 = displayString2 + num;    
        }
    else
    {
        displayString = '';
        displayString = displayString + num;
        showedResult = false;
        v1Added = false;
    }
    display.textContent = displayString + displayOp + displayString2;

    if(display.offsetWidth > 273)
        display.classList.add('calcDisplayScroll');
    else
        display.classList.remove('calcDisplayScroll');
}

function addDecimal(){
    if(!decimalAdded&&displayString != '')
    {   
        if(!v1Added)
        {
            displayString = displayString + '.';
            showedResult = false;
            display.textContent = displayString + displayOp + displayString2;
        }
        else
        {
            if(displayString2 != '')
                displayString2 = displayString2 + '.';
            else
                displayString2 = '0.';
        }
        decimalAdded = true;

        display.textContent = displayString + displayOp + displayString2;
    }
    else
        if(displayString == '0'&&!v1Added)
        {
            displayString = displayString + '.';
            display.textContent = displayString + displayOp + displayString2;
        }
}

function addOp(){
    if(displayString != '')
    {
        if(!v1Added)
        {
            v1Added = true;
            showedResult = false;
            v1 = parseFloat(displayString);
            op = this.value;
            displayOp = ' ' + op + ' ';
            displayString2 = String(v1);
            displayString2Undefined = true;
            decimalAdded = false;    
        }
        else
        {
            if(displayString2 != displayString&&displayString2 != '')
            {
                if(op == '/'&&displayString2 == '0')
                    window.alert('Não é possível dividr por zero.');
                else
                {
                    v2 = parseFloat(displayString2);
                    if(op == '+')
                        result = v1 + v2;
                       else
                        if(op == '-')
                            result = v1 - v2;
                        else
                            if(op == '*')
                                result = v1 * v2;
                            else
                                if (op == '/')
                                    result = v1 / v2;  
                                else
                                    if(op == '^') 
                                        result = v1 ** v2;
                                    else
                                        result = v1 / 100 * v2;

                    v2 = 0;
                    displayString = result + '';
                    if(displayString.length > 10 && result % 1 > 0)
                        displayString = displayString.slice(0, 9);
                    
                    displayString2 = '';
                    v1 = parseFloat(displayString);
                    op = this.value;
                    displayOp = ' ' + op + ' ';
                }   
            }
            else
            {
                op = this.value;
                displayOp = ' ' + op + ' ';
            }
            
        }
            decimalAdded = false;
            showedResult = false;
    }
    
    display.textContent = displayString + displayOp + displayString2;
}

function showResult(){
    if(op != ''&&displayString2 != '')
    {
        if(op == '/'&&displayString2 == 0)
            window.alert('Não é possível dividir por zero.');
        else
        {
            v2 = parseFloat(displayString2);
            if(op == '+')
                result = v1 + v2;
            else    
                if(op == '-')
                    result = v1 - v2;
                else
                    if(op == '*')
                        result = v1 * v2;
                    else
                        if(op == '/')
                            result = v1 / v2;
                        else
                            if(op == '^')
                                result = v1 ** v2;
                            else
                                result = v1 / 100 * v2;
        
            v2 = 0;
            displayString2 = '';
            displayString = result + '';
           
            displayOp = ' ' + op + ' ';
            showedResult = true;
            v1Added = false;

            if(result % 1 == 0)
                decimalAdded = false;
            else
                decimalAdded = true;
            if(displayString.length > 10 && result % 1 > 0)
                    displayString = displayString.slice(0, 9);
            v1 = parseFloat(displayString);
            displayOp = '';
        }
    }
    display.textContent = displayString + displayOp + displayString2;
    
    if(display.offsetWidth > 273)
        display.classList.add('calcDisplayScroll');
    else
        display.classList.remove('calcDisplayScroll');
    
}


function clear(){
    v1 = 0;
    v2 = 0;
    op = '';
    displayOp = '';
    decimalAdded = false;
    displayString = '0';
    displayString2 = '';
    v1Added = false; 
    display.classList.remove('calcDisplayScroll')
    display.textContent = displayString + displayOp + displayString2;
}

function applyTemaAzul(){
    if(!temaAzulApplied)
    {
        temaAzul.classList.add('selectedBtn');
        temaRoxo.classList.remove('selectedBtn');

        let elem = document.querySelector('.purpleSelected');
        elem.classList.add('blueSelected');
        elem.classList.remove('purpleSelected');

        temaAzulApplied = true;
        temaRoxoApplied = false;
    }
}

function applyTemaRoxo(){
    if(!temaRoxoApplied)
    {   
        temaRoxo.classList.add('selectedBtn');
        temaAzul.classList.remove('selectedBtn');

        let elem = document.querySelector('.blueSelected');
        elem.classList.add('purpleSelected');
        elem.classList.remove('blueSelected');

        temaRoxoApplied = true;
        temaAzulApplied = false;
    }
}

function applyTemaClaro(){
    if(!temaClaroApplied)
    {
        temaClaro.classList.add('selectedBtn');
        temaEscuro.classList.remove('selectedBtn');

        let elem = document.querySelector('.darkBody');
        elem.classList.add('lightBody');
        elem.classList.remove('darkBody');

        temaClaroApplied = true;
        temaEscuroApplied = false;
    }
}

function applyTemaEscuro(){
    if(!temaEscuroApplied)
    {
        temaEscuro.classList.add('selectedBtn');
        temaClaro.classList.remove('selectedBtn');

        let elem = document.querySelector('.lightBody');
        elem.classList.add('darkBody');
        elem.classList.remove('lightBody');

        temaEscuroApplied = true;
        temaClaroApplied = false;
    }
}

const opBtn = document.querySelectorAll('.opBtn');
opBtn.forEach(function(elem){
    elem.addEventListener('click', addOp)
});

const numBtn = document.querySelectorAll('.numBtn');
numBtn.forEach(function(elem){
    elem.addEventListener('click', addNumber)
});

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', clear);

const resultBtn = document.getElementById('resultBtn');
resultBtn.addEventListener('click', showResult);

const decimalBtn = document.getElementById('decimal');
decimalBtn.addEventListener('click', addDecimal);

const temaAzul = document.getElementById('azulBtn');
temaAzul.addEventListener('click', applyTemaAzul);

const temaRoxo = document.getElementById('roxoBtn');
temaRoxo.addEventListener('click', applyTemaRoxo);

const temaClaro = document.getElementById('claroBtn');
temaClaro.addEventListener('click', applyTemaClaro);

const temaEscuro = document.getElementById('escuroBtn');
temaEscuro.addEventListener('click', applyTemaEscuro);

// Conversor de Moeda

var showingCalc = true;
var v1LastAdded = true;
var APIFetched = false;
var valorIntermediarioDolar;
var cur1 = '';
var cur2 = '';
var exchangeValue;
var exchangeValue2;

function switchDisplay(){
    if(showingCalc)
    {
        document.querySelector('.calcContainer').style.display = 'none';
        document.querySelector('.conversorViewport').style.display = 'block';
        this.innerHTML = 'Calculadora';
        document.querySelector('title').innerHTML = 'Conversor de Moedas';
        showingCalc = false;
    }
    else
    {
        document.querySelector('.calcContainer').style.display = 'block';
        document.querySelector('.conversorViewport').style.display = 'none';
        this.innerHTML = 'Conversor de Moedas';
        document.querySelector('title').innerHTML = 'Calculadora Básica';
        showingCalc = true;
    }
}


async function fetchExchangeValue(){
    cur1 = currency1.value;
    cur2 = currency2.value;

    let response = await fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_If4UH7rZwKkGQ5i66YcAVZTveiFaOFfqggvVEGEr&currencies=NZD%2CJPY%2CGBP%2CZAR%2CBRL%2CINR%2CIDR%2CKRW%2CCNY%2CSGD%2CEUR%2CCAD%2CNOK%2CCHF%2CSEK%2CAUD%2CHKD').catch((err) => console.error(err));
    let obj = await response.json();
    exchangeValue = obj.data[cur1];
    
    response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_If4UH7rZwKkGQ5i66YcAVZTveiFaOFfqggvVEGEr&currencies=${cur2}`).catch((err) => console.error(err));
    obj = await response.json();
    exchangeValue2 = obj.data[cur2];

    v1LastAdded = this.id == 'currency2' ? false : true;
    

    converterValor();
}
    
function addValor1(){
    v1LastAdded = true;
    converterValor();
}

function addValor2(){
    v1LastAdded = false;
    converterValor();
}

function converterValor(){
    cur1 = currency1.value;
    cur2 = currency2.value;
    if(v1LastAdded)
    {
        v1 = parseFloat(inputVal1.value);

        valorIntermediarioDolar = cur1 == 'USD' ? v1 : v1 / exchangeValue;

        v2 = cur2 == 'USD' ? valorIntermediarioDolar : valorIntermediarioDolar * exchangeValue2;
    }
    else
    {
        v2 = parseFloat(inputVal2.value);

        valorIntermediarioDolar = cur2 == 'USD' ? v2 : v2 / exchangeValue2;
        
        v1 = cur1 == 'USD' ? valorIntermediarioDolar : valorIntermediarioDolar * exchangeValue;
    }
    outputValorConvertido();
}

function outputValorConvertido(){

    if(v1LastAdded)
    {
        if(v2<0.1)
            inputVal2.value = inputVal1.value != '' ? v2.toFixed(6) : '';
        else
            inputVal2.value = inputVal1.value != '' ? v2.toFixed(2) : '';
    }
    else
    {
        if(v1<1)
            inputVal1.value = inputVal2.value != '' ? v1.toFixed(6) : '';
        else
            inputVal1.value = inputVal2.value != '' ? v1.toFixed(2) : '';
    }
}


const calcConversorSwitchBtn = document.querySelector('#calcConversorSwitchBtn');
calcConversorSwitchBtn.addEventListener('click', switchDisplay);

const inputVal1 = document.getElementById('valor1');
inputVal1.addEventListener('input', addValor1);

const inputVal2 = document.getElementById('valor2');
inputVal2.addEventListener('input', addValor2);

const currency1 = document.getElementById('currency1');
currency1.addEventListener('change', fetchExchangeValue)

const currency2 = document.getElementById('currency2');
currency2.addEventListener('change', fetchExchangeValue);

const currencyCheck = document.querySelectorAll('.currencyOption');

fetchExchangeValue();