class TitleComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <style>
          /* Estilos encapsulados */
          h1 {
            font-weight: bold;
            font-size: 56px;
            line-height: 150%;   
            margin-bottom: 0px
          }
          h3 {
            margin: 0px 0px 40px 0px;
            font-weight: 400;
            font-size: 18px;
          }
          .highlight {
            color: var(--highlight-color, #000);
          }
        </style>
    `;
  }

  connectedCallback() {
    const title = document.createElement("h1");
    const subtitle = document.createElement("h3");
    const titleValue = this.getAttribute("titleValue") || "Title";
    const subtitleValue = this.getAttribute("subtitleValue");
    const color = this.getAttribute("color") || "#000";
    title.insertAdjacentHTML("beforeend", titleValue);
    this.setHighlightColor(color);

    if(subtitleValue) {
        subtitle.insertAdjacentHTML("beforeend", subtitleValue);
    }
    this.shadowRoot.appendChild(title);
    this.shadowRoot.appendChild(subtitle);
  }

  setHighlightColor(color) {
    this.style.setProperty('--highlight-color', color);
  }
}

customElements.define("sl-title", TitleComponent);