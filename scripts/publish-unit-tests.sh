clear
npx mocha > ./src/Engine-Documentation/Unit-Test-Results.txt
sed -i s/should/Should/g ./src/Engine-Documentation/Unit-Test-Results.txt
sed -i s/\ \✔/\\r\\n\#\#\#\#\ ✔/g ./src/Engine-Documentation/Unit-Test-Results.txt
sed -i s/\ \✖/\\r\\n\#\#\#\#\ ✖/g ./src/Engine-Documentation/Unit-Test-Results.txt
sed -i 's/^[\ ]*[a-z]/\#\#&/gi' ./src/Engine-Documentation/Unit-Test-Results.txt
cat ./src/Engine-Documentation/Unit-Test-Results.txt > ./src/Engine-Documentation/Unit-Test-Results.md
rm ./src/Engine-Documentation/Unit-Test-Results.txt
echo "Unit Test Results Published"


