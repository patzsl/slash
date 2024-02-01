class Logo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
           <style>
            :host {
              width: fit-content;
              display: block;
            }
            img {
                max-width: 100%;
                height: auto;
            }
            #container {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: space-between;
                align-items: center;
                width: fit-content;
                gap: 12px;
            }

            h1 {
                font-size: 24px;
                font-weight: 400;
                line-height: 150%;
            }

           </style>
           <div id="container">
               <img src="path_to_image" alt="...">
               <h1 id="title"></h1>
           </div>
        `;
  }

  connectedCallback() {
    const titleSpan = this.shadowRoot.getElementById("title");
    titleSpan.textContent = this.getAttribute("title") || "Logo";
  }

  disconnectedCallback() {
    const titleSpan = this.shadowRoot.getElementById("title");
    titleSpan.textContent = "";
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "title") {
      const titleSpan = this.shadowRoot.getElementById("title");
      titleSpan.textContent = newValue || "Logo";
    } else if (name === "src" && oldValue !== newValue) {
      const img = this.shadowRoot.querySelector("img");
      if (img) {
        img.src = newValue || "path_to_image";
      }
    } else if (name === "alt" && oldValue !== newValue) {
      const img = this.shadowRoot.querySelector("img");
      if (img) {
        img.alt = newValue || "aaa";
      }
    }
  }

  static get observedAttributes() {
    return ["title", "src", "alt"];
  }
}

customElements.define("logo-component", Logo);
