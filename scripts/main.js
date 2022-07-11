let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/panda.jpg') {
      myImage.setAttribute('src','images/fox.jpg');
    } else {
      myImage.setAttribute('src','images/panda.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Pandas are cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Pandas are cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}