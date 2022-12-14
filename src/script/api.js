class Api {
  apiKey = 'api_key=f840b1b9ca749f93dd7bc7320bf2df65';
  baseUrl = 'https://api.themoviedb.org/3'
  imageBaseUrl = 'https://image.tmdb.org/t/p/w300'

  getData(url, processData, extParameter = ''){
    fetch(`${this.baseUrl}${url}?${this.apiKey}${extParameter}`, { 
      method: "GET",
      headers: {'Content-Type':'application/json;charset=utf-8'},
    })
    .then(response => response.json())
    .then(response => {
        processData(response);
    })
    .catch(err => console.error(err));
  }

  // media_type = all|movie|tv|person
  // time_window = day|week
  getTrending = (media_type, time_window, processData) => {
    this.getData(`/trending/${media_type}/${time_window}`, processData);
  };

  getGenre = (processData) => {
    this.getData(`/genre/movie/list`, processData);
  };

  getNowPlaying = (processData) => {
    this.getData(`/movie/now_playing`, processData);
  };

  getPerson = (keyword, processData) => {
    this.getData(`/search/person`, processData, `&query=${keyword}`);
  };

  getMoviesByGenre = (genre, processData) => {
    this.getData(`/discover/movie`, processData, `&with_genres=${genre}`);
  };
}

export default Api;