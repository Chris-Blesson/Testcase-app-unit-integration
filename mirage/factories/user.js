import { Factory } from 'miragejs';

const userData = [{
    "type": "user",
    "id": "1",
    "attributes": {
        "first-name": "Scott",
        "last-name": "Batson",
        "date-of-birth": "7/30/1986",
        "email": "scott@test.com",
        "current-checking-amount": 10000,
        "current-savings-amount": 1000,
        "notes": null
    }
}, {
    "type": "user",
    "id": "2",
    "attributes": {
        "first-name": "John",
        "last-name": "Doe",
        "date-of-birth": "1/12/1975",
        "email": "john@test.com",
        "current-checking-amount": 530000,
        "current-savings-amount": 1530000,
        "notes": null
    }
}, {
    "type": "user",
    "id": "3",
    "attributes": {
        "first-name": "Jane",
        "last-name": "Doe",
        "date-of-birth": "2/22/2009",
        "email": "jane@test.com",
        "current-checking-amount": 134000,
        "current-savings-amount": 234000,
        "notes": null
    }
}]
export default Factory.extend({

    data(){
        return userData;
    }
});
