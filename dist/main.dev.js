"use strict";

var images = document.querySelectorAll(".img");
var containerImage = document.querySelector(".container-img");
var coverImage = document.querySelector(".img-show");
images.forEach(function (img) {
  img.addEventListener("click", function () {
    addImage(img.getAttribute("src"));
  });
});

var addImage = function addImage(src) {
  containerImage.classList.toggle("move");
  coverImage.classList.toggle("show");
  coverImage.src = src;
};

containerImage.addEventListener("click", function () {
  containerImage.classList.toggle("move");
  coverImage.classList.toggle("show");
});