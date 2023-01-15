const pianoKeys = document.querySelectorAll(".key");

function playSound(newUrl) {
  new Audio(newUrl).play();
}

pianoKeys.forEach((pianoKey, i) => {
  let number = i < 9 ? "0" + (i + 1) : i + 1;
  let newUrl = "key" + number + ".mp3";
  pianoKey.addEventListener("click", () => playSound(newUrl));
});

// =------ with explanation

// // selecting all queries according to their class name and from array of them .
// const pianoKeys = document.querySelectorAll(".key");

// // playing audio
// function playSound(newUrl) {
// //   console.log(newUrl); just checking the execution
//   new Audio(newUrl).play();
// }

// // for each element i.r key present in this array are added by the Event listener click
// pianoKeys.forEach((pianoKey, i) => {
//   const number = i < 9 ? "0" + (i + 1) : i + 1; // for 0 to 9 with '0' and 10 - 24 as it is.
//   const newUrl = "24-piano-keys/key" + number + ".mp3";
//   pianoKey.addEventListener("click", () => playSound(newUrl)); // callback
// });
