window.onload = function() {
  var sp, btn_start, btn_stop, t, ms, s, mn, h;

  sp = document.getElementsByTagName('span');
  btn_start = document.getElementById('start');
  btn_stop = document.getElementById('stop');
  t;
  btn_reset = document.getElementById('reset');
  (ms = 0), (s = 0), (mn = 0), (h = 0);

  function update_chrono() {
    ms += 1;
    if (ms == 10) {
      ms = 1;
      s += 1;
    }
    if (s == 60) {
      s = 0;
      mn += 1;
    }
    if (mn == 60) {
      mn = 0;
      h += 1;
    }

    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
  }

  function start() {
    t = setInterval(update_chrono, 100);
    btn_start.disabled = true;
    btn_stop.disabled = false;
    btn_reset.disabled = true;
  }

  function stop() {
    clearInterval(t);
    btn_start.disabled = false;
    btn_stop.disabled = true;
    btn_reset.disabled = true;
  }

  function reset() {
    clearInterval(t);
    t = null; // Reset t to null
    ms = 0;
    s = 0;
    mn = 0;
    h = 0;
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
    btn_start.disabled = false;
    btn_stop.disabled = true;
    btn_reset.disabled = true; // Enable reset button
}
  btn_reset.addEventListener('click', reset);
  btn_start.addEventListener('click', start);
  btn_stop.addEventListener('click', stop);
}