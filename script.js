
const closeForm = () => {
  document.getElementById("signform").style.display = "none";
  document.getElementById("logform").style.display = "none";
  document.getElementById("main").style.opacity = "1";
  document.getElementById("main").style.filter = "brightness(100%)";
};
document.getElementById("cross").addEventListener("click", closeForm);
document.getElementById("cross2").addEventListener("click", closeForm);

const openForm = () => {
  document.getElementById("signform").style.display = "block";
  document.getElementById("main").style.filter = "brightness(50%)";
  document.getElementById("main").style.opacity = "0.5";
};

const signForm = () => {
  document.getElementById("logform").style.display = "none";
  document.getElementById("signform").style.display = "block";
};

const logForm = () => {
  document.getElementById("signform").style.display = "none";
  document.getElementById("logform").style.display = "block";
};

const mobileloginForm = () => {
  document.getElementById("signmob").style.display = "block";
  document.getElementById("main").style.filter = "brightness(50%)";
  document.getElementById("main").style.opacity = "0.5";
};

const closemobform = () => {
  document.getElementById("signmob").style.display = "none";
  document.getElementById("main").style.filter = "brightness(100%)";
  document.getElementById("main").style.opacity = "1";
};

const closemobform2 = () => {
  document.getElementById("logmob").style.display = "none";
  document.getElementById("main").style.filter = "brightness(100%)";
  document.getElementById("main").style.opacity = "1";
};
const mobilelogForm = () => {
  document.getElementById("signmob").style.display = "none";
  document.getElementById("logmob").style.display = "block";
};
const mobilesignform = () => {
  document.getElementById("logmob").style.display = "none";
  document.getElementById("signmob").style.display = "block";
};

const buttontoggle = () => {
  if (document.getElementById("buttonlist").style.display == "block") {
    document.getElementById("buttonlist").style.display = "none";
    document.getElementById("buttdot").classList.remove("buttondot");
  } else {
    document.getElementById("buttonlist").style.display = "block";
    document.getElementById("buttdot").classList.add("buttondot");
  }
};

document.getElementById("signup").addEventListener("click", signForm);
document.getElementById("login").addEventListener("click", logForm);
document.getElementById("formopen").addEventListener("click", openForm);
document
  .getElementById("joingrp")
  .addEventListener("click", mobileloginForm);
document.getElementById("closemob").addEventListener("click", closemobform);
document
  .getElementById("closemob2")
  .addEventListener("click", closemobform2);
document
  .getElementById("mobilelogin")
  .addEventListener("click", mobilelogForm);
document
  .getElementById("mobilesignup")
  .addEventListener("click", mobilesignform);
document.getElementById("buttdot").addEventListener("click", buttontoggle);
