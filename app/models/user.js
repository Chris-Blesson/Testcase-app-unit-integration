import Model, { attr } from '@ember-data/model';
export default class UserModel extends Model {

    @attr({}) attributes;

    get firstName() {
        return this.attributes['first-name'];
    }

    get lastName() {
        return this.attributes['last-name'];
    }
    get dateOfBirth() {
        return this.attributes['date-of-birth']
    }

    get email() {
        return this.attributes.email;
    }
    get currentSavingsAmount() {
        return this.attributes['current-savings-amount'];
    }
    get currentCheckingAmount() {
        return this.attributes['current-checking-amount'];
    }
    get notes() {
        return this.attributes.notes;
    }

    get currentSavingsInCents() {
        return this.currentSavingsAmount;
    }

    get currentCheckingsInCents() {
        return this.currentCheckingAmount;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    get age() {
        let birthdate = new Date(this.dateOfBirth);
        let ageDate = Date.now() - birthdate.getTime();
        return Math.abs(new Date(ageDate).getUTCFullYear() - 1970);
    }

    get isOverEighteen() {
        return this.age > 18;
    }


}
