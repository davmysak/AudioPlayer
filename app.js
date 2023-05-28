class MyComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
        this.handleClick = this.handleClick.bind(this);
    }
    connectedCallback() {
        this.render();
        this.attachEventListeners();
    }
    render() {
        this.shadowRoot.innerHTML = `
      <style>
        /* Add your component styles here */
        :host {
          display: block;
        }
      </style>
      <div>
        <!-- Add your component's HTML structure here -->
        <slot></slot>
      </div>
    `;
    }
    attachEventListeners() {
        const divElement = this.shadowRoot.querySelector('div');
        divElement.addEventListener('click', this.handleClick);
    }
    handleClick(event) {
        // Handle the click event
    }
}
customElements.define('my-component', MyComponent);
