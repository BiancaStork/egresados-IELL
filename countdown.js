function startCountdown(eventDateStr, countdownElementId) {
  const eventDate = new Date(eventDateStr);
  const countdown = document.getElementById(countdownElementId);

  function pad(num) {
    return num.toString().padStart(2, '0');
  }

  function updateCountdown() {
    const now = new Date();

    if (now > eventDate) {
      // Mostrar 00 00 00 00 sin efecto
      countdown.innerHTML = `
        <div class="countdown-card">
          <span>00</span>
          <div class="label">Días</div>
        </div>
        <div class="countdown-card">
          <span>00</span>
          <div class="label">Horas</div>
        </div>
        <div class="countdown-card">
          <span>00</span>
          <div class="label">Minutos</div>
        </div>
        <div class="countdown-card">
          <span>00</span>
          <div class="label">Segundos</div>
        </div>
        <div class="countdown-finished-text">
        ¡Evento finalizado!
        </div>
      `;

      clearInterval(intervalId);
      return;
    }

    const diff = eventDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdown.innerHTML = `
      <div class="countdown-card">
        <span>${pad(days)}</span>
        <div class="label">Días</div>
      </div>
      <div class="countdown-card">
        <span>${pad(hours)}</span>
        <div class="label">Horas</div>
      </div>
      <div class="countdown-card">
        <span>${pad(minutes)}</span>
        <div class="label">Minutos</div>
      </div>
      <div class="countdown-card">
        <span>${pad(seconds)}</span>
        <div class="label">Segundos</div>
      </div>
    `;
  }

  updateCountdown();
  const intervalId = setInterval(updateCountdown, 1000);
}
