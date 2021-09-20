"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBGPic = getBGPic;

// get randon number return
function callRandom(start, last) {
  var number = start + Math.floor(Math.random() * last);
  return number;
} // get number 1 - 55


function getBGPic() {
  //to do fix number get from api
  var newRandom = callRandom(1, 55);
  var newPIc = "linear-gradient(rgba(255, 255, 255, .2), rgba(255, 255, 255, 0.1)),url('./assets/pics/g" + newRandom + ".jpg";
  return {
    backgroundImage: newPIc
  };
}