"use strict";
const form = document.querySelector('.form');
const selector = document.querySelector('.selector');
const tofrom = document.querySelector('.tofrom');
const details = document.querySelector('.details');
const amount = document.querySelector('.amount');
const output = document.querySelector('.output');
const ul = document.querySelector('.info');
console.log(selector);
class Customers {
    constructor(c, s, d, a) {
        this.client = c;
        this.selector = s;
        this.dets = d;
        this.amount = a;
    }
    login() {
        if (selector.value === 'Invoice') {
            return `The client ${this.client} wishes to receive ${this.selector.toLowerCase().trim()} for ${this.dets.toLowerCase().trim()}. The invoice includes ${this.amount} $`;
        }
        else if (selector.value === 'Check account') {
            return `The client ${this.client} wishes to ${this.selector.toLowerCase().trim()} for ${this.dets.toLowerCase().trim()}. The check account includes ${this.amount} $`;
        }
        else if (selector.value === 'Receive paycheck') {
            return `The client ${this.client} would like to ${this.selector.toLowerCase().trim()} for ${this.dets.toLowerCase().trim()}. The paycheck includes ${this.amount} $`;
        }
        else {
            return `ERROR`;
        }
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const customer = new Customers(tofrom.value, selector.value, details.value, amount.valueAsNumber);
    console.log(customer.login());
    const li = document.createElement('li');
    li.innerText = customer.login();
    ul.append(li);
    output.style.display = "block"
});
