#!/bin/sh

export PATH=../node_modules/.bin:$PATH

(cd .. && npm run build) && \
  indexjs-generator src &&  babel src -d dist && \
  browserify dist/client.js >dist/static/bundle.js
