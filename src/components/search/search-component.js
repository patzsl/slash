class SearchComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <sl-title
        titleValue='Find your <span class="highlight">new job</span> today'
        color='#3575E2'
        subtitleValue='Thousands of jobs in the computer, engineering and technology sectors are waiting for you.'
      ></sl-title>
    `;
  }

  connectedCallback() {
  }
}

customElements.define('search-component', SearchComponent);
