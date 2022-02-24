import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import stubbedService from '../../helpers/stub-service';

module('Integration | Component | user-card', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    let user = {
      id: 1,
      fullName: 'Chris Blesson',
      email: '123@something.org',
      dateOfBirth: new Date('1/2/2001'),
      currentSavingsInCents: 1000,
      currentCheckingsInCents: 9000000,
      isOverEighteen: true
    }
    this.set('user', user);
  })
  test('it renders user information', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    await render(hbs`<UserCard @user={{this.user}} />`);
    assert.equal(this.element.querySelector('.md-subhead').textContent.trim(), 'Name: Chris Blesson', 'Name property rendered');
    await click('.md-button');
    assert.ok(this.element.querySelector('.user-content'), 'User information is shown');
    let userFields = this.element.querySelectorAll('h5');
    assert.equal(userFields[0].textContent.trim(), 'Email: 123@something.org');
    assert.equal(userFields[1].textContent.trim(), 'DOB: Tue Jan 02 2001 00:00:00 GMT+0530 (India Standard Time)');
    assert.equal(userFields[2].textContent.trim(), 'Savings: $1,000.00');
    await click('.md-button');
    assert.notOk(this.element.querySelector('.user-content'), 'User information is hidden');
  });

  test('it shows correct user information', async function (assert) {
   
    stubbedService('card-selector', {
      setCurrentSelection() {
      },
      clearSelection() {
      },
      getCurrentSelection() {
        return 'user-1'
      }
    }
    );
    await render(hbs`<UserCard @user={{this.user}} />`);
    assert.ok(this.element.querySelector('.user-content'), 'User information is show');

  })
});
