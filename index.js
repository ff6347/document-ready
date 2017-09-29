/* global document */
/* eslint-disable no-undef */
'use strict';

function ready(callback) {
  if (typeof document === undefined) {
    console.log('document-ready only runs in the browser');
    return;
  }
  const state = document.readyState;
  if (state === 'complete' || state === 'interactive') {
    return setTimeout(callback, 0);
  }

  document.addEventListener('DOMContentLoaded', () => {
    callback();
  });
}

module.exports = ready;
