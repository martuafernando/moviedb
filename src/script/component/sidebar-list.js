import styleSheet from '../../style/component/sidebar-list.styles.scss';
import { icon } from '@fortawesome/fontawesome-svg-core';

const style = document.createElement('style');
style.appendChild(document.createTextNode(styleSheet));

function getStar(star){
  star = parseFloat(star);
  star = star/2;
  let res = '';
  let i;
  for(i=0; i<star; i++){
    res += `${icon({iconName: 'star' }).html[0]}`;
  }

  if((star-i)>0.49) res += `${icon({iconName: 'star-half-stroke' }).html[0]}`;
  else res += `${icon({prefix: 'far', iconName: 'star' }).html[0]}`

  while(i < 4){
    res += `${icon({prefix: 'far', iconName: 'star' }).html[0]}`;
    i++;
  }
  return res;
}

class SidebarList extends HTMLElement{
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(style);
  }

  set movie(movie){
    this._movie = movie;
    console.log(movie);
    this.render();
  }

  render(){
    this.shadowDOM.innerHTML += `
    <p>Popular Movies</p>`
    
    for(let i=0; i<4; i++) {
      this.shadowDOM.innerHTML += `
        <div class="list-item">
          <img src="https://image.tmdb.org/t/p/w300${this._movie[i].poster_path}" alt="">
          <div>
            <p class="title">${this._movie[i].title}</p>
            <p class="genre">${this._movie[i].release_date}</p>
            <div class="rating">
              ${getStar(this._movie[i].vote_average)}
            </div>
          </div>
        </div>`
    }

    this.shadowDOM.innerHTML += `
      <a href="">See More</a>
    `
  }
}

customElements.define('sidebar-list', SidebarList);