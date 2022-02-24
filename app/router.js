import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('books', function () {
    this.route('show', { path: '/:id' });
  });

  this.route('users', function () {
    this.route('show', { path: '/:id' });
  });
  this.route('user');
});
