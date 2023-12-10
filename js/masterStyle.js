const cssFiles = [
  "../css/collapsible.css",
  "../css/custom.css",
  "../css/normalize.css",
  "../css/output.css",
  "../css/swiper.css",
  "../css/tabs.css",
  "../css/form.css",
];

function includeAllStylesheets() {
  const head = document.head || document.getElementsByTagName("head")[0];

  cssFiles.forEach((cssFile) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssFile;
    head.appendChild(link);
  });
}

window.addEventListener("load", includeAllStylesheets);
