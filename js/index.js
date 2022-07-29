//Mobil ekranlarda navbardaki toggle butonu ile menüyü açma ve kapatma
const offcanvasDOM = document.getElementById("offcanvasExample");
const objOffcanvas = new bootstrap.Offcanvas(offcanvasDOM, {
  backdrop: true,
  keyboard: true,
  scroll: false,
});
document
  .getElementById("nav-toggle-btn")
  .addEventListener("click", function () {
    objOffcanvas.show();
  });
document.getElementById("btn-close").addEventListener("click", function () {
  objOffcanvas.hide();
});
//-----------------------------------------------------------------------------
//Mobil ekranlarda search işlemi için kullanılacak olan modal kutusunun kontrolü
const modalDOM = document.getElementById("exampleModal");
const objModal = new bootstrap.Modal(modalDOM, {
  backdrop: true,
  keyboard: true,
  focus: true,
});
document.getElementById("btn-search").addEventListener("click", function () {
  objModal.show();
});
document
  .getElementById("btn-modal-hide")
  .addEventListener("click", function () {
    objModal.hide();
  });
//-----------------------------------------------------------------------------
//Dropdown için gerekli olan javascript
//-----------------------------------------------------------------------------
//function DropdownControl() {
// document.getElementById("myDropdown").classList.toggle("show");
// const TvSes = [
//   "Televizyonlar",
//   "Kulaklıklar",
//   "Hoparlörler",
//   "Ev Sinema Sistemleri",
// ];
// const ul = document.getElementById("dropdown-ul");
// for (let index = 0; index < TvSes.length; index++) {
//   console.log(TvSes[index]);
//   ul.innerHTML =
//     "<ul id='dropdown-ul' class='nav flex-column'><li class='nav-item'><a class='nav-link dropdown-list' href='/'><i class='list-item fa-solid fa-chevron-right'></i>" +
//     TvSes[index] +
//     "</a></li></ul>";
// }
//}
// window.onclick = function (event) {
//   if (!event.target.matches(".dropbtn")) {
//     let dropdowns = document.getElementsByClassName("dropdown-content");
//     let i;
//     for (i = 0; i < dropdowns.length; i++) {
//       let openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };
//-------------------------------------------------------------------------------
const tvSesDOM = document.getElementById("tv-ses-btn");
tvSesDOM.addEventListener("mouseover", function () {
  document.getElementById("tv-ses-dropdown").classList.toggle("show");
  document.getElementById("tv-ses").classList.toggle("active");
  document.getElementById("slider").classList.toggle("no-show");
});
const beyazEsyaDOM = document.getElementById("beyaz-esya-btn");
beyazEsyaDOM.addEventListener("mouseover", function () {
  document.getElementById("beyaz-esya-dropdown").classList.toggle("show");
  document.getElementById("beyaz-esya").classList.toggle("active");
  document.getElementById("slider").classList.toggle("no-show");
});
const ankastreDOM = document.getElementById("ankastre-btn");
ankastreDOM.addEventListener("mouseover", function () {
  document.getElementById("ankastre-dropdown").classList.toggle("show");
  document.getElementById("ankastre").classList.toggle("active");
  document.getElementById("slider").classList.toggle("no-show");
});
const evAletDOM = document.getElementById("ev-alet-btn");
evAletDOM.addEventListener("mouseover", function () {
  document.getElementById("ev-alet-dropdown").classList.toggle("show");
  document.getElementById("ev-alet").classList.toggle("active");
  document.getElementById("slider").classList.toggle("no-show");
});
const isitimaSogutmaDOM = document.getElementById("isitma-sogutma-btn");
isitimaSogutmaDOM.addEventListener("mouseover", function () {
  document.getElementById("isitma-sogutma-dropdown").classList.toggle("show");
  document.getElementById("isitma-sogutma").classList.toggle("active");
  document.getElementById("slider").classList.toggle("no-show");
});
const akilliUrunDOM = document.getElementById("akilli-urun-btn");
akilliUrunDOM.addEventListener("mouseover", function () {
  document.getElementById("akilli-urun-dropdown").classList.toggle("show");
  document.getElementById("akilli-urun").classList.toggle("active");
  document.getElementById("slider").classList.toggle("no-show");
});
const mobilDOM = document.getElementById("mobil-btn");
mobilDOM.addEventListener("mouseover", function () {
  document.getElementById("mobil-dropdown").classList.toggle("show");
  document.getElementById("mobil").classList.toggle("active");
  document.getElementById("slider").classList.toggle("no-show");
});
const digerDOM = document.getElementById("diger-btn");
digerDOM.addEventListener("mouseover", function () {
  document.getElementById("diger-dropdown").classList.toggle("show");
  document.getElementById("diger").classList.toggle("active");
  document.getElementById("slider").classList.toggle("no-show");
});
//Slider kontrolünü sağlamak için gerekli olan Javascript kodları
const myCarousel = document.getElementById("slider");
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 1000,
  keyboard: true,
  pause: "hover",
  touch: true,
});
document.getElementById("prev").addEventListener("click", function () {
  carousel.prev();
});
document.getElementById("next").addEventListener("click", function () {
  carousel.next();
});
