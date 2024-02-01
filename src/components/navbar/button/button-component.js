class ButtonComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        button {
            border: 1px solid rgba(20,20,20,0.1);
            background: none;
            outline: none;
            padding: 8px 20px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 500;
            font-size: 16px;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03);
        }

        .primary {
            background: #3575E2;
            color: #fff;
        }
      </style>
    `;
  }

  connectedCallback() {
    const button = document.createElement("button");
    button.textContent = this.getAttribute("value") || "Button";
    button.className = this.getAttribute("class") || "Button";
    button.type = this.getAttribute("type") || "button";
    this.shadowRoot.appendChild(button);
  }

  static get observedAttributes() {
    return ["value"];
  }
}

customElements.define("button-component", ButtonComponent);
