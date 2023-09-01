function onScroll(){
  nav = document.getElementById("navigation")
  if(scrollY > 0) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
}
onScroll()

function openMenu(){
  document.body.classList.add('menuExpanded')
  nav = document.getElementById("navigation")
  nav.classList.remove('scroll')
}
function closeMenu(){
  nav = document.getElementById("navigation")
  document.body.classList.remove('menuExpanded')
  onScroll()
}
