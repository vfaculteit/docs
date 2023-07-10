# Back-ups herstellen

## Het herstellen van een handmatige back-up

Als je eerder de [stappen](./backup.md) hebt gevolgd om je gegevens te back-uppen en je hebt een Consumeer Bewust zip-export, kun je deze nu importeren met de webversie van Consumeer Bewust.

Om dit te doen,

1. log in op je budget, klik dan in de rechterbovenhoek op 'Server'

   ![](/img/restore/actual-config-7.png)

2. Selecteer vervolgens Uitloggen

   ![](/img/restore/actual-config-8.png)

3. Log opnieuw in op je instance van Consumeer Bewust

   ![](/img/restore/actual-config-9.png)

4. Selecteer op het volgende scherm Importeer Bestand

   ![](/img/migrating/actual-import-1.png)

5. Selecteer Consumeer Bewust en lokaliseer dan je Zip-bestand, dit zal vervolgens importeren wat je eerder geëxporteerd hebt naar Consumeer Bewust.

   ![](/img/migrating/actual-import-2.png)

Dat is alles. Een nieuw budget zal verschijnen in je budgetlijst. Als de geïmporteerde gegevens een kopie zijn van je huidige budget, wil je misschien het nieuwe budget een andere naam geven door op de naam te klikken zodat je ze uit elkaar kunt houden. Zodra je hebt geverifieerd dat het nieuwe geïmporteerde budget correct is, kun je terugnavigeren naar het budget selectiescherm door het huidige budget te sluiten en de oude kopie te verwijderen.

## Fouten bij het herstellen van database vanuit back-up
Het is mogelijk dat je een fout tegenkomt tijdens het herstellen die zegt:

`Dit budget kan niet geladen worden met deze versie van de app. Zorg ervoor dat de app up-to-date is.`

Dit zou alleen moeten gebeuren als je upgradet van een Docker-image met de `edge` tag naar een stabiele release, zoals `latest`. Dit zou in andere gevallen niet moeten gebeuren. Als je deze bug tegenkomt, stuur dan alstublieft een bug report in.

**BELANGRIJKE OPMERKING**: Je *MOET* een back-up downloaden van elk van je budgetten met het bovenstaande proces **voordat** je verder gaat. Het is altijd goed om een back-up van je gegevens te maken voordat je upgradet naar een nieuwe versie.

De oplossing hiervoor is om handmatig je sqlite-database te migreren met de onderstaande stappen:

1. Download en installeer [SQLite Browser](https://sqlitebrowser.org/)
2. Pak het back-up budget `.zip` bestand uit. De bestandsnaam zou er zo uit moeten zien: `yyyy-mm-dd-Mijn-Financiën-abcd1234.zip`
3. Open SQLite Browser. Klik op de knop "Open Database" en navigeer naar het bestand dat je zojuist hebt uitgepakt. Je zoekt naar een bestand genaamd `db.sqlite`.
4. Laad het bestand en klik op het tabblad `Browse Data`. Selecteer de `__migrations__` tafel uit het dropdown menu van de tabel.
5. Je zou een lijst met gehele getallen moeten zien onder de kolom gelabeld `id`. Kruisreferentieer de vermeldingen in deze tabel met de lijst van [database migraties](https://github.com/actualbudget/actual/tree/master/packages/loot-core/migrations) in de main Consumeer Bewust repository.
6. Voor elk getal dat ontbreekt, wil je klikken op het bijbehorende `.sql` bestand en de ruwe data kopiëren.
7. Voer de sql-query uit in het Execute tabblad van SQLite Browser. Zorg ervoor dat je controleert dat het commando succesvol was.
8. Als de sql-query die je gekopieerd hebt succesvol is, wil je de id van het migratiecommando invoegen in de `__migrations__` tabel door `insert into __migrations__ values(id_of_missing_migration_command);` uit te voeren.
9. Wanneer je `__migrations__` tabel overeenkomt met de database migraties map, commit en sluit de database.
10. Rits je gewijzigde `db.sqlite` en `metadata.json` bestanden weer in een zip-bestand.
11. Probeer het herstelproces hierboven opnieuw uit te voeren.

## Automatische Back-ups

:::caution
Automatische back-ups zijn momenteel alleen beschikbaar in de (bèta) desktop-app.
:::

Consumeer Bewust houdt lokaal back-ups van je gegevens bij. Als er iets rampzaligs gebeurt, kun je altijd een recente back-up laden om je gegevens terug te krijgen.

Momenteel bewaart het tot 10 back-ups, één per dag van gebruik van de app, meerdere back-ups van de huidige dag. Het resultaat is dat je gegevens tot **de laatste 15 minuten** hebt, naast de laatste 10 dagen dat je de app hebt gebruikt.

### Het laden van een automatische back-up

- Selecteer het menu-item **Bestand > Back-up Laden...**
- Kies de back-up die je wilt laden en selecteer deze

De app zal opnieuw laden met de gegevens van die back-up. Als je die back-up wilt blijven gebruiken, hoef je niets anders te doen, blijf gewoon de app gebruiken. Als je terug wilt naar de vorige gegevens, open dan opnieuw het back-upmenu en selecteer **Terug naar originele versie**. Deze optie zal beschikbaar blijven tot er een andere back-up wordt gemaakt.
