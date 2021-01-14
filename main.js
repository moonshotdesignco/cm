var closet = "https://closet.moonshotdesignco.com"

var img = [
  "djp/img/sm/portrait-cory03.jpg",
  "djp/img/sm/portrait-cory05.jpg",
  "djp/img/sm/portrait-cory06-2.jpg",
  "djp/img/sm/portrait-cory09-2.jpg",
  "djp/img/sm/portrait-cory10.jpg",
  "djp/img/sm/portrait-cory12.jpg",
  "djp/img/sm/portrait-cory14.jpg"
]

var randBack = img[Math.floor(Math.random() * 7)];

document.body.style.backgroundImage = "url('" + closet + "/" + randBack + "')";