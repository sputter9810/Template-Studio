const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('This is a static demo form. Connect it to your preferred backend or booking handler for live pilates class enquiries.');
  });
}

const themes = [
  { id: 'sand', label: 'Sand' },
  { id: 'sage', label: 'Sage' },
  { id: 'rose', label: 'Rose' },
  { id: 'stone', label: 'Stone' },
  { id: 'olive', label: 'Olive' }
];

const themeButtons = document.querySelectorAll('[data-theme-option]');
const themeCurrentName = document.getElementById('theme-current-name');
const themeStorageKey = 'pilates-studio-template-theme';
const defaultTheme = themes[0].id;

function getThemeLabel(themeId) {
  const match = themes.find((theme) => theme.id === themeId);
  return match ? match.label : themes[0].label;
}

function syncThemeButtons(activeTheme) {
  themeButtons.forEach((button) => {
    const isActive = button.getAttribute('data-theme-option') === activeTheme;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function applyTheme(themeId) {
  document.body.setAttribute('data-theme', themeId);
  if (themeCurrentName) {
    themeCurrentName.textContent = getThemeLabel(themeId);
  }
  syncThemeButtons(themeId);
}

const savedTheme = localStorage.getItem(themeStorageKey);
const initialTheme = themes.some((theme) => theme.id === savedTheme) ? savedTheme : defaultTheme;
applyTheme(initialTheme);

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const nextTheme = button.getAttribute('data-theme-option');
    applyTheme(nextTheme);
    localStorage.setItem(themeStorageKey, nextTheme);
  });
});
