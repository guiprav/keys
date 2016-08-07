#!/bin/sh
../node_modules/.bin/indexjs-generator src && \
../node_modules/.bin/babel src -d dist && \
cd .. && npm run build
