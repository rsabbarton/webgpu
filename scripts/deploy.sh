!#/bin/bash
node ./scripts/create-index.mjs
./scripts/publish-unit-tests.sh

cp -r src/* docs/
git add .
git commit -m 'Auto-Commit on Deploy'
git push
