import React from 'react';
import ReactDOM from 'react-dom/client';

const headingReact = React.createElement('h1', {
    id: 'react-header',
    className: 'react-header'
}, 'Hello World from React!');

console.log(headingReact);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(headingReact);

/**
 * Create the Nested Structure With React.createElement
 * 
 * <div class='section-content'>
 *      <div class='section-one'>
 *          <h1 class='header1'>Header Sibling 1</h1>
 *      </div>
 *      <div class='section-two'>
 *          <h2 class='header2'>Header Sibling 2</h2>
 *      </div>
 * </div>
 */

const nestedHeaderElement = React.createElement('div', {
    className: 'section-content'
}, [
    React.createElement('div', {
        className: 'section-one',
        key: 'sec-one'
    }, React.createElement('h1', {
        className: 'header1'
    }, 'Header Sibling 1')),
    React.createElement('div', {
        className: 'section-two',
        key: 'sec-two'
    }, React.createElement('h2', {
        className: 'header2'
    }, 'Header Sibling 2'))
]);

console.log(nestedHeaderElement);

const nestedRoot = ReactDOM.createRoot(document.getElementById('nested-root'));
nestedRoot.render(nestedHeaderElement);
