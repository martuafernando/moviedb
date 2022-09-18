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

  set movie(movie){
    this._movie = movie;
    this.render();
  }

  render() {
    const carousel = document.createElement('div');
    carousel.classList.add('carousel');
    carousel.setAttribute('aria-label', 'Gallery')

    const carouselViewport = document.createElement('ol');
    carouselViewport.classList.add('carousel__viewport', 'horizontal-list');
    carousel.appendChild(carouselViewport);
    
    this._movie.forEach(movie => {
      const carouselSlide = document.createElement('li');
      carouselSlide.classList.add('carousel__slide');
      carouselSlide.setAttribute('tabindex', '0')
  
      carouselSlide.innerHTML = `
          <div class="carousel__snapper"></div>
            <a href="#" class="carousel__prev">${icon({iconName: 'chevron-left' }).html[0]}</a>
            <a href="#" class="carousel__next">${icon({iconName: 'chevron-right' }).html[0]}</a>
          <div class="list-item">
            <img src="https://image.tmdb.org/t/p/w300${movie.backdrop_path}" width="100%" alt="" draggable="false">
            <div class="deskripsi">
              <p class="h2">${movie.original_title}</p>
              <p>${movie.overview}</p>
              <a class="button-watch" href="">Watch</a>
              <a class="button-add" href="">${icon({iconName: 'plus' }).html[0]}</a>
            </div>
          </div>
      `
  
      carouselViewport.appendChild(carouselSlide);
    });

    this.shadowDOM.appendChild(carousel);

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
  }
}

customElements.define('carousel-image', CarouselImage);