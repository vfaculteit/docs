# Schema's

[regels]: ./rules

## Een schema maken

Schema's kunnen worden gebruikt om verwachte transacties vroegtijdig in te voeren. Enkele van de beschikbare opties om schema's aan uw behoeften aan te passen zijn:

1.  Stel in dat ze terugkerend zijn of slechts één keer worden ingevoerd
2.  Stel in dat ze automatisch in het accountregister worden ingevoerd of kies ervoor om invoeren handmatig goed te keuren
3.  Opties voor terugkerende invoeren op meerdere specifieke dagen van de maand.
  1. Een enkel schema kan worden gemaakt voor een mobiel abonnement dat meerdere gebruikers heeft en verschillende betalingscycli voor elke telefoon. Als je 3 mobiele telefoons hebt die allemaal op verschillende dagen van de maand worden betaald, kan elke dag worden gedefinieerd in een enkel schema voor elke telefoon.
4.  Opties om de frequentie van betalingen te bepalen, zoals elke maand, elke 2 maanden, elke 2 jaar, etc.

Zodra een schema is gestart, zoekt Consumeer Bewust in de transactiegeschiedenis naar invoeren die overeenkomen met het schema, selecteert de overeenkomsten, en de optie om die transacties aan het schema te koppelen wordt gegeven. Je kunt op de **Zoek ontbrekende transacties** knop klikken om Consumeer Bewust te laten zoeken naar overeenkomsten.

![](/img/schedules/schedules-1.png)

![](/img/schedules/schedules-6.png)

![](/img/schedules/schedules-7.png)

## Hoe Consumeer Bewust schema's vindt

Naast de vereisten die u hebt opgegeven bij het maken van een schema, moet een transactie ook aan de datavereisten voldoen om aan een schema te worden gekoppeld. Transacties moeten worden gedateerd binnen 2 dagen voor of na een schema.

Bijvoorbeeld: Je hebt een schema ingesteld voor je elektriciteitsrekening op de 15e van elke maand. Vandaag is het de 10e van de maand en je kunt een aanstaande geplande transactie van je rekening in Consumeer Bewust zien. Het nutsbedrijf besloot deze maand de fondsen op de 10e op te nemen, dus je boekt de transactie vroegtijdig in Consumeer Bewust en wijzigt de datum van de transactie om overeen te komen met je bankafschrift. Er is nu een probleem ontstaan omdat de geboekte transactie buiten het venster van 2 dagen valt om geplande transacties te matchen. Je zult je rekening geboekt zien in het Consumeer Bewust accountregister maar je zult ook een aankomende transactie voor de elektriciteitsrekening op de 15e zien, ook al heb je die net ingevoerd. Dit is het verwachte gedrag bij het gebruik van schema's.

Je kunt dit probleem oplossen op één van de twee manieren.

1. Sla het volgende schema over door de aankomende geplande transactie te selecteren en "Geplande datum overslaan" te kiezen uit de menuopties.
2. Accepteer dat de datum niet overeenkomt en laat het zo zodat het schema geen tweede transactie vraagt.

## Schema-opties die niet worden ondersteund

1. Schema's kunnen niet worden gemaakt die zich aanpassen op basis van de laatste niet-weekenddag (maandag-vrijdag) van een maand.
2. Schema's houden geen rekening met feestdagen.

## Hoe regels te gebruiken met schema's

Vaak is het wenselijk om notities toe te voegen aan de geplande transacties of om categorieën automatisch toe te wijzen. Dit wordt gedaan met het [Regels][regels] hulpmiddel.

Maak een schema.

![](/img/schedules/schedules-2.png)

Je kunt erop klikken en er is nu een nieuwe knop verschenen met de naam **Bewerken als regel**.

![](/img/schedules/schedules-3.png)

Klik op **Bewerken als regel** om de automatische invoer verder aan te passen.

![](/img/schedules/schedules-4.png)

Door op de **+** pijl in het **Pas dan deze acties toe** gebied te klikken, kun je de categorie definiëren waartegen dit schema moet worden toegewezen, evenals eventuele notities die je misschien wilt toevoegen.

![](/img/schedules/schedules-5.png)

Je kunt deze nieuw gemaakte regel toepassen op elke andere van de gekoppelde transacties. Selecteer alle transacties uit het regeldialoogvenster en druk op **Acties toepassen**.

![](/img/schedules/schedules-8.png)

Sla de regel op en elke keer dat deze geplande transactie in het register wordt ingevoerd, kan deze automatisch worden gecategoriseerd met een nuttige notitie.
