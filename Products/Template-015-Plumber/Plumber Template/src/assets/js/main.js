const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-links');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const themes = [
  { id: 'harbor', label: 'Harbor Blue' },
  { id: 'copper', label: 'Copper Line' },
  { id: 'slate', label: 'Slate Flow' },
  { id: 'fresh', label: 'Fresh Aqua' },
  { id: 'midnight', label: 'Midnight Brass' }
];

const themeButtons = document.querySelectorAll('[data-theme-option]');
const themeCurrentName = document.getElementById('theme-current-name');
const themeStorageKey = 'plumber-template-theme';
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
