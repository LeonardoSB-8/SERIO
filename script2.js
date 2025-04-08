const horasEl = document.querySelector("#horas");
const minutosEl = document.querySelector("#minutos");
const segundosEl = document.querySelector("#segundos");

const inicio = document.querySelector("#inicio");
const pausa = document.querySelector("#pausa");
const continua = document.querySelector("#continua");
const parada = document.querySelector("#parada");


let seg = 0;
let min = 0;
let hr = 0;

let sePausado = false;

let interval;

inicio.addEventListener("click", contador);
pausa.addEventListener("click", pausaTempo);
continua.addEventListener("click", continuaTempo);
parada.addEventListener("click", paradaTempo);

function contador(){

    interval = setInterval(() => {

        if(!sePausado){

            seg += 1;

            if(seg === 60){
                min++;
                seg = 0;
            }

            if(min === 60){
                hr++;
                min = 0;
                seg = 0;
            }

            horasEl.textContent = formatacao(hr);
            minutosEl.textContent = formatacao(min);
            segundosEl.textContent = formatacao(seg);


        }

    }, 1000);

    inicio.style.display = "none";
    pausa.style.display = "block";

}

function pausaTempo(){
    sePausado = true;
    pausa.style.display = "none";
    continua.style.display = "block";
}

function continuaTempo(){
    sePausado = false;
    pausa.style.display = "block";
    continua.style.display = "none";
}

function paradaTempo(){
    clearInterval(interval);
    hr = 0;
    min = 0;
    seg = 0;

    horasEl.textContent = "00";
    minutosEl.textContent = "00";
    segundosEl.textContent = "00";

    inicio.style.display = "block";
    pausa.style.display = "none";
    continua.style.display = "none";
    
}

function formatacao(tempo){
    return tempo < 10  ? `0${tempo}` : tempo;
}