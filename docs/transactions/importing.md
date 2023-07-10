# Transacties importeren

Er zijn een paar manieren om transacties in het systeem te krijgen. Voor nu is automatische transactie-download nog niet beschikbaar, maar dit zal zeer binnenkort beschikbaar zijn.

## Financiële bestanden importeren

Een snelle manier om transacties te importeren is door in te loggen op de website van je bank en een bestand te downloaden. Consumeer Bewust ondersteunt het importeren van QIF, OFX en QFX bestanden. Je bank staat je waarschijnlijk toe om een van deze formaten te downloaden (OFX/QFX is aanbevolen).

1. Open de rekening waar je transacties in wilt importeren.
2. Druk op de **Importeer** knop en selecteer het bestand.

## CSV-bestanden importeren

Als je bank het downloaden van financiële bestanden niet ondersteunt, kun je in plaats daarvan een CSV-bestand importeren.

1. Open de rekening waar je transacties in wilt importeren.
2. Druk op de **Importeer** knop en selecteer het bestand.
3. Selecteer de **CSV** optie.
4. Stel de velden in om overeen te komen met het CSV-bestand.
  - Laat voor de "CSV Velden" dropdowns, deze als "Kies veld..." om het gerelateerde veld leeg te laten. Selecteer anders de kolom uit je CSV die overeenkomt met elk veld.
  - Als de datum niet correct wordt geïmporteerd (de groene datum is hoe Consumeer Bewust de datum interpreteert), kun je het datumformaat wijzigen om overeen te komen met je CSV-bestand.
  - Als het bestand helemaal niet kan worden geïmporteerd, probeer dan het CSV-scheidingsteken te wijzigen om overeen te komen met je bestand. (Laat het ons weten als je bestand een ander scheidingsteken gebruikt dat niet in de lijst staat!)
  - Je kunt optioneel "Flip bedrag" inschakelen als je alle bedragen in het CSV-bestand wilt negatief maken.
  - Je kunt optioneel "Splits bedrag in aparte inkomende/uitgaande kolommen" inschakelen als je CSV-bestand aparte kolommen heeft voor inkomende en uitgaande bedragen (ook bekend als debet en credit).
  - Je kunt "Vermenigvuldiger toevoegen" inschakelen om een vermenigvuldiger toe te voegen aan alle bedragen in het CSV-bestand. Dit kan nuttig zijn als je een benaderende valutaomzetting wilt maken.
5. Als je tevreden bent met de instellingen, druk op **Importeer**.

![CSV Import](/static/img/import/import-csv@2x.png)

## Handmatig transacties toevoegen

Indien gewenst, kun je handmatig transacties toevoegen. Dit is het meeste werk, maar het stelt je in staat om rekeningen te beheren die misschien niet werken met een andere importmechanisme.

1. Open de rekening waar je transacties aan wilt toevoegen.
2. Druk op de **Nieuwe Toevoegen** knop.
3. Vul de transactie in en druk op **Toevoegen**.

## Dubbele transacties vermijden

Consumeer Bewust zal automatisch proberen dubbele transacties te vermijden. Dit werkt het beste met OFX/QFX-bestanden omdat ze rijke informatie over transacties leveren. Ze geven een **id** dat we kunnen gebruiken om het importeren van duplicaten te vermijden.

Na het controleren van het **id**, zal Consumeer Bewust zoeken naar transacties rond dezelfde datum, met hetzelfde bedrag, en met een vergelijkbare betaler. Als het denkt dat de transactie al bestaat, zal het vermijden om een duplicaat te maken. Dit betekent dat je handmatig een transactie kunt invoeren, en later zal deze worden gekoppeld als je hem importeert uit een bestand.

Het zal altijd de geïmporteerde transactie bevoordelen. Als het overeenkomt met een handmatig ingevoerde transactie, zal het de datum bijwerken om overeen te komen met de geïmporteerde transactie. **Het synchroniseren van datums met je bank is belangrijk** aangezien het je in staat stelt om het saldo op elk moment te vergelijken met je bank.
