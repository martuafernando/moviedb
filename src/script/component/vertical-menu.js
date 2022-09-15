import styleSheet from '../../style/component/vertical-menu.styles.scss';
import { icon } from '@fortawesome/fontawesome-svg-core';

const style = document.createElement('style');
style.appendChild(document.createTextNode(styleSheet));

class VerticalMenu extends HTMLElement{
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
      <p>MENU</p>
      <a class="active" href="#">${icon({iconName: 'house' }).html[0]} Home</a>
      <a href="#">${icon({iconName: 'people-group' }).html[0]} Community</a>
      <a href="#">${icon({iconName: 'compass' }).html[0]} Discovery</a>
      <a href="#">${icon({iconName: 'hourglass-half' }).html[0]} Coming Soom</a>
    `
  }
}

customElements.define('vertical-menu', VerticalMenu);