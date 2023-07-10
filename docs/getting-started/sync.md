# Synchronisatie tussen apparaten

Consumeer Bewust is een ander soort app. In plaats van al je gegevens standaard op het internet op te slaan, slaat het al je gegevens lokaal op. Dat betekent dat het werkt ongeacht je netwerkverbinding, en dat je altijd directe toegang hebt tot je gegevens.

We willen het internet echter niet weggooien. Het is te nuttig. Wanneer je gegevens in de cloud zijn opgeslagen, kun je er gemakkelijk vanaf elk apparaat toegang toe krijgen, en hoef je je nooit zorgen te maken over het verliezen van je gegevens voor het geval je je laptop of telefoon in een meer laat vallen.

Daarom synchroniseren we automatisch al je gegevens met je geselecteerde server op de achtergrond. Je krijgt het beste van beide werelden: alle gegevens zijn standaard lokaal, maar als internet beschikbaar is, worden je gegevens naadloos geback-upt en gesynchroniseerd met alle andere apparaten. Dit is het tegenovergestelde van de meeste apps die sterk afhankelijk zijn van de beschikbaarheid van het internet.

Voor de super privacy-gerichte personen, staat het zelfs toe dat je gegevens end-to-end versleuteld worden zodat al wat je server doet is het doorgeven van wijzigingen.

## Beginnen

Zodra je bent ingelogd, als je nog geen bestand hebt gemaakt, zal het er automatisch een voor je maken. Ga je gang en kijk rond in de app en begin met het opzetten van je budget.

Als je al bestanden hebt gemaakt, toont Consumeer Bewust na het inloggen alle beschikbare bestanden. Selecteer er een en het zal deze downloaden en naadloos beginnen met synchroniseren. Dat is het.

## End-to-end versleuteling

