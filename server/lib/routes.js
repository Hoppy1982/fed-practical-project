module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: function(request, h) {
      return h.view('index', {
        message: 'Hello world'
      });
    }
  },
  {
    method: 'GET',
    path: '/public/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true
      }
    }
  }
];
