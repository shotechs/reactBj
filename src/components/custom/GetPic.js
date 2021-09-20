// get randon number return
function callRandom(start, last) {
  let number = start + Math.floor(Math.random() * last);
  return number;
}
// get number 1 - 55
export function getBGPic() {
  //to do fix number get from api
  let newRandom = callRandom(1, 55);
  let newPIc =
    "linear-gradient(rgba(255, 255, 255, .2), rgba(255, 255, 255, 0.1)),url('./assets/pics/g" +
    newRandom +
    ".jpg";
  return { backgroundImage: newPIc };
}
