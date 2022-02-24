import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';

let originalDateNow;
module('Unit | Model | user', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    originalDateNow = Object.getOwnPropertyDescriptor(Date, 'now');
    Object.defineProperty(Date, 'now', {
      value() {
        return new Date('1/1/2018');
      }
    })
  })

  hooks.afterEach(function () {
    Object.defineProperty(Date, 'now', originalDateNow)
  })

  // Replace this with your real tests.
  test('it checks for age', function (assert) {
    let store = this.owner.lookup('service:store');
    assert.expect(3);
    let model = run(() => store.createRecord('user', {
      attributes: {
        'first-name': 'Bob',
        'last-name': 'Builder',
        'date-of-birth': '1/12/1975',
        'current-savings-amount': 10000,
        'current-checking-amount': 9000000
      }
    }));

    assert.ok(model.get('isOverEighteen'), 'They are over 18');
    assert.equal(model.get('age'), 42, 'Person is 47');
    assert.equal(model.get('fullName'), 'Bob Builder', 'Proper name');
  });
});
