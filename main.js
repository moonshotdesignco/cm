// var closet = "https://closet.moonshotdesignco.com"

// var img = [
//   "djp/img/sm/portrait-cory04.jpg",
//   "djp/img/sm/portrait-cory05.jpg",
//   "djp/img/sm/portrait-cory06-2.jpg",
//   "djp/img/sm/portrait-cory09-2.jpg",
//   "djp/img/sm/portrait-cory10.jpg",
//   "djp/img/sm/portrait-cory12.jpg",
//   "djp/img/sm/portrait-cory14.jpg"
// ]

// var randBack = img[Math.floor(Math.random() * 7)];

// document.getElementById("bgdiv").style.backgroundImage = "url('" + closet + "/" + randBack + "')";


// Get the modal
var modal = document.getElementById("preSaveModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

span2.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}