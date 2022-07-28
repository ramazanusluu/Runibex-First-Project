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
document
  .getElementById("tv-ses-btn")
  .addEventListener("mouseover", function () {
    console.log("Tv - Ses Butonu üzerine hover olundu");
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("tv-ses").classList.toggle("active");
  });
