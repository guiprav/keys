#!/bin/bash

shopt -s globstar

indexjs-generator src && \
  babel src -d dist && \
  mkdir -p dist/static && \
  cat src/**/*.css >dist/static/keys.css
