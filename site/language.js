(() => {
  const storageKey = 'bearproductions-language';
  const pageLanguage = document.documentElement.lang.startsWith('sv') ? 'sv' : 'en';
  const targets = {
    en: document.body.dataset.languageTargetEn,
    sv: document.body.dataset.languageTargetSv,
  };

  document.querySelectorAll('[data-language-switch] a[data-language]').forEach((link) => {
    link.addEventListener('click', () => {
      localStorage.setItem(storageKey, link.dataset.language);
    });
  });

  const savedLanguage = localStorage.getItem(storageKey);
  if (savedLanguage && savedLanguage !== pageLanguage && targets[savedLanguage]) {
    window.location.replace(targets[savedLanguage]);
  }
})();
