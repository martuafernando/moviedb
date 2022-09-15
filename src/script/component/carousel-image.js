import styleSheet from '../../style/component/carousel-image.styles.scss';
import { icon } from '@fortawesome/fontawesome-svg-core';

const style = document.createElement('style');
style.appendChild(document.createTextNode(styleSheet));

class CarouselImage extends HTMLElement{
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(style);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML += `
      <div class="carousel" aria=label=""Gallery>
        <ol class="carousel__viewport horizontal-list">
          <li id="carousel__slide1" tabindex="0" class="carousel__slide">
            <div class="carousel__snapper"></div>
              <a href="#" class="carousel__next">${icon({iconName: 'chevron-right' }).html[0]}</a>
            <div class="list-item">
              <img src="../asset/jpg/image.jpg" width="100%" alt="" draggable="false">
              <div class="deskripsi">
                <p class="h2">DEADPOOL 1</p>
                <p>Action, Adventure, Comedy, Mantap</p>
                <a class="button-watch" href="">Watch</a>
                <a class="button-add" href="">${icon({iconName: 'plus' }).html[0]}</a>
              </div>
            </div>
          </li>
          <li id="carousel__slide2" tabindex="0" class="carousel__slide">
            <div class="carousel__snapper"></div>
            <a href="#" class="carousel__prev">${icon({iconName: 'chevron-left' }).html[0]}</a>
            <a href="#" class="carousel__next">${icon({iconName: 'chevron-right' }).html[0]}</i></a>
            <div class="list-item">
              <img src="../asset/jpg/image.jpg" width="100%" alt="" draggable="false">
              <div class="deskripsi">
                <p class="h2">DEADPOOL 2</p>
                <p>Action, Adventure, Comedy, Mantap</p>
                <a class="button-watch" href="">Watch</a>
                <a class="button-add" href="">${icon({iconName: 'plus' }).html[0]}</i></a>
              </div>
            </div>
          </li>
          <li id="carousel__slide3" tabindex="0" class="carousel__slide">
            <div class="carousel__snapper"></div>
            <a href="#" class="carousel__prev ">${icon({iconName: 'chevron-left' }).html[0]}</i></a>
            <a href="#" class="carousel__next">${icon({iconName: 'chevron-right' }).html[0]}</i></a>
            <div class="list-item">
              <img src="../asset/jpg/image.jpg" width="100%" alt="" draggable="false">
              <div class="deskripsi">
                <p class="h2">DEADPOOL 3</p>
                <p>Action, Adventure, Comedy, Mantap</p>
                <a class="button-watch" href="">Watch</a>
                <a class="button-add" href="">${icon({iconName: 'plus' }).html[0]}</i></a>
              </div>
            </div>
          </li>
          <li id="carousel__slide4" tabindex="0" class="carousel__slide">
            <div class="carousel__snapper"></div>
            <a href="#" class="carousel__prev">${icon({iconName: 'chevron-left' }).html[0]}</i></a>
            <div class="list-item">
              <img src="../asset/jpg/image.jpg" width="100%" alt="" draggable="false">
              <div class="deskripsi">
                <p class="h2">DEADPOOL 4</p>
                <p>Action, Adventure, Comedy, Mantap</p>
                <a class="button-watch" href="">Watch</a>
                <a class="button-add" href="">${icon({iconName: 'plus' }).html[0]}</i></a>
              </div>
            </div>
          </li>
        </ol>
      </div>
    `;

    const carouselLeft = this.shadowDOM.querySelectorAll('.carousel__prev');
    for(const button of carouselLeft){
      button.addEventListener('click', e =>{
        e.preventDefault();
        const list = button.parentElement.parentElement;
        list.scrollLeft -= list.clientWidth;
      });
    }

    const carouselRight = this.shadowDOM.querySelectorAll('.carousel__next');
    for(const button of carouselRight){
      button.addEventListener('click', e =>{
        e.preventDefault();
        const list = button.parentElement.parentElement;
        list.scrollLeft += list.clientWidth;
      });
    }
  };
};

customElements.define('carousel-image', CarouselImage);