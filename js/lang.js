const translations = {
  pt: {
    home: "Início",
    resume: "Currículo",
    projects: "Projetos",
    hire: "Fale comigo"
  },
  en: {
    home: "Home",
    resume: "Resume",
    projects: "Projects",
    hire: "Onboard me"
  }
};

let currentLang = "pt";

function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem("language", lang);
  currentLang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "pt";
  changeLanguage(savedLang);

  const toggleBtn = document.getElementById("lang-toggle");
  toggleBtn.addEventListener("click", () => {
    const newLang = currentLang === "pt" ? "en" : "pt";
    changeLanguage(newLang);
  });
});
