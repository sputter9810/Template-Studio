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
    alert('This is a static demo form. Connect it to your preferred booking handler, backend, or clinic reservation tool for live enquiries.');
  });
}

const themes = [
  { id: 'sage', label: 'Sage' },
  { id: 'eucalyptus', label: 'Eucalyptus' },
  { id: 'sand', label: 'Warm Sand' },
  { id: 'stone', label: 'Stone' },
  { id: 'slate', label: 'Slate' }
];

const themeButtons = document.querySelectorAll('[data-theme-option]');
const themeCurrentName = document.getElementById('theme-current-name');
const themeStorageKey = 'massage-clinic-template-theme';
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
