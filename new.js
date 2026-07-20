const title = document.querySelector("#title");
const info = document.querySelector("#info");
console.log(title);
title.addEventListener("click", () => {
  console.log(info);
  if (info.style.display === "none") {
    info.style.display = "block";
  } else {
    info.style.display = "none";
  }
});
