// document.getElementById("show-dialog").addEventListener("click", function() {
//   document.getElementById("dialog-box").classList.add("show");
// });

// document.getElementById("close-dialog").addEventListener("click", function() {
//   document.getElementById("dialog-box").classList.remove("show");
// });





document.getElementById("show-dialog").addEventListener("click", function() {
  document.getElementById("dialog-box").classList.add("show");
});

document.getElementById("close-dialog").addEventListener("click", function() {
  var dialogBox = document.getElementById("dialog-box");
  dialogBox.style.opacity = "0"; 
  setTimeout(function() {
    dialogBox.classList.remove("show");
    dialogBox.style.opacity = "1"; // Przywrócenie przezroczystości na 1 po zakończeniu animacji
  }, 900); // Odczekanie 300 ms (czas trwania animacji) przed ukryciem okna dialogowego
});