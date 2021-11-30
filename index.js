//SCROLLBAR

window.addEventListener("scroll", () => {
	updateProgress()
})

function updateProgress() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + '%';
}

//SCROLLBAR END

//KEYPAD IMAGE FLIP

let n = 1

const imgButton = document.getElementById('imageButton');
imgButton.addEventListener('click', flipImage);

function flipImage() {
  if (n == 1){
    n += 1
    document.getElementById('keypadImg').src = 'img/keypad2.jpg'
  }
  
  else if (n == 2){
    n += 1
    document.getElementById('keypadImg').src = 'img/keypad3.jpg'
  }

  else if (n == 3){
    n = 1
    document.getElementById('keypadImg').src = 'img/keypad1.jpg'
  }
}

//KEYPAD IMAGE FLIP END
