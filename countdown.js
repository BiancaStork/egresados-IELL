function startCountdown(eventDateStr, countdownElementId) {
  const eventDate = new Date(eventDateStr);
  const countdown = document.getElementById(countdownElementId);

  function pad(num) {
    return num.toString().padStart(2, '0');
  }

  function isSameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
  }

  function updateCountdown() {
    const now = new Date();

    if (now > eventDate && !isSameDay(now, eventDate)) {
      // Evento finalizado (fecha pasada y no es el mismo día)
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
          ¡EVENTO FINALIZADO!
        </div>
      `;

      clearInterval(intervalId);
      return;
    }

    if (isSameDay(now, eventDate)) {
      // Es el día del evento: mostrar horas, minutos y segundos restantes hasta medianoche
      // Calculamos la medianoche siguiente
      const tomorrow = new Date(now);
      tomorrow.setHours(24, 0, 0, 0); // medianoche del siguiente día

      const diff = tomorrow - now;

      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      countdown.innerHTML = `
        <div class="countdown-card">
          <span>00</span>
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
        <div class="countdown-today-text">
          ¡ES HOY!
        </div>
      `;
      return;
    }

    // Antes del día del evento: mostrar días, horas, minutos y segundos restantes
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
