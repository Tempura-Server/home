var km = false;
var fire = true;
setInterval(function() {
  if(fire){if(km){document.getElementById("kageyama").innerText = "☆☆☆☆☆☆☆☆☆";}
else{document.getElementById("kageyama").innerText = "★★★★★★★★★";}
   km = !km; }},500);

function fires() {fire = false;document.getElementById("kageyama").innerText = "";};
function firea() {fire = true;document.getElementById("kageyama").innerText = "★★★★★★★★★";};
