// === MODAL ACTO ===
  document.getElementById("openModal").onclick = function () {
    document.getElementById("modalUbicacion").style.display = "block";
  };
  document.getElementById("closeModal").onclick = function () {
    document.getElementById("modalUbicacion").style.display = "none";
  };
  document.getElementById("closeModalFooter").onclick = function () {
    document.getElementById("modalUbicacion").style.display = "none";
  };

  // Cierre al hacer clic fuera del modal ACTO
  window.addEventListener("click", function (event) {
    if (event.target === document.getElementById("modalUbicacion")) {
      document.getElementById("modalUbicacion").style.display = "none";
    }
  });

  // === MODAL FIESTA ===
  document.getElementById("openModalFiesta").onclick = function () {
    document.getElementById("modalUbicacionFiesta").style.display = "block";
  };
  document.getElementById("closeModalFiesta").onclick = function () {
    document.getElementById("modalUbicacionFiesta").style.display = "none";
  };
  document.getElementById("closeModalFooterFiesta").onclick = function () {
    document.getElementById("modalUbicacionFiesta").style.display = "none";
  };

  // Cierre al hacer clic fuera del modal FIESTA
  window.addEventListener("click", function (event) {
    if (event.target === document.getElementById("modalUbicacionFiesta")) {
      document.getElementById("modalUbicacionFiesta").style.display = "none";
    }
  });