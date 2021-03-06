#!/bin/bash

# initialize
echo "## initialize" >&2
test -d dist || mkdir dist

# cleenup
echo "## cleanup" >&2
rm -rfv dist/*

# copy resource
echo "## copy resource" >&2
cp -rfv src/manifest.json dist/

# compile
npx tsc
