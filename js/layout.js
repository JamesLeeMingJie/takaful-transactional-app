class Header extends HTMLElement {
  // connectedCallback() is invoked each time the custom element/component is appended into a document-connected element.
  connectedCallback() {
    this.innerHTML = `
      <header>Hello from the head<header>
    `;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>Hello from the footer<footer>
    `;
  }
}

customElements.define("main-header", Header);
customElements.define("main-footer", Footer);
