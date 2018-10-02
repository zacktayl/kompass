class kButton extends HTMLElement {
  constructor () {
    super();

    let tmpl = document.createElement('template');

    tmpl.innerHTML = `
      <style>
        :host {
          display: block;
          contain: content;
          width: 150px;
        }
        button {
          color: var(--main-button-color, blue);
          background: var(--main-button-background, white);
        }
      </style>
      <button><slot></slot></button>
    `;

    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(tmpl.content.cloneNode(true));

    this.addEventListener('click', (e) => {
      console.log('clicked', e.target);
    });
  }
}

customElements.define('k-button', kButton);
