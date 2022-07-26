const time =  document.getElementById('time');


var d = new Date();

var m = d.getMinutes();

time.innerHTML = `<p>Server time : ${m}/${d.getHours()}</p>`;