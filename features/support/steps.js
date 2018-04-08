var stream = require('stream');

var requestLibrary = require('request');

// features/support/steps.js
const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
 
Given('a bank account for {string} with {int} SEK', function (name, amount) {
    this.addAccount(name)
    this.deposit(name, amount)
});

When('{string} deposits {int} SEK', function (name, amount) {
    this.deposit(name, amount)
});

When('{string} withdraws {int} SEK', function (name, amount) {
    this.deposit(name, -amount)
});

When('we add yearly interest of {int}% for {string}', function (interest, name) {
    this.addInterest(name, interest)
});

Then('the account of {string} should contain {int} SEK', function (name, amount) {
    expect(this.accounts[name]).to.eql(amount)
});

