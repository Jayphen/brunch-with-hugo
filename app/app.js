'use strict';

const Alerty = require('js/alerty');

const App = {
    log(...args) {
        for (let item of args) {
            console.log(item);
        }
    },
    init() {
        this.log(`Wow, ${Alerty.text}`, 'amazing');
    }
};

module.exports = App;
