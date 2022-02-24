import Component from '@glimmer/component';

export default class BookCardComponent extends Component {


    get bookNumber() {
        return parseInt(this.args.index) + 1;
    }
}
