let btncolor = document.getElementById('btnstyte')
let btndot = document.getElementById('btn_dot')
let root = document.documentElement;
let logoimg = document.querySelectorAll(".header_logo")

document.addEventListener('DOMContentLoaded',()=>{
    root.classList.add('light-style')
})

let invert = false;
let left_right = false;

btncolor.addEventListener('click', () => {
    left_right = !left_right;
    btndot.style.right = left_right ? '0' : '';
    btndot.style.left = !left_right ? '0' : '';
    
    if (root.classList.contains('light-style')) {
        root.classList.toggle('dark-style')
        invert = !invert;

        logoimg.forEach(logo => {
            logo.style.filter = invert ? 'invert(1)' : 'invert(0)';
          });
      }
    
  });

/////////////////////
const audio = document.getElementById("song");
const toggleButton = document.getElementById("toggle-btn");
const volumeSlider = document.getElementById("volumeSlider");
const playIcon = document.getElementById("play-icon")
const pauseIcon = document.getElementById("pause-icon")
audio.volume=0.1

toggleButton.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
  } else {
    audio.pause();
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
  }
});

volumeSlider.addEventListener("input", function() {
  audio.volume = this.value / 100;
});
