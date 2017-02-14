import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes'

const root = document.getElementById('app');

ReactDOM.render(routes, root);

const promise = new Promise((resolve, reject) => {
    let num = 5;
    setTimeout(() => {
        resolve(num);
    }, 1000);

    setTimeout(() => {
        reject(num);
    }, 500);
});

promise.then((err) => console.log('resolved: ' + err), (result) => console.log('rejected: ' + result))
