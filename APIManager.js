class APIManager {
  constructor() {
    this.apiResponses = {};
  }
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getAll() {
    const userApi = 'https://randomuser.me/api/?results=7';
    const quoteApi = 'https://api.kanye.rest';
    const pokemonApi = `https://pokeapi.co/api/v2/pokemon/${this.getRandomIntInclusive(
      1,
      1100
    )}`;
    const aboutApi = 'https://baconipsum.com/api/?type=meat-and-filler&paras=1';
    this.apiResponses.user = this.fetch(userApi);
    this.apiResponses.quote = this.fetch(quoteApi);
    this.apiResponses.pokemon = this.fetch(pokemonApi);
    this.apiResponses.about = this.fetch(aboutApi);
  }

  fetch = function (url) {
    let apiResponse = null;
    $.ajax({
      method: 'GET',
      async: false,
      url: url,
      success: function (data) {
        apiResponse = data;
      },
      error: function (xhr, text, error) {
        console.log(text);
      },
    });
    return apiResponse;
  };
}
