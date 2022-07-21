class Renderer {
  constructor(response) {
    this.emptyContainers();
    this.renderAll(response);
  }

  renderAll(apiResponses) {
    this.renderUser(apiResponses.user.results);
    this.renderQuote(apiResponses.quote);
    this.renderPokemon(apiResponses.pokemon);
    this.renderAbout(apiResponses.about);
  }

  renderTemplate(templateName, data, dom) {
    const source = templateName.html();
    const template = Handlebars.compile(source);
    let newHTML = template(data);
    dom.append(newHTML);
  }

  renderUser(response) {
    this.renderTemplate($('#User-template'), response[0], $('.user-container'));
    this.renderTemplate(
      $('#Friends-template'),
      { elements: response.slice(1) },
      $('.friends-container')
    );
  }

  renderQuote(response) {
    this.renderTemplate(
      $('#Quote-template'),
      { text: response.quote },
      $('.quote-container')
    );
  }

  renderPokemon(response) {
    const name =
      response.name[0].toUpperCase() + response.name.slice(1).toLowerCase();
    this.renderTemplate(
      $('#Pokemon-template'),
      { name, imgUrl: response.sprites.front_default },
      $('.pokemon-container')
    );
  }

  renderAbout(response) {
    this.renderTemplate(
      $('#About-template'),
      { text: response[0] },
      $('.meat-container')
    );
  }

  emptyContainers() {
    $('.user-container').empty();
    $('.quote-container').empty();
    $('.pokemon-container').empty();
    $('.meat-container').empty();
    $('.friends-container').empty();
  }
}
