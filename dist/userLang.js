(() => {
  const lang = navigator.language || navigator.userLanguage;
  const html = document.documentElement;

  if (lang.startsWith("es")) {
    html.setAttribute("lang", "es");
  } else if (lang.startsWith("pt")) {
    html.setAttribute("lang", "pt");
  } else {
    html.setAttribute("lang", "en");
  }
})();
