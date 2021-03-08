const shareBtn = document.querySelector(".btn-share");
const socialMedia = document.querySelector(".social-media");

shareBtn.addEventListener("click", (e) => {
  if (socialMedia.classList.contains("active")) {
    socialMedia.classList.remove("active");
  } else {
    socialMedia.classList.add("active");
  }
});
