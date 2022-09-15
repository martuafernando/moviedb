import styleSheet from '../../style/component/sidebar-list.styles.scss';
import { icon } from '@fortawesome/fontawesome-svg-core';

const style = document.createElement('style');
style.appendChild(document.createTextNode(styleSheet));

class SidebarList extends HTMLElement{
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
      <p>Popular Movies</p>
      <div class="list-item">
        <img src="../asset/jpg/people.jpg" alt="">
        <div>
          <p class="title">John Wick</p>
          <p class="genre">Action, Horror</p>
          <div class="rating">
            ${icon({iconName: 'star' }).html[0]}
            ${icon({iconName: 'star' }).html[0]}
            ${icon({iconName: 'star' }).html[0]}
            ${icon({iconName: 'star' }).html[0]}
            ${icon({iconName: 'star' }).html[0]}
          </div>
        </div>
      </div>
      <div class="list-item">
        <img src="../asset/jpg/people.jpg" alt="">
        <div>
          <p class="title">John Wick</p>
          <p class="genre">Action, Horror</p>
          <div class="rating">
            ${icon({iconName: 'star' }).html[0]}
            ${icon({iconName: 'star' }).html[0]}
            ${icon({iconName: 'star' }).html[0]}
            ${icon({iconName: 'star' }).html[0]}
            ${icon({prefix: 'far', iconName: 'star' }).html[0]}
            <i class="fa-regular fa-star"></i>
          </div>
        </div>
      </div>
      <div class="list-item">
        <img src="../asset/jpg/people.jpg" alt="">
        <div>
          <p class="title">John Wick</p>
          <p class="genre">Action, Horror</p>
          <div class="rating">
            ${icon({iconName: 'star' }).html[0]}
            ${icon({iconName: 'star' }).html[0]}
            ${icon({iconName: 'star' }).html[0]}
            ${icon({iconName: 'star' }).html[0]}
            ${icon({iconName: 'star-half-stroke' }).html[0]}
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
        </div>
      </div>
      <a href="">See More</a>
    `
  }
}

customElements.define('sidebar-list', SidebarList);