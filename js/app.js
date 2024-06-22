window.addEventListener("scroll", function(){
    let nav = document.querySelector('#nav')
    nav.classList.toggle("rolagem", window.scrollY > 0)
})
  