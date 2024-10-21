//your JS code here. If required.
function getLevelCount(level) {
  if (!level.parentNode) {
    return 0;
  }

  level = level.parentNode;

  return 1 + getLevelCount(level);
}

let level = document.getElementById("level");
alert(`The level of the element is: ${getLevelCount(level)}`);
