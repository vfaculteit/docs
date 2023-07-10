# Regels

Regels bepalen hoe een transactie wordt verwerkt. Bij het importeren of synchroniseren van transacties, worden ze door een lijst met regels uitgevoerd die acties op de transactie kunnen toepassen. Bijvoorbeeld, een regel kan een transactie verwerken met de begunstigde `AMAZON.COM*5C7QC7MH0 AM 10/26 PURCHASE AMZN.COM/BILL`, en omdat het het woord "amazon" bevat, zet het de begunstigde op "Amazon" en de categorie op "mijn leuke dingen". Regels stellen u in staat om elke workflow die u wilt te automatiseren.

Het opschonen van begunstigden is een veelvoorkomend gebruik van regels, aangezien ze vaak lelijk zijn. Maar regels kunnen alles doen: ze kunnen het veld "notities" instellen, een overdracht maken, en meer. Als u super gedetailleerd wilt zijn, kunt u allerlei regels maken om uw proces te automatiseren.

Hier is het beste deel: u hoeft misschien nooit regels aan te raken. Consumeer Bewust zal **automatisch regels voor u maken** op basis van uw gedrag. Naarmate u begunstigden hernoemt of transacties categoriseert, zal het regels gebruiken als een mechanisme om op te schrijven wat u heeft gedaan, zodat het later automatisch gebeurt. Bijvoorbeeld, als u de begunstigde "Kroger" een paar keer als "Food" categoriseert, zal het een regel maken om die categorie automatisch toe te passen bij het importeren. Naarmate u Consumeer Bewust meer gebruikt, zullen uw gegevens automatisch voor u worden opgeschoond op basis van uw vorige gedrag.

Uiteindelijk kunt u gewoon transacties importeren en snel uw uitgaven zien zonder veel repetitief werk te hoeven doen om up-to-date te blijven.

Het op een na beste deel is dat omdat u uiteindelijk de regels bezit, u vrij bent om in te gaan en de regels te wijzigen die Consumeer Bewust voor u heeft gemaakt. We laten u hieronder in meer detail zien hoe dit werkt.

## Hoe regels werken

