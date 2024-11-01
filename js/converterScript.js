var temaAzulApplied = true;
var temaRoxoApplied = false;
var temaEscuroApplied = true;
var temaClaroApplied = false;

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

var temaAzul = document.getElementById('azulBtn');
temaAzul.addEventListener('click', applyTemaAzul);

var temaRoxo = document.getElementById('roxoBtn');
temaRoxo.addEventListener('click', applyTemaRoxo);

var temaClaro = document.getElementById('claroBtn');
temaClaro.addEventListener('click', applyTemaClaro);

var temaEscuro = document.getElementById('escuroBtn');
temaEscuro.addEventListener('click', applyTemaEscuro);