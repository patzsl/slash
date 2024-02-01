class NavbarComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        /* Estilos encapsulados */
        :host {
          display: block;
          padding: 10px;
        }

        #container {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-items: center;
        }

        ul {
          display: flex;
          gap: 48px
        }

        li {
          list-style: none;
        }

        .buttons {
          display: flex;
          gap: 16px
        }
      </style>
      <div id="container">
        <logo-component title="namless" alt="logo" src="src/assets/logo.svg"></logo-component>
        <ul></ul>
        <div class="buttons">
          <button-component value="Login"></button-component>
          <button-component value="Sign up" class="primary"></button-component>
        </div>
      </div>
    `;
  }

  static get observedAttributes() {
    return ['menus'];
  }

  connectedCallback() {
    const menus = JSON.parse(this.getAttribute('menus'));
    menus.map(
      menu => {
        const li = document.createElement('li');
        li.textContent = menu;
        this.shadowRoot.querySelector('ul').appendChild(li);
      }
    )
  }
}

customElements.define('navbar-component', NavbarComponent);
