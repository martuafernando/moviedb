import styleSheet from '../../style/component/search-field.styles.scss';
import { icon } from '@fortawesome/fontawesome-svg-core';

const style = document.createElement('style');
style.appendChild(document.createTextNode(styleSheet));

class SearchField extends HTMLElement{
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(style);
  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.shadowDOM.innerHTML += `
      ${icon({iconName: 'magnifying-glass' }).html[0]}
      <input class="" type="text" name="" id="" placeholder="Search">
    `
  }
}

customElements.define('search-field', SearchField);