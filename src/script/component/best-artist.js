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

  set artist(artist){
    this._artist = artist;
    this.render();
  }

  render(){
    this.shadowDOM.innerHTML += `
      <div class="title-menu">
        <h3>Artist</h3>
        <div class="menu">
          <a class="button-left" href="">${icon({iconName: 'chevron-left' }).html[0]}</i></a>
          <a class="button-right" href="">${icon({iconName: 'chevron-right' }).html[0]}</i></a>
        </div>
      </div>`

    const horizontalList = document.createElement('div');
    horizontalList.classList.add('horizontal-list');

    this._artist.forEach(artist => {
      if(artist.profile_path == null){
        horizontalList.innerHTML += `
        <div class="list-item">
          <img src="../asset/jpg/people.jpg" alt="" draggable="false">
          <div class="deskripsi">
            <p>${artist.name}</p>
            <p>${artist.known_for.length} Movie</p>
          </div>
        </div>
        `
      }else{
        horizontalList.innerHTML += `
        <div class="list-item">
          <img src="https://image.tmdb.org/t/p/w300/${artist.profile_path}" alt="" draggable="false">
          <div class="deskripsi">
            <p>${artist.name}</p>
            <p>${artist.known_for.length} Movie</p>
            <div class="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
        `
      }
    });

    this.shadowDOM.appendChild(horizontalList);
    
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