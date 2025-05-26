document.addEventListener('DOMContentLoaded', function () {
  const btnIngresar = document.getElementById('btnIngresar');
  const welcomeScreen = document.getElementById('welcome-screen');
  const loader = document.getElementById('loader');
  const invitation = document.getElementById('invitation');

  btnIngresar.addEventListener('click', function () {
    // Ocultar pantalla de bienvenida
    welcomeScreen.style.display = 'none';

    // Mostrar loader
    loader.style.display = 'flex';

    // Si la página ya está cargada completamente
    if (document.readyState === 'complete') {
      mostrarInvitacion();
    } else {
      // Esperar a que carguen todos los recursos
      window.addEventListener('load', mostrarInvitacion);
    }
  });

  function mostrarInvitacion() {
    // Ocultar loader
    loader.style.display = 'none';

    // Mostrar contenido principal
    invitation.style.display = 'block';
  }
});
