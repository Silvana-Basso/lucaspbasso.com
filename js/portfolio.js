




var players = document.querySelectorAll(".play");
var progresses = document.querySelectorAll(".progresss");
var playbtns = document.querySelectorAll(".playbtnP");
var currentTimes = document.querySelectorAll(".current");

var intervals = []; // Almacenar los intervalos para cada reproductor
var currentPlayingIndex = -1; // Índice del reproductor actualmente en reproducción

function playpause(player, index) {
  return function () {
    if (index !== currentPlayingIndex) {
      // Detener el reproductor actual si no es el mismo que el que se está reproduciendo
      if (currentPlayingIndex !== -1) {
        players[currentPlayingIndex].pause();
        players[currentPlayingIndex].currentTime = 0; // Reiniciar al principio
        clearInterval(intervals[currentPlayingIndex]);
        playbtns[currentPlayingIndex].classList.remove("fa-pause");
        playbtns[currentPlayingIndex].classList.add("fa-play");
      }
      
      // Actualizar el índice del reproductor en reproducción
      currentPlayingIndex = index;
    }

    if (player.paused) {
      player.play();
      intervals[index] = setInterval(function () {
        if (player.ended) {
          player.currentTime = 0;
          currentTimes[index].innerHTML = "0:00";
          clearInterval(intervals[index]); // Detener el intervalo
          currentPlayingIndex = -1; // Restablecer el índice del reproductor en reproducción
        }
      }, 3800); // Verificar cada segundo si la canción ha terminado
    } else {
      player.pause();
      clearInterval(intervals[index]); // Detener el intervalo si se pausa manualmente
      currentPlayingIndex = -1; // Restablecer el índice del reproductor en reproducción
    }
  };
}

playbtns.forEach(function (playbtn, index) {
  var player = players[index];
  playbtn.addEventListener("click", playpause(player, index));
});

players.forEach(function (player, index) {
  player.addEventListener("play", function () {
    playbtns[index].classList.remove("fa-play");
    playbtns[index].classList.add("fa-pause");
  });

  player.addEventListener("pause", function () {
    playbtns[index].classList.add("fa-play");
    playbtns[index].classList.remove("fa-pause");
  });

  player.addEventListener("timeupdate", function () {
    let ct = player.currentTime;
    let current = currentTimes[index];
    current.innerHTML = timeFormat(ct);

    let duration = player.duration;

    let prog = Math.floor((ct * 100) / duration);
    progresses[index].style.setProperty("--progress", prog + "%");
  });
});

function timeFormat(ct) {
  minutes = Math.floor(ct / 60);
  seconds = Math.floor(ct % 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return minutes + ":" + seconds;
}
