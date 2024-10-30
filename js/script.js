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
            displayString2 = displayString2 + num;    
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
            decimalAdded = false;      
        }
        else
        {
            if(displayString2 != '')
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

var opBtn = document.querySelectorAll('.opBtn');
opBtn.forEach(function(elem){
    elem.addEventListener('click', addOp)
});

var numBtn = document.querySelectorAll('.numBtn');
numBtn.forEach(function(elem){
    elem.addEventListener('click', addNumber)
});

var clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', clear);

var resultBtn = document.getElementById('resultBtn');
resultBtn.addEventListener('click', showResult);

var decimalBtn = document.getElementById('decimal');
decimalBtn.addEventListener('click', addDecimal);

var temaAzul = document.getElementById('azulBtn');
temaAzul.addEventListener('click', applyTemaAzul);

var temaRoxo = document.getElementById('roxoBtn');
temaRoxo.addEventListener('click', applyTemaRoxo);

var temaClaro = document.getElementById('claroBtn');
temaClaro.addEventListener('click', applyTemaClaro);

var temaEscuro = document.getElementById('escuroBtn');
temaEscuro.addEventListener('click', applyTemaEscuro);