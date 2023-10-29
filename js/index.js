function Menu() {
  if (document.getElementById("navegador").className == "desplegado") {
    document.getElementById("navegador").className = "";
    document.getElementById("botonHamburguesa").innerHTML =
      '<i class="fa-solid fa-bars"></i>';
  } else {
    document.getElementById("navegador").className = "desplegado";
    document.getElementById("botonHamburguesa").innerHTML =
      '<i class="fa-solid fa-xmark"></i>';
  }
}

window.addEventListener("scroll", function () {
  const header = document.querySelector(".fixed-header");
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

gsap.registerPlugin(ScrollTrigger);

const imagesBanner = gsap.utils.toArray(".imagenBanner");

gsap.utils.toArray(".bannerIndex").forEach((section, index) => {
  const w = section.querySelector(".imagenesBanner");
  const [x, xEnd] = [w.scrollWidth * -1, 0];
  gsap.fromTo(
    w,
    { x },
    {
      x: xEnd,
      scrollTrigger: {
        trigger: section,
        scrub: 1,
      },
    }
  );
});

imagesLoaded(imagesBanner)
  .on("progress", updateProgress)
  .on("always", showDemo);

//////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
