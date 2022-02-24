import Controller from '@ember/controller';

export default class UsersController extends Controller {

    get firstName(){
        return this.model['first-name'];
    }
}
