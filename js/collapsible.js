/* Certificate collapsible */
const coll = document.getElementsByClassName("certificate-collapsible");
const collContent = document.getElementsByClassName("certificate-content");
const collPadding = document.getElementsByClassName("certificate-padding");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    const content = this.nextElementSibling;

    content.classList.toggle("active");

    const parentElement = this.closest(".certificate-padding");

    parentElement.classList.toggle("active");
  });
}
