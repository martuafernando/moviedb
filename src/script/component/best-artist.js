import styleSheet from '../../style/component/best-artist.styles.scss';
import { icon } from '@fortawesome/fontawesome-svg-core';

const style = document.createElement('style');
style.appendChild(document.createTextNode(styleSheet));

class BestArtist extends HTMLElement{
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
      <div class="title-menu">
        <h3>Best Artist</h3>
        <div class="menu">
          <a class="button-left" href="">${icon({iconName: 'chevron-left' }).html[0]}</i></a>
          <a class="button-right" href="">${icon({iconName: 'chevron-right' }).html[0]}</i></a>
        </div>
      </div>
      <div class="horizontal-list">
        <div class="list-item">
          <img src="../asset/jpg/artist.jpg" alt="" draggable="false">
          <div class="deskripsi">
            <p>Charlize Theron</p>
            <p>+12 Movie</p>
            <div class="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
        </div>

        <div class="list-item">
          <img src="../asset/jpg/artist.jpg" alt="" draggable="false">
          <div class="deskripsi">
            <p>Charlize Theron</p>
            <p>+12 Movie</p>
            <div class="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
        </div>

        <div class="list-item">
          <img src="../asset/jpg/artist.jpg" alt="" draggable="false">
          <div class="deskripsi">
            <p>Charlize Theron</p>
            <p>+12 Movie</p>
            <div class="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
        </div>

        <div class="list-item">
          <img src="../asset/jpg/artist.jpg" alt="" draggable="false">
          <div class="deskripsi">
            <p>Charlize Theron</p>
            <p>+12 Movie</p>
            <div class="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    
    const element = this.shadowDOM.querySelectorAll('.horizontal-list');
    let pos = { top: 0, left: 0, x: 0, y: 0 };
    
    for (const ele of element) {
        const mouseDownHandler = (e) => {
            ele.style.userSelect = 'none';
            ele.style.scrollBehavior = 'auto';
        
            pos = {
                left: ele.scrollLeft,
                top: ele.scrollTop,
                x: e.clientX,
                y: e.clientY,
            };
            
            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        };
        
        const mouseMoveHandler = (e) => {
            const dx = e.clientX - pos.x;
            ele.scrollLeft = pos.left - dx;
        };
        
        const mouseUpHandler = ()  =>{
            ele.style.removeProperty('user-select');
            document.removeEventListener('mousemove', mouseMoveHandler);
            ele.style.scrollBehavior = 'smooth';
        };
        
        ele.addEventListener('mousedown', mouseDownHandler);   
    }

    const buttonRight = this.shadowDOM.querySelectorAll('.button-right');
    for(const button of buttonRight){
      button.addEventListener('click', e =>{
        e.preventDefault();
        const list = button.parentElement.parentElement.nextElementSibling;
        list.scrollLeft += list.clientWidth;
      });
    }

    const buttonLeft = this.shadowDOM.querySelectorAll('.button-left');
    for(const button of buttonLeft){
      button.addEventListener('click', e =>{
        e.preventDefault();
        const list = button.parentElement.parentElement.nextElementSibling;
        list.scrollLeft -= list.clientWidth;
      });
    }
  }
}

customElements.define('best-artist', BestArtist);