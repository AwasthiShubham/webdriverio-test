const assert = require('assert');
describe('facebook.com page',() => {
    it('should have the right title',() => {
        browser.url('https://www.facebook.com/');
        const title = browser.getTitle();
        assert.strictEqual(title, 'Facebook - Log In or Sign Up');
    })
    it('should be able to login',() => {
        const username = browser.$('#email');
        username.setValue('shubhamawasthi06@gmail.com');
        const password = browser.$('#pass');
        password.setValue('randomwriter@me');
        const submitBtn = browser.$('#loginbutton');
        submitBtn.click();
        })
    it('should be able to click on profile',() => {
        const profBtn = browser.$('//a[@title="Profile"]');
        profBtn.waitForExist(10000,false,'Not Found');
        profBtn.click();
    })
    })
