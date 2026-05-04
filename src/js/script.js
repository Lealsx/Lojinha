// Navbar ao scrollar
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Menu mobile
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Filtro de produtos
document.querySelectorAll('.filtro-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filtro = btn.dataset.filtro;
    document.querySelectorAll('.produto-card').forEach(card => {
      const match = filtro === 'todos' || card.dataset.categoria === filtro;
      card.classList.toggle('hidden', !match);
    });
  });
});

// Formulário
function enviarFormulario(event) {
  event.preventDefault();
  const feedback = document.getElementById('formFeedback');
  feedback.textContent = '✓ Mensagem enviada! Entraremos em contato em breve 🌿';
  event.target.reset();
  setTimeout(() => { feedback.textContent = ''; }, 6000);
}

// Animação de entrada ao scrollar
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.produto-card, .dif-item, .feature-item, .info-linha, .info-card').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
  observer.observe(el);
});
