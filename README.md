"# alexa-mtz"


filter dump:
cat dump.txt | grep -oP '^"(.*?)" ' |  tr -d - > filtered.txt
