const $numbers = document.getElementById('numbers');
const $date = document.getElementById('date');
const $footer = document.getElementById('footer'); 
const $display = document.getElementById('display');
const $nav = document.getElementById('nav');
const mode = document.getElementById('color-mode');
const $alarm = document.getElementById('alarm');
const createAlarm = document.getElementById('create');
const inputHours = document.getElementById('inputHours');
const inputMinutes = document.getElementById('inputMinutes');
const $myAlarms = document.getElementById('my-alarms');

const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const mesesAnio = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const fechaActual = new Date();
const horas = fechaActual.getHours();
const minutos = fechaActual.getMinutes();
const seg = fechaActual.getSeconds();
const nombreMes = mesesAnio[fechaActual.getMonth()];
const diaSemana = diasSemana[fechaActual.getDay()];
const diaMes = fechaActual.getDate();
const anio = fechaActual.getFullYear();

// Formatear la cadena de hora y minutos (agregar ceros a la izquierda si es necesario)
const horaFormateada = `${horas < 10 ? '0' : ''}${horas}:${minutos < 10 ? '0' : ''}${minutos}:${seg < 10 ? '0' : ''}${seg}`;
const diaFormateado = `${diaSemana}, ${diaMes} de ${nombreMes} de ${anio}`;
$numbers.innerText = horaFormateada;
$date.innerText = diaFormateado;

setInterval(function() {
    const fechaActual = new Date();
    const horas = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const seg = fechaActual.getSeconds();
    const nombreMes = mesesAnio[fechaActual.getMonth()];
    const diaSemana = diasSemana[fechaActual.getDay()];
    const diaMes = fechaActual.getDate();
    const anio = fechaActual.getFullYear();

    const horaFormateada = `${horas < 10 ? '0' : ''}${horas}:${minutos < 10 ? '0' : ''}${minutos}:${seg < 10 ? '0' : ''}${seg}`;
    const diaFormateado = `${diaSemana}, ${diaMes} de ${nombreMes} de ${anio}`;
    $numbers.innerText = horaFormateada;
    $date.innerText = diaFormateado;
}, 1000);

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

function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}
  

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function reproducirSonido() {
    const audio = new Audio('audio/alarm-audio.mp3');
    audio.play();
}

function openModalItsTime() {
    reproducirSonido();
    const modalTime = document.getElementById('modal-its-time');
    modalTime.style.display = 'block';
}
  

function closeModalItsTime() {
    const modalTime = document.getElementById('modal-its-time');
    modalTime.style.display = 'none';
}

$alarm.addEventListener('click', openModal);

let contador = 0;

createAlarm.addEventListener('click', function(){
    closeModal();
    const hours = parseInt(inputHours.value, 10);
    const minutes = parseInt(inputMinutes.value, 10);
    const pa = document.createElement('p');
    pa.textContent = `Alarma: ${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:00`;
    pa.classList.add('my-alarms');
    contador++;
    let contAct = contador;
    pa.id = 'elemento_'+ contador;
    $myAlarms.appendChild(pa);

    const checkAlarm = function() {
        const fechaActual = new Date();
        const h = fechaActual.getHours();
        const m = fechaActual.getMinutes();

        if ((hours === h) && (minutes === m)) {
            clearInterval(intervaloAlarm);
            openModalItsTime();
            const borrarP = document.querySelector('#elemento_'+ contAct);
            $myAlarms.removeChild(borrarP);
        }
    };
    const intervaloAlarm = setInterval(checkAlarm, 3000);
})