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
