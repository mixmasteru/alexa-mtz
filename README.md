# alexa-mtz

## Short Skill Description
Interessante und witzige Zitate von Mark Twain

![Mark Twain](https://github.com/mixmasteru/alexa-mtz/blob/master/img/icon_s.png)

## Full Skill Description
A description of the skill's purpose and features, and how it works. Should describe any prerequisites like hardware or account requirements and detailed steps for the customer to get started. For Flash Briefing skills, list the feeds offered within the skill. Use a conversational tone and correct grammar and punctuation. This description displays to customers on the skill detail card in the Alexa app.	

Der Autor und Mark Twain war ein US-amerikanischer Schriftsteller mit dem bürgerlichen Namen Samuel Langhorne Clemens. Er wurde am 30. November 1835 in Florida, Missouri geboren und starb am 21. April 1910 in Redding, Connecticut.

Von ihm stammen ein Menge interessanter und z.T. witziger Zitate. Dieser Skill kann zufällig eine Auswahl wieder geben.

Alle Zitat sind gemeinfrei und mit Quellenangabe abrufbar unter: https://de.wikiquote.org/wiki/Mark_Twain. Das Icon basiert auf dem ebenfalls gemeinfreien Foto von F.Bradley https://commons.wikimedia.org/wiki/File:Mark_Twain_by_AF_Bradley.jpg

## Example Phrases
* Alexa frage Twain Zitate nach einem Zitat
* Alexa frage Twain Zitate nach einem Zitat von Mark Twain
* Alexa was hat Mark Twain gesagt


### filter dump
```
cat dump.txt | grep -oP '^"(.*?)" ' |  tr -d - > filtered.txt
```
