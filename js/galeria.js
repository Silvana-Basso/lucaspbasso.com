var images =["imagenes/galeria1.jpg",
"imagenes/galeria2.jpg" ,
"imagenes/galeria3.jpg",
"imagenes/galeria4.jpg",
"imagenes/galeria19.jpg",
"imagenes/galeria5.jpg",
"imagenes/galeria6.jpg",
"imagenes/galeria7.jpg",
"imagenes/galeria8.jpg",
"imagenes/galeria18.jpg",
"imagenes/galeria9.jpg",
"imagenes/galeria10.jpg",
"imagenes/galeria20.jpg",
"imagenes/galeria11.jpg",
"imagenes/galeria17.jpg" ,
"imagenes/galeria12.jpg",
"imagenes/galeria13.jpg",
"imagenes/galeria14.jpg",
"imagenes/galeria15.jpg" ,
"imagenes/galeria16.jpg" ];
  


  
  var galleryContainer = document.querySelector(".gallery");
  var modal = document.getElementById("myModal");
  var modalContent = document.querySelector(".modal-content");
  
  
  for (var i = 0; i < images.length; i++) {
    var img = document.createElement("img");
    img.src = images[i];
    img.alt = "Imagen " + (i + 1);
    img.dataset.index = i;
    img.onclick = function () {
      var index = parseInt(this.dataset.index);
      openModal();
      currentSlide(index + 1);
    };
    galleryContainer.appendChild(img);
  }
  
 
  for (var i = 0; i < images.length; i++) {
    var slide = document.createElement("div");
    slide.className = "mySlides";
    var img = document.createElement("img");
    img.src = images[i];
    img.style.width = "100%";
    slide.appendChild(img);
    modalContent.appendChild(slide);
  }
  
  function openModal() {
    modal.style.display = "block";
  }
  
  function closeModal() {
    modal.style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }



