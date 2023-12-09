(() => {
  // courses.js
  var navigationToggle = document.querySelector("[data-navigation-toggle]");
  if (navigationToggle) {
    document.querySelector("[data-navigation-toggle]").addEventListener("click", () => {
      document.querySelector("[data-nav-container]").classList.toggle("courses__sidebar--open");
    });
  }
  var navContainer = document.querySelector("[data-nav-container]");
  if (navContainer) {
    navContainer.querySelectorAll("[data-nav-container] .module-list__item").forEach((listItem) => {
      const trigger = listItem.querySelector(".module-list__item-title");
      trigger.addEventListener("click", () => {
        listItem.classList.toggle("module-list__item--active");
      });
    });
  }
})();
//# sourceMappingURL=courses.js.map
