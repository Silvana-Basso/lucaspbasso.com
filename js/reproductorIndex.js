
  var player = document.getElementById("player");
  let progress = document.getElementById("progress");
  let playbtn = document.getElementById("playbtn");
  let current = document.getElementById("current");
  
  var interval; // Almacenar el intervalo para el reproductor
  
  var playpause = function () {
    if (player.paused) {
      player.play();
      interval = setInterval(function () {
        if (player.ended) {
          player.currentTime = 0;
          current.innerHTML = "0:00";
          clearInterval(interval); // Detener el intervalo
        }
      }, 50000); // Verificar cada segundo si la canción ha terminado
    } else {
      player.pause();
      clearInterval(interval); // Detener el intervalo si se pausa manualmente
    }
  }
  
  playbtn.addEventListener("click", playpause);
  
  player.onplay = function () {
    playbtn.classList.remove("fa-play");
    playbtn.classList.add("fa-pause");
  }
  
  player.onpause = function () {
    playbtn.classList.add("fa-play");
    playbtn.classList.remove("fa-pause");
  }
  
  player.ontimeupdate = function () {
    let ct = player.currentTime;
    current.innerHTML = timeFormat(ct);
    //progress
    let duration = player.duration;
    prog = Math.floor((ct * 100) / duration);
    progress.style.setProperty("--progress", prog + "%");
  
    // Comprueba si la canción ha terminado y establece el contador en 0:00
    if (ct >= duration) {
      player.currentTime = 0;
      current.innerHTML = "0:00";
      player.pause(); // Pausa la reproducción si lo deseas
      clearInterval(interval); // Detener el intervalo
    }
  }
  
  function timeFormat(ct) {
    minutes = Math.floor(ct / 60);
    seconds = Math.floor(ct % 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    return minutes + ":" + seconds;
  }
  
  