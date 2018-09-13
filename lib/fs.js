'use strict';
const promisify = require('es6-promisify');
const fs = require('fs');


function exists(path, callback) {
    if (!path || typeof path !== 'string') {
        throw new TypeError('path is required!');
    }

    promisify(fs.access).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = {
    exists
};
