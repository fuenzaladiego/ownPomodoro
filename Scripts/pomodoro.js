const d = document;
export function pomodoroWatch(clock, start, stop, reset){

    

    let clockTempo, 
    seconds = 55,
    minutes = 24,
    secondsAux, minutesAux, sesion = 3;

    let setTime = () =>{
        seconds++;
        if(seconds > 59){
            minutes++
            seconds = 0;
        }
        if(seconds < 10)    secondsAux = "0"+ seconds; 
        else    secondsAux = seconds;
        if(minutes < 10)    minutesAux = "0"+minutes;
        else    minutesAux = minutes;

        d.getElementById(clock).innerHTML = `<h3>${minutesAux + ":" + secondsAux}</h3>`
        if((minutes == 25) && (sesion % 2 != 0)) alarm(); 
        if((minutes == 5) && (sesion % 2 == 0)) alarm();
    }


    let alarm = () =>{
        seconds = 0;
        minutes = 0;
        if(sesion % 2 != 0){
            alert("Sesion terminada, descanza 5 minutos");
            sesion++;
            d.querySelector(start).disabled = false;
        }
        else{
            alert("Descanzo terminado, Reanudando pomodoro");
            sesion++;
        }
    }
    d.addEventListener("click", e=> {

        if(e.target.matches(start)){ //Si hago click en start
            clockTempo = setInterval(() =>{
                setTime();
                console.log(sesion);
            },1000);
            e.target.disabled = true;
        }
        else if(e.target.matches(stop)){  //Si hago click en stop
            clearInterval(clockTempo);
            d.querySelector(start).disabled = false;
        }
        else if(e.target.matches(reset)){
            clearInterval(clockTempo);
            seconds = 0;
            minutes = 0;
            d.querySelector(start).disabled = false;
            d.getElementById(clock).innerHTML = `<h3>00:00</h3>`
        }
    });

}

export function alarm(interval){

}