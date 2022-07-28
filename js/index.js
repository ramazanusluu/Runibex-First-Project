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
//Dropdown için gerekli olan javascript
function DropdownControl() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
