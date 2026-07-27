// Menu mobile
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Countdown al 6 giugno 2027, ore 11.30
const weddingDate = new Date('2027-06-06T11:30:00+02:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    document.getElementById('countdown').innerHTML = '<p style="font-family:\'Cormorant Garamond\',serif;font-style:italic;font-size:20px;">Ci siamo sposati!</p>';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('cd-days').textContent = days;
  document.getElementById('cd-hours').textContent = hours;
  document.getElementById('cd-min').textContent = minutes;
  document.getElementById('cd-sec').textContent = seconds;
}
updateCountdown();
setInterval(updateCountdown, 1000);

// RSVP form: invio via Formspree (sostituire l'action nell'HTML con il proprio endpoint)
const rsvpForm = document.getElementById('rsvp-form');
const rsvpFeedback = document.getElementById('rsvp-feedback');

rsvpForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitBtn = rsvpForm.querySelector('.btn-submit');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Invio in corso…';

  try {
    const response = await fetch(rsvpForm.action, {
      method: 'POST',
      body: new FormData(rsvpForm),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      rsvpFeedback.hidden = false;
      rsvpFeedback.textContent = 'Grazie! La tua conferma è stata inviata.';
      rsvpFeedback.style.color = 'var(--sage)';
      rsvpForm.reset();
    } else {
      throw new Error('Invio non riuscito');
    }
  } catch (err) {
    rsvpFeedback.hidden = false;
    rsvpFeedback.textContent = 'Qualcosa è andato storto. Riprova oppure scrivici direttamente.';
    rsvpFeedback.style.color = '#a33';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Invia conferma';
  }
});
