//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// insert image in block
var imageContainer = document.querySelector('.fakeimg5');
var random_images_array = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];

function getRandomImage(imgAr, path, container) {
  path = path || 'images/';
  var num = Math.floor( Math.random() * imgAr.length );
  var img = imgAr[num];
  var src = path + img
  var imageElem = document.createElement('img')
  imageElem.setAttribute('src', src);
  container.appendChild(imageElem);
}

getRandomImage(random_images_array, 'images/', imageContainer)
