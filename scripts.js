/* Place your JavaScript in this file */

    // Autoclicks the mute checkbox on load
    window.onload = function() {
    var checkbox = document.getElementById('un-mute');
    checkbox.click();
    };

    // Plays a sound when an action is performed
function playSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

    // Stops the sound when action stopped
function stopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}

    // Mute all video and audio elements on the page
function toggleMute(checkbox) {
    var audioElements = document.getElementsByTagName("audio");
    if (checkbox.checked) {
      for (var i = 0; i < audioElements.length; i++) {
      audioElements[i].muted = true;
    }}
    else {
      for (var i = 0; i < audioElements.length; i++) {
      audioElements[i].muted = false;
    }}
}

    // Controlling scroll animation
const html = document.documentElement;
const canvas = document.getElementById("scroll-element");
const context = canvas.getContext("2d");

const frameCount = 148;
const currentFrame = index => (
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
)

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image()
img.src = currentFrame(1);
canvas.width=1158;
canvas.height=770;
img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()

    // Image picking for the about-me slideshow
let images = document.querySelectorAll(".slideshow img");
let index = Math.floor(Math.random() * images.length);
images[index].classList.add("active");

setInterval(() => {
  images[index].classList.remove("active");
  index = Math.floor(Math.random() * images.length);
  images[index].classList.add("active");
}, 4000);


   
