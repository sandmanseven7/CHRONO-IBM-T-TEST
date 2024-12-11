window.onload = function() {
  const sp = document.getElementsByTagName('span');
  const btn_start = document.getElementById('start');
  const btn_stop = document.getElementById('stop');
  const btn_reset = document.getElementById('reset');
  let t;
  let ms = 0, s = 0, mn = 0, h = 0;

  function update_chrono() {
    ms++;
    if (ms === 10) {
      ms = 0; // Correction: Remettre ms à 0 et non 1
      s++;
    }
    if (s === 60) {
      s = 0;
      mn++;
    }
    if (mn === 60) {
      mn = 0;
      h++;
    }

    sp[0].textContent = h + "h"; // Utilisation de textContent pour éviter les injections XSS
    sp[1].textContent = mn + "min";
    sp[2].textContent = s + "s";
    sp[3].textContent = ms + "ms";
  }

  function start() {
    t = setInterval(update_chrono, 100);
    btn_start.disabled = true;
    btn_stop.disabled = false;
    btn_reset.disabled = true; // Désactiver reset pendant que le chrono tourne
  }

  function stop() {
    clearInterval(t);
    btn_start.disabled = false;
    btn_stop.disabled = true;
    btn_reset.disabled = false; // Réactiver reset à l'arrêt
  }

  function reset() {
    clearInterval(t);
    ms = 0;
    s = 0;
    mn = 0;
    h = 0;
    sp[0].textContent = h + "h";
    sp[1].textContent = mn + "min";
    sp[2].textContent = s + "s";
    sp[3].textContent = ms + "ms";
    btn_start.disabled = false;
    btn_stop.disabled = true;
    btn_reset.disabled = false; // Réactiver reset immédiatement
  }

  btn_start.addEventListener('click', start);
  btn_reset.addEventListener('click', reset);
  btn_stop.addEventListener('click', stop);

  // Initialisation des boutons au chargement
  btn_stop.disabled = true; // Stop est désactivé au début
  btn_reset.disabled = false; // reset est activé au début
};
