const $numbers = document.getElementById('numbers');
const $footer = document.getElementById('footer'); 
const $display = document.getElementById('display')
const $nav = document.getElementById('nav')
const mode = document.getElementById('color-mode')
const $btnReady = document.getElementById('btn-ready');
const $btnReset = document.getElementById('btn-reset');
const $containerBtn = document.getElementById('container-btn');

let horas = 0;
let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let intervalo;

mode.addEventListener('click', function(){
    if($display.classList.contains('white-mode')){
        $display.classList.remove('white-mode');
    }else{
        $display.classList.add('white-mode');
    }

    if($footer.classList.contains('white-mode')){
        $footer.classList.remove('white-mode');
    }else{
        $footer.classList.add('white-mode');
    }

    if($nav.classList.contains('white-mode')){
        $nav.classList.remove('white-mode');
    }else{
        $nav.classList.add('white-mode');
    }
});

function iniciarCronometro() {
    if($btnReady.classList.contains('btn-ready')){
        $btnReady.classList.remove('btn-ready');
        $btnReady.classList.add('btn-ready-change');
        $btnReady.innerText = 'Detener';
        const btnVuelta = document.createElement('button');
        btnVuelta.textContent = 'Vuelta';
        btnVuelta.classList.add('btn-lap');
        btnVuelta.classList.add('btn-display');
        btnVuelta.onclick = function() {
            const time = document.createElement('p');
            time.textContent = `Vuelta: ${agregarCero(horas)}:${agregarCero(minutos)}:${agregarCero(segundos)}:${(agregarCero(milisegundos)+'').slice(0,2)}`;
            time.classList.add('lap-time');
            $display.appendChild(time);
        };
        $containerBtn.appendChild(btnVuelta);
        intervalo = setInterval(() => {
            milisegundos++;
            if(milisegundos == 1000){
                milisegundos = 0;
                segundos++;
                if (segundos === 60) {
                    segundos = 0;
                    minutos++;
                    if (minutos === 60) {
                        minutos = 0;
                        horas++;
                    }
                }
            }
            $numbers.textContent = `${agregarCero(horas)}:${agregarCero(minutos)}:${agregarCero(segundos)}:${(agregarCero(milisegundos)+'').slice(0,2)}`;
        }, 1);
    }
    else{
        clearInterval(intervalo);    
        $btnReady.classList.remove('btn-ready-change');
        $btnReady.classList.add('btn-ready');
        $btnReady.innerText = 'Iniciar';
        const borrar = document.querySelector('.btn-lap');
        $containerBtn.removeChild(borrar);
    }
    
}

function detenerCronometro() {
    clearInterval(intervalo);
    if(!$btnReady.classList.contains('btn-ready')){
        $btnReady.classList.remove('btn-ready-change');
        $btnReady.classList.add('btn-ready');
        $btnReady.innerText = 'Iniciar';
        const borrar = document.querySelector('.btn-lap');
        $containerBtn.removeChild(borrar);
    }
    const timeDelete = document.querySelectorAll('.lap-time');
    timeDelete.forEach(el => $display.removeChild(el));
    horas = 0;
    minutos = 0;
    segundos = 0;
    $numbers.textContent = '00:00:00';
}

function agregarCero(valor) {
    return valor < 10 ? '0' + valor : valor;
}

$btnReady.addEventListener('click', iniciarCronometro);
$btnReset.addEventListener('click', detenerCronometro);