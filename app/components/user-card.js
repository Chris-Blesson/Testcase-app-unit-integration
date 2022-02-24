import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
export default class UserCardComponent extends Component {
    @service('card-selector') cardSelector;
    get userNumber() {
        return parseInt(this.args.index) + 1;
    }

    get showInformation() {
        let currentSelection = this.cardSelector.getCurrentSelection();
        let userId = this.args.user.id;
        return currentSelection === `user-${userId}`;
    }

    @action
    toggleInformation() {
        if(this.showInformation){
              this.cardSelector.clearSelection();
        }
        else{
            let userId  = this.args.user.id;
            this.cardSelector.setCurrentSelection('user', userId);
        }
    }
}
