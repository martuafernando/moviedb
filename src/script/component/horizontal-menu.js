import styleSheet from '../../style/component/horizontal-menu.styles.scss';

const style = document.createElement('style');
style.appendChild(document.createTextNode(styleSheet));

class HorizontalMenu extends HTMLElement{
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(style);
  }

  connectedCallback() {
    this.render();
  }

  render(){
    this.shadowDOM.innerHTML += `
        <a href="" class="active">Movies</a>
        <a href="">TV Series</a>
        <a href="">Animes</a>
        <a href="">Animes</a>
        <a href="">Animes</a>
        <a href="">Animes</a>
        <a href="">Animes</a>
        <a href="">Animes</a>
        <a href="">Animes</a>
        <a href="">Animes</a>
        <a href="">Animes</a>
        <a href="">Animes</a>
        <a href="">Animes</a>
        <a href="">Animes</a>
        <a href="">Animes</a>
        <a href="">Animes</a>
        <a href="">Animes</a>
        <a href="">Animes</a>
        <a href="">Animes</a>
        <a href="">Animes</a>
        <a href="">Animes</a>
        <a href="">Animes</a>
        <a href="">Animes</a>
        <a href="">Animes</a>
        <a href="">Animes</a>
        <a href="">Animes</a>
        <a href="">Animes</a>
        <a href="">Animes</a>
        <a href="">Animes</a>
        <a href="">Animes</a>
    `;
  }
}

customElements.define('horizontal-menu', HorizontalMenu);