U kunt alle regels bekijken door te gaan naar Bestand > Regels beheren... (In de browser, open het systeemmenu in de bovenkant van de zijbalk.

Wanneer een transactie wordt geïmporteerd, wordt deze uitgevoerd tegen alle regels **in de volgorde waarin u ze ziet**. Als alle voorwaarden van een regel overeenkomen (de linkerkant), dan worden alle acties uitgevoerd (de rechterkant). De transactie wordt veranderd, en dan gaat het verder met het uitvoeren van de rest van de regels. Elke regel wordt altijd slechts één keer uitgevoerd. Aan het einde zal de transactie worden bijgewerkt met wijzigingen van alle overeenkomende regels.

Als er een conflict is, bijvoorbeeld als twee regels de categorie instellen, zal de regel die als laatste wordt uitgevoerd altijd winnen.

Regels worden **automatisch gerangschikt** van minst tot meest specifiek. Als de voorwaarden van één regel breed toepasbaar zijn, terwijl de voorwaarden van een andere specifieker zijn, zal de laatste altijd _na_ de eerste worden uitgevoerd, zodat de wijzigingen altijd winnen. Dit betekent dat u een brede regel kunt maken zoals "als de begunstigde van een transactie 'cat' bevat, stel dan de categorie in op 'pets'", en dan een mismatch-transactie kunt corrigeren met een andere regel die zegt "als de begunstigde 'catan' is, stel dan de categorie in op 'games'". Een "is" voorwaarde rangschikt altijd hoger dan "bevat". Over het algemeen hoeft u zich hier geen zorgen over te maken en zou het moeten werken zoals u verwacht.

Hoewel rangschikken voor het grootste deel werkt, wilt u misschien zeggen "deze regel moet _altijd_ als laatste worden uitgevoerd, wat er ook gebeurt". Consumeer Bewust maakt dit mogelijk met **stadia**. Regels worden eigenlijk in 3 stadia uitgevoerd: `pre`, normaal, en `post`. Door een regel als `pre` of `post` te taggen, dwingt u het om altijd voor of na de regels in de andere stadia uit te voeren. Binnen een stadium worden regels nog steeds automatisch gerangschikt.

### Velden

Voorwaarden kunnen de volgende velden gebruiken:

- account
- geïmporteerde begunstigde
- begunstigde
- datum
- notities
- bedrag
- bedrag (instroom)
- bedrag (uitstroom)

`geïmporteerde begunstigde` verschilt van `begunstigde` in die zin dat het _altijd_ de originele tekst is van het veld begunstigde of beschrijving wanneer de transactie werd geïmporteerd. `begunstigde` verwijst naar een begunstigde in Consumeer Bewust. Dit is belangrijk omdat het je in staat stelt een begunstigde te hernoemen voordat deze in Consumeer Bewust wordt gecreëerd. Je kunt verschillende regels hebben die allemaal `geïmporteerde begunstigde` controleren en de begunstigde naar iets instellen zonder je zorgen te maken over overlap. (Voorwaarden kunnen `begunstigde` niet betrouwbaar controleren als eerdere regels het hebben gewijzigd)

De `instroom` en `uitstroom` versies van `bedrag` maken het gemakkelijker om met bedragen te werken. Als je alleen kosten wilt matchen tussen 5 en 10 dollar, gebruik dan `bedrag (uitstroom)` omdat dat geld de rekening verlaat. Als je `bedrag` gebruikt, moet je negatieve getallen gebruiken en dat is simpelweg minder handig.

Alle tekenreeksen worden overeenkomst ongevoelig gematched. Een `geïmporteerde begunstigde` van "PuBlix" zal overeenkomen met een voorwaarde die "bevat 'publix'" is.

Acties kunnen de volgende velden instellen:

- begunstigde
- notities
- datum
- bedrag
- categorie
- account
- afgehandeld

## Automatische regels

Op dit moment zijn er twee soorten regels die Consumeer Bewust automatisch voor je zal aanmaken of bijwerken: het hernoemen van begunstigden en het categoriseren van transacties.

Wanneer je de begunstigde van een transactie wijzigt en de vorige wordt nergens anders meer gebruikt, zal Consumeer Bewust je vragen of je wilt dat die hernoeming in de toekomst automatisch wordt toegepast. Dit creëert een prettige flow voor het opruimen van transacties: je kunt transacties importeren met lelijke begunstigden zoals `AMAZON.COM*5C7QC7MH0 AM 10/26 AANKOOP AMZN.COM/BILL`, en vervolgens de begunstigde in de transactielijst wijzigen. Consumeer Bewust zal je vragen of je dat in de toekomst wilt doen, en als je op ja klikt, zal die begunstigde in de toekomst automatisch worden opgeschoond.

In de prompt kun je ook de optie "bewerk regel" selecteren. Consumeer Bewust neemt je mee naar de regel die het heeft gemaakt voor de hernoeming, en je kunt deze naar wens wijzigen. Voor de bovenstaande begunstigde wil je waarschijnlijk de voorwaarde veranderen in "bevat 'amazon'" zodat alle amazon begunstigden worden opgeschoond.

Regels voor het hernoemen van begunstigden die Consumeer Bewust aanmaakt, bevinden zich altijd in het `pre` stadium, dus ze worden altijd eerst uitgevoerd.

Consumeer Bewust maakt ook regels aan/bij voor het categoriseren van transacties. Wanneer je een transactie categoriseert, bepaalt het de beste categorie voor een transactie (in wezen de meest voorkomende) en maakt een regel aan die de categorie instelt voor de begunstigde. Als er al een regel bestaat voor de begunstigde, wordt de in te stellen categorie bijgewerkt.

Na verloop van tijd zouden de meeste categorieën automatisch voor je ingesteld moeten worden, wat veel tijdrovend werk bespaart.

Categorisatie regels worden altijd gemaakt in de standaardfase. Aangezien regels voor het hernoemen van begunstigden `pre` zijn, worden ze altijd eerst uitgevoerd, ongeacht wat. In dit geval willen we ze niet automatisch rangschikken, omdat we altijd willen dat de begunstigde is ingesteld voordat de categorieregels worden uitgevoerd.

Natuurlijk ben je vrij om de regels naar wens te bewerken. Verander de ingestelde categorie voor een begunstigde, of pas de hernoemingsregels aan. Actual is er om te helpen, maar uiteindelijk heb je de controle.

Als Actual iets doet dat je simpelweg niet bevalt, maak dan een `post` regel om het te dwingen om na alles te draaien. Je zou zelfs automatische categorisatie volledig kunnen uitschakelen door een `post` regel te maken die overeenkomt met een `datum` van vandaag of later (zodat alle transacties overeenkomen) en stelt de categorie in op `null`.

## Regels beheren

### Een regel aanmaken

Om een regel te maken, ga naar Bestand > Beheer regels... om alle regels te bekijken en klik op "Maak nieuwe regel" rechtsonder. Je zult nu een nieuwe regel bewerken.

### Een regel bewerken

Bij het bekijken van een lijst met regels, klik je op de knop "bewerken" aan de rechterkant om een regel te bewerken. Het scherm "regel bewerken" geeft alle voorwaarden en acties weer in een bewerkbaar formaat. Je kunt acties en voorwaarden toevoegen/verwijderen, operatoren of waarden wijzigen, en meer.

Dit scherm geeft ook alle transacties weer die momenteel aan de voorwaarden voldoen. Dit geeft je uitstekende feedback als je voorwaarden werken zoals je verwacht.

Je kunt zelfs handmatig alle acties op de transacties toepassen. Je moet de transacties uit de lijst selecteren die je wilt wijzigen (klikken in de koptekst selecteert ze allemaal) en klikken op "Pas acties toe". Dit is handig als je wilt dat de regel van toepassing is op enkele bestaande transacties.

### Een regel verwijderen

Om een regel te verwijderen, ga je naar Bestand > Regels Beheren... om alle regels te bekijken en selecteer je degene die je wilt verwijderen. Klik op de knop "Verwijder # regels" om ze te verwijderen.

### Regels voor een betaler bekijken

Om de lijst van regels te bekijken die van toepassing zijn op een specifieke betaler, ga je naar Bestand > Betrokken partijen beheren... om de lijst van betrokken partijen te bekijken. Deze tabel laat zien welke betalers regels aan hen gekoppeld hebben, en je kunt klikken op "# geassocieerde regels" om de regels alleen voor die betaler te bekijken.

## De regel editor gebruiken voor geavanceerd batch bewerken

Dit verdient zijn eigen sectie omdat dit een verrassend gebruik bleek te zijn. Omdat de regel editor je een lijst laat zien van transacties die voldoen aan de voorwaarden, en je toestaat om acties handmatig toe te passen op sommige of alle van hen, blijkt het een geweldige "batch editor" te zijn.

Dat betekent dat als je veel werk moet doen over veel transacties in één keer, je de regel editor moet proberen. Terwijl je individuele transacties kunt selecteren in het account scherm en snel één veld kunt veranderen, is dat meer gericht op het veranderen van één veld over een klein aantal transacties. In de regel editor kun je een willekeurig aantal acties in één keer toepassen en krijg je een duidelijk overzicht van welke transacties aan het veranderen zijn.

Om dit te doen ga je naar Bestand > Regels Beheren... en klik je op "Nieuwe regel maken". Je zult niet echt een nieuwe regel aan het maken zijn, maar je zult de regel editor tot je beschikking hebben voor snel bulk bewerken.
