const shareBtn = document.querySelectorAll(".btn-share");
const socialMedia = document.querySelector(".social-media");

shareBtn.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    if (socialMedia.classList.contains("active")) {
      socialMedia.classList.remove("active");
    } else {
      socialMedia.classList.add("active");
    }
  });
});
