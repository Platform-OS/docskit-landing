(()=>{var i=document.querySelector("[data-navigation-toggle]");i&&document.querySelector("[data-navigation-toggle]").addEventListener("click",()=>{document.querySelector("[data-nav-container]").classList.toggle("courses__sidebar--open")});var t=document.querySelector("[data-nav-container]");t&&t.querySelectorAll("[data-nav-container] .module-list__item").forEach(e=>{e.querySelector(".module-list__item-title").addEventListener("click",()=>{e.classList.toggle("module-list__item--active")})});})();
