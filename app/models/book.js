import Model, { attr } from '@ember-data/model';

export default class BookModel extends Model {
    @attr('string') author;
    @attr('string') genre;
    @attr('string') title;
    @attr('string') price;
    @attr('string') description;
}
