class AudioPlayer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
      </style>
      <div>
        <slot></slot>
      </div>
    `;
  }

  attachEventListeners() {
    const divElement = this.shadowRoot.querySelector('div');
    divElement.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick(event) {
    // Handle the click event
  }
}

customElements.define('audio-player', AudioPlayer);
