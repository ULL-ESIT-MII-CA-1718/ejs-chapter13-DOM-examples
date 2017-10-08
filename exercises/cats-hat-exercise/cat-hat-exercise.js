var cat = document.querySelector("#cat");
var hat = document.querySelector("#hat");
var angle = 0, lastTime = null;

function animate(time) {
  if (lastTime != null)
    angle += (time - lastTime) * 0.001;
  lastTime = time;
  var catTop = (Math.sin(angle) * 20) + 40;
  var catLeft = (Math.cos(angle) * 200) + 250;
  cat.style.top = catTop + "px";
  cat.style.left = catLeft + "px";
  hat.style.top = (Math.sin(angle*3) * 40) + catTop - 20 + "px";
  hat.style.left = (Math.cos(angle*3) * 60) + catLeft + "px";
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

