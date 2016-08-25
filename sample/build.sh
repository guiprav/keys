#!/bin/sh

export PATH=../node_modules/.bin:$PATH

indexjs-generator src &&  babel src -d dist && \
  cd .. && npm run build
