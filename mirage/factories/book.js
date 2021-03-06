import { Factory } from 'miragejs';

const bookData = [{
    "type": "book",
    "id": "1",
    "author": "John Doe",
    "genre": "sci-fi",
    "title": "Aliens and Ninjas",
    "price": 1200,
    "description": "Aliens and Ninjas facing off? What could be better?"
}, {
    "type": "book",
    "id": "2",
    "author": "Billy Batson",
    "genre": "horror",
    "title": "Monsters and Zombies",
    "price": 1550,
    "description": "Zombies invaded and then monsters showed up. It was pretty awful"
}, {
    "type": "book",
    "id": "3",
    "author": "Mickey Mouse",
    "genre": "humor",
    "title": "Life is Hard",
    "price": 2150,
    "description": "Being the boss can be tough.  How does one handle it?  Life is hard."
}]

export default Factory.extend({

   data(){
       return bookData;
   }
});
