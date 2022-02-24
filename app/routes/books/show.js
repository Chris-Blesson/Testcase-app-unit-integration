import Route from '@ember/routing/route';

export default class BooksShowRoute extends Route {
    model() {
        return this.store.findAll('user');
    }
}
