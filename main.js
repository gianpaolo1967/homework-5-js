// ex1
var input1 = document.getElementById('input1');
input1.addEventListener('input', countLength, false);

function countLength() {
  document.getElementById('pEx1').innerHTML = input1.value.length;
  
}

// ex2
document.getElementById('img-btn').onclick = showImg;


function showImg() {
  var imgArray = {
    'img1' : '1.jpg',
    'img2' : '2.jpg',
    'img3' : '3.jpg',
    'img4' : '4.jpg'
  }

  for (var key in imgArray) {
    var photos = document.getElementById('show-img');
    photos.innerHTML += " <img src='img/" + imgArray[key] + "'> ";
    photos.setAttribute('style', 'display: flex; flex-direction: row; flex-wrap: wrap; alignContent: space-around;');
    console.log(imgArray.key);
  }
}

// ex3, 4
document.getElementById('exclude').onclick = exclude;

function exclude() {
  var showDomain = document.getElementById('show-dom');
  var url = document.getElementById('url');
  url.value = url.value.replace('http', '');
  url.value = url.value.replace('https', '');
  url.value = url.value.replace(/[`~!@#$%^&*()_|+\-=÷¿?;:'",<>\{\}\[\]\\\/]/gi, '');
  showDomain.innerHTML = url.value;

}

//ex5
document.getElementById('login').onclick = check;

function check() {
  var name = document.getElementById('name');
  var pass = document.getElementById('pass').value;
  var email1 = document.getElementById('email').value;
  var a = email1.indexOf('@');
  name.value.replace(/^[ ]+/g, '');
  if (pass.length > 4) {
    if (a > 0) {
      alert('success');
      console.log('true');
      return true;
    }
    else {
      alert('try again');
    }
  }
  else {
    alert('try again');
  }
}

// ex 6
var showCharcode = document.getElementById('showCharcode').onclick = getCharCode;

function getCharCode() {
  var charcode = document.getElementById('char-code');
  var charcodeWr = document.getElementById('charcode-write');
  var charcodeArr = charcode.value.split(', ');
  for (var i = 0; i < charcodeArr.length; i++) {
    charcodeWr.innerHTML += charcode.value.charCodeAt([i]) + ', ';
  }

  console.log([i]);
}