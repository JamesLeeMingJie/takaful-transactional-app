class Header extends HTMLElement {
  // connectedCallback() is invoked each time the custom element/component is appended into a document-connected element.
  connectedCallback() {
    this.innerHTML = `
    <header class="mx-auto w-10/12 pt-8 pb-20 flex justify-between">
      <img src="../assets/logo.svg" alt="logo" srcset="">
      <div class="flex pr-8">
        <img class="pr-2" src="../assets/images/grid-icon.svg" alt="">
        <div class="relative">
          <img class="pr-2 h-full" src="../assets/images/bell-icon.svg" alt="">
          <img class="absolute top-0 right-[10%]" src="../assets/images/notification-icon.svg" alt="">
        </div>
        <img src="../assets/images/user-icon.svg" alt="">
      </div>
    </header>
    `;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="bg-background-primary text-center text-font-secondary py-4 flex flex-col justify-center">
      <p class="pb-2">Security | Terms & Conditions | Privacy Notice | Customer Service Charter</p>
      <p class="pb-1">Managed by © <span class="text-[#2194FF] underline">Syarikat Takaful Malaysia Keluarga
          Berhad</span>
        198401019089 (131646-K).</p>
      <p class="pb-1">Licensed under the Islamic Financial Services Act 2013 and regulated by Bank Negara Malaysia.</p>
      <p>A <img class="inline-block" src="../assets/images/pidm-logo.svg" alt="pidm-logo"> Member. For more info, please
        refer to <span class="text-[#2194FF] underline">PIDM’s TIPS Brochure</span></p>
    </footer>
    `;
  }
}

customElements.define("main-header", Header);
customElements.define("main-footer", Footer);
