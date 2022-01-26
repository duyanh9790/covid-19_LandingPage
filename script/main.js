const start = () => {
  window.addEventListener("scroll", handleScrollHeader)
  handleNavOnMobileTablet()
  window.addEventListener("scroll", handleToggleScrollOnTop)
  handleClickScrollOnTop()
}
document.addEventListener("DOMContentLoaded", start)

const handleScrollHeader = () => {
  let headerElement = document.querySelector(".header")
  if (
    document.body.scrollTop > headerElement.style.height ||
    document.documentElement.scrollTop > headerElement.style.height
  ) {
    headerElement.classList.add("hide")
  } else {
    headerElement.classList.remove("hide")
  }

  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    headerElement.classList.add("header-active")
    headerElement.classList.remove("hide")
  } else {
    headerElement.classList.remove("header-active")
  }
}

const handleNavOnMobileTablet = () => {
  let toggleButton = document.querySelector(".header__btn-toggle-menu")
  let headerNav = document.querySelector(".header__nav__list")
  let closeMenuButton = document.querySelector(".header__nav-btn-close")
  let overlayElement = document.querySelector(".header-overlay")
  let navLinks = document.querySelectorAll(".header__nav-link")
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("touchstart", function () {
      hideNavOnMobileTablet()
    })
  }
  toggleButton.addEventListener("touchstart", function () {
    showNavOnMobileTablet()
  })

  closeMenuButton.addEventListener("touchstart", function () {
    hideNavOnMobileTablet()
  })

  overlayElement.addEventListener("touchstart", function () {
    hideNavOnMobileTablet()
  })

  const showNavOnMobileTablet = () => {
    headerNav.classList.add("show")
    overlayElement.classList.add("active")
  }

  const hideNavOnMobileTablet = () => {
    headerNav.classList.remove("show")
    overlayElement.classList.remove("active")
  }
}

const handleClickScrollOnTop = () => {
  let scrollButton = document.querySelector(".btn-scroll-onTop")
  scrollButton.addEventListener("click", function () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  })
}

const handleToggleScrollOnTop = () => {
  let scrollButton = document.querySelector(".btn-scroll-onTop")
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    scrollButton.classList.add("show")
  } else {
    scrollButton.classList.remove("show")
  }
}
