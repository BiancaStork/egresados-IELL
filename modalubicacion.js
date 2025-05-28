document.addEventListener("DOMContentLoaded", function() {
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
  window.addEventListener("click", function (event) {
    if (event.target === document.getElementById("modalUbicacionFiesta")) {
      document.getElementById("modalUbicacionFiesta").style.display = "none";
    }
  });

  // === MODAL GOOGLE CALENDAR ===
  const linkActo = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Acto+de+Colación+Los+Lapachos&dates=20241217T190000/20241217T200000&details=Acto+de+colación+Los+Lapachos";
  const linkFiesta = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Fiesta+Egresados+Los+Lapachos&dates=20241221T210000/20241221T230000&details=Fiesta+Egresados+Los+Lapachos";

  document.getElementById("openModalGoogleCalendarActo").onclick = function () {
    document.getElementById("modalGoogleCalendar").style.display = "block";
    document.getElementById("googleCalendarLink").href = linkActo;
  };
  document.getElementById("openModalGoogleCalendarFiesta").onclick = function () {
    document.getElementById("modalGoogleCalendar").style.display = "block";
    document.getElementById("googleCalendarLink").href = linkFiesta;
  };
  document.getElementById("closeModalGoogleCalendar").onclick = function () {
    document.getElementById("modalGoogleCalendar").style.display = "none";
  };
  document.getElementById("closeModalFooterGoogleCalendar").onclick = function () {
    document.getElementById("modalGoogleCalendar").style.display = "none";
  };
  window.addEventListener("click", function (event) {
    if (event.target === document.getElementById("modalGoogleCalendar")) {
      document.getElementById("modalGoogleCalendar").style.display = "none";
    }
  });
});
