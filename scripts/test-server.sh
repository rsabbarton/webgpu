!#/bin/bash
node ./scripts/create-index.mjs
cd src
http-server --port 8080
cd ..