Naast de vereiste om je wachtwoord in te voeren voordat de Consumeer Bewust server je toegang geeft tot je budget, kun je optioneel end-to-end versleuteling inschakelen. Dit betekent dat je een tweede wachtwoord moet invoeren om toegang te krijgen tot het budget, en dat de server niet langer toegang kan krijgen tot je budgetinformatie. Aan de ene kant, verbetert dit de beveiliging als je je zorgen maakt dat iemand anders toegang zal hebben tot het bestand van de server of als je de server niet vertrouwt om het wachtwoord correct te controleren (dat gezegd hebbende, we hebben ons best gedaan om de server veilig te maken). Aan de andere kant, **zal je niet in staat zijn om je gegevens te herstellen als je je versleutelingswachtwoord vergeet**. Als je het versleutelingswachtwoord vergeet en je nog een kopie van je gegevens lokaal hebt, kun je je sleutel resetten wat een [sync reset](#wat-betekent-het-resetten-van-synchronisatie) zal doen en een nieuwe sleutel zal genereren.

End-to-end versleuteling biedt de mogelijkheid om een sleutel te genereren op basis van een wachtwoord en het te versleutelen zodat gehoste diensten de gegevens niet kunnen lezen. Voordat je gegevens je apparaat verlaten, worden ze versleuteld met sleutels die alleen jij hebt.

Dit garandeert dat alleen jij ooit toegang zal hebben tot je gegevens. Dit is optioneel en het gebruik ervan vereist dat je een wachtwoord invoert bij het downloaden van cloud-bestanden (dit hoeft maar één keer per apparaat te worden gedaan). Het wachtwoord dat je invoert kan verschillen van het hoofdserverwachtwoord.

Gegevens op je lokale apparaat zijn nog steeds niet versleuteld. We raden volledige schijfversleuteling aan als je geïnteresseerd bent in lokale versleuteling.

Er zijn enkele dingen om te overwegen bij end-to-end versleuteling:

- **Pro:** Je gegevens zijn volledig veilig en niemand behalve jij kan ze lezen
- **Pro:** Als je niet wilt synchroniseren over apparaten, laat dit je nog steeds een volledig versleutelde back-up van je gegevens houden
- **Pro:** Als je de server met iemand anders wilt delen, kun je verschillende wachtwoorden gebruiken om aparte budgetbestanden te versleutelen, en zul je geen toegang hebben tot elkaars budgetten.
- **Con:** Als je je lokale gegevenskopie verliest en je wachtwoord vergeet, kun je nooit je gegevens herstellen
- **Con:** Het is niet mogelijk om versleuteling uit te schakelen. Dit is een eenrichtingsproces. Als je terug wilt naar een niet-versleuteld bestand nadat je versleuteling hebt ingeschakeld, kun je de stappen in de [Backup](../backup-restore/backup.md) en [Herstel](../backup-restore/restore.md) secties volgen.
- **Con:** Er is een kleine prestatieverlies vanwege het coderen en decoderen van je gegevens bij elke synchronisatie

Let op: zelfs als je het wachtwoord niet hebt, kun je nog steeds een versleuteld bestand van de server verwijderen.

### Het instellen van end-to-end encryptie

Je kunt end-to-end encryptie inschakelen door een bestand te openen, naar instellingen te gaan en op "encryptie inschakelen" te klikken in de Encryptie sectie. Er zal gevraagd worden om een wachtwoord in te voeren, en er wordt een sleutel gegenereerd uit dit wachtwoord dat vanaf dat moment al je gegevens zal versleutelen.

Bij het downloaden van gegevens op andere apparaten, moet je hetzelfde wachtwoord invoeren om de sleutel te genereren die nodig is om je gegevens te ontsleutelen.

**Verlies dit wachtwoord niet**. Je zult niet in staat zijn om je gegevens te herstellen als je het vergeet. Als je het vergeet en je hebt nog steeds een kopie van je gegevens lokaal, kun je je sleutel resetten, wat een [sync reset](#wat-betekent-het-resetten-van-sync) zal doen en een nieuwe sleutel zal genereren.

## Wat betekent "het resetten van sync"?

Er zijn veel redenen waarom je misschien "opnieuw wilt beginnen" met synchroniseren. Dit betekent niet dat je al je lokale gegevens verliest, maar het betekent dat je om een of andere reden alle gesynchroniseerde gegevens wilt vergeten en wilt beginnen alsof de huidige versie van je bestand de "echte" versie ervan is.

Omdat je gegevens lokaal zijn voor elk apparaat en ze misschien niet allemaal up-to-date zijn, **kies het juiste apparaat** van waaruit je de synchronisatie wilt resetten. Dit is meestal niet belangrijk, maar het is belangrijk om te beseffen dat wanneer je de synchronisatie reset vanaf één apparaat, alle niet-gesynchroniseerde wijzigingen van andere apparaten worden teruggedraaid. Meestal worden bestanden recent genoeg gesynchroniseerd dat dit geen probleem is. Maar als je veel wijzigingen hebt die niet zijn gesynchroniseerd vanaf één apparaat (misschien was het niet verbonden met het internet), zorg er dan voor dat je de synchronisatie reset vanaf dat apparaat zodat het de "echte" versie van je gegevens wordt.

Een paar scenario's waarin je een sync-reset wilt:

- Je herstelt van een back-up. Je wilt niet herstellen van een back-up, om er vervolgens achter te komen dat het terug is gesynchroniseerd naar waar je eerder was! Je wilt dat de synchronisatie vers begint vanuit de back-up.
- Je zet end-to-end encryptie aan. Als je dit doet, moet de server alle onversleutelde gegevens die hij al kent, vergeten. Dit vereist een frisse start.
- In het slechtste geval zijn je gegevens niet gesynchroniseerd. Dit mag nooit gebeuren, maar voor het geval dat het ooit gebeurt, kun je handmatig de synchronisatie resetten vanuit het bestand dat je wilt behandelen als de "echte" versie.

Het resetten van de synchronisatie zal alle synchronisatiegegevens van de server wissen, je bestaande gegevens uploaden als de "echte" versie, en je apparaat krijgt een nieuwe "sync id". Alle apparaten die gegevens synchroniseren moeten dezelfde sync id hebben.

Na het resetten zijn alle andere apparaten nu verouderd. Wat gebeurt er als je probeert ze te laten draaien? Consumeer Bewust zal detecteren dat de synchronisatie is gereset en je vertellen dat ze moeten worden teruggedraaid. Het terugdraaien van een bestand zal de lokale gegevens verwijderen, de nieuwste versie ervan downloaden, en de nieuwste sync id toewijzen die is gegenereerd door de reset. Het zal vanaf dan gelukkig synchroniseren.

**Consumeer Bewust zal je hier altijd doorheen leiden**. Het houdt de status van al je bestanden bij en zal je op de hoogte stellen als er iets mis is en je stappen geven om het probleem op te lossen. Als je handmatig de synchronisatie wilt resetten, kun je dat doen in instellingen.

## Problemen met synchronisatie oplossen

Wanneer Consumeer Bewust een probleem detecteert tijdens het synchroniseren, zie je een melding met details en acties om het probleem op te lossen. Hieronder staan alle meldingen die je mogelijk ziet, met wat meer detail erover.

**Je zult deze berichten zelden zien**, en als je ze wel ziet zal Consumeer Bewust je begeleiden bij het oplossen van het probleem. Als je nog steeds problemen ondervindt, neem dan [contact met ons op](/contact)

### Dit bestand is geen cloud-bestand

Een "cloud-bestand" is een bestand dat is geregistreerd bij je server en momenteel gegevens synchroniseert. Soms is een bestand nog niet geregistreerd, dus het kan geen gegevens verzenden om te synchroniseren.

Dit gebeurt meestal wanneer er een nieuw bestand wordt gecreëerd wanneer er geen internetverbinding is. In dat geval wordt er een lokaal bestand gecreëerd, maar de server weet er niets van. Als je online bent, moet je het registreren.

### De synchronisatie is gereset op dit cloud-bestand

Als je de synchronisatie reset op een apparaat, zien alle andere apparaten dit bericht wanneer ze proberen te synchroniseren. Wanneer je de synchronisatie reset, worden alle synchronisatiegegevens van onze server verwijderd (maar niet de lokale gegevens) en wordt je lokale bestand behandeld als de "echte" versie. Omdat alle synchronisatiegegevens zijn gereset, kunnen andere apparaten niet meer synchroniseren.

Als dit gebeurt, zie je op andere apparaten een optie om terug te gaan naar de laatste versie. Simpelweg terugdraaien zal je weer laten synchroniseren. Zie [Wat betekent "het resetten van sync"?](#what-does-resetting-sync-mean)

### Bestand moet geupload worden

Er moet iets mis zijn gegaan bij het resetten van de synchronisatie. Dit zou eigenlijk nooit moeten gebeuren, maar in het zeldzame geval dat je dit bericht ziet, klik op "Upload" om je gegevens te uploaden en het te repareren.

### Je gegevens zijn niet gesynchroniseerd

Helaas heeft Consumeer Bewust een inconsistentie in je gesynchroniseerde gegevens gedetecteerd. Dit gebeurt alleen als er een fout zit in het synchronisatieproces, en je zou dit nooit moeten zien. Mocht dit toch gebeuren, dan zal een [sync reset](#wat-betekent-het-resetten-van-sync) het probleem oplossen.

### Update vereist

Tijdens het synchroniseren ontving je apparaat gegevens die het niet kon toepassen omdat je versie van Consumeer Bewust verouderd is. Je moet Actual bijwerken en dan zal het succesvol synchroniseren.
