/* global document */
/* eslint-disable no-undef*/
'use strict';

var assert = require('assert');


function ready (callback) {
  if(typeof document === undefined) {
    console.log('document-ready only runs in the browser');
    return;
  }
  var state = document.readyState;
  if (state === 'complete' || state === 'interactive') {
    return setTimeout(callback, 0);
  }

  document.addEventListener('DOMContentLoaded', function onLoad () {
    callback();
  });
}

module.exports = ready;
