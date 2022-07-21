const loadData = new APIManager();
let renderData = null;
$('.buttons button:nth-child(1)').click(function () {
  loadData.getAll();
});

$('.buttons button:nth-child(2)').click(function () {
  let renderData = new Renderer(loadData.apiResponses);
});

$('.buttons button:nth-child(3)').click(function () {
  localStorage.setItem('user', JSON.stringify(loadData.apiResponses));
});

$('.buttons button:nth-child(4)').click(function () {
  renderData = new Renderer(JSON.parse(localStorage['user']));
});
