const images=document.querySelectorAll(".img")
const containerImage=document.querySelector(".container-img")
const coverImage=document.querySelector(".img-show")
images.forEach(img => {
  img.addEventListener("click",()=>{
    addImage(img.getAttribute("src"))
    
  })
})
const addImage=(src)=>{
  containerImage.classList.toggle("move")
  coverImage.classList.toggle("show")

  coverImage.src=src
}
containerImage.addEventListener("click",()=>{
  containerImage.classList.toggle("move")
  coverImage.classList.toggle("show")

})