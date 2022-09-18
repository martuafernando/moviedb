import styleSheet from '../../style/component/horizontal-menu.styles.scss';

const style = document.createElement('style');
style.appendChild(document.createTextNode(styleSheet));

class HorizontalMenu extends HTMLElement{
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(style);
  }

  set genre(genre){
    this._genre = genre;
    this.render();
  }

  get activeGenre(){
    return this.shadowDOM.querySelector('a.active').textContent;
  }

  render(){
    this._genre.forEach(element => {
      this.shadowDOM.innerHTML += `
          <a href="#">${element.name}</a>
      `;
    });
    this.shadowDOM.querySelector('a').classList.add('active');
  }
}

customElements.define('horizontal-menu', HorizontalMenu);