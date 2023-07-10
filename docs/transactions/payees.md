# Betrokken partijen

Een betrokken partij is een beschrijving van de bron van een transactie. Consumeer Bewust biedt een krachtige manier om betrokken partijen te beheren.

Bij het importeren van transacties, zal het standaard nieuwe betrokken partijen aanmaken op basis van de gegeven naam. Meestal resulteert dit in enkele lelijke namen zoals `Target Debit Crd Ach Tran Co Id:Xxxxx15170`. Met het beheer van betrokken partijen, kun je deze namen opschonen, regels instellen voor hoe betrokken partijen worden bepaald, en zelfs een standaard categorie instellen om te gebruiken.

Om betrokken partijen te beheren, selecteer je ofwel het **Bestand > Beheer Betrokken Partijen** menu-item of klik je op de **Beheer Betrokken Partijen** knop bij het bewerken van de betrokken partij van een transactie.

## Hoe betrokken partijen werken

Bij het importeren van transacties uit een bestand, probeert het systeem automatisch de gegeven namen te matchen met bestaande betrokken partijen. Dit doet het door **regels** uit te voeren die je kunt bewerken. Als er geen bestaande betrokken partij wordt gevonden, zal het er een aanmaken.

Als er een betrokken partij wordt gevonden met een exacte match als de gegeven naam, zal het altijd die betrokken partij gebruiken.

Anders zal het zoeken naar betrokken partijen met regels die overeenkomen. Deze regels specificeren of het een string exact moet matchen, of dat het een string moet bevatten. Bijvoorbeeld, een **Target** betrokken partij kan een regel hebben die zegt "als een naam 'Target' bevat, gebruik dan deze betrokken partij", en de lelijke betrokken partij hierboven zou opgelost worden naar deze **Target** betrokken partij.

Wanneer een betrokken partij wordt gematcht, zal de transactie automatisch worden toegewezen aan de **standaard categorie** als deze er een heeft.

## Een betrokken partij bewerken

1. Open het **Beheer Betrokken Partijen** scherm
2. Om een betrokken partij te **hernoemen**, klik op de naam en typ een nieuwe.
3. Om een betrokken partij te **verwijderen**, selecteer het en druk op de **1 betrokken partij** knop in de linkerbovenhoek en selecteer **Verwijderen**.
4. Bewerk de standaardcategorie door erop te klikken en er een te selecteren uit de dropdown.
5. Bewerk de regels door op de "# regels" knop te klikken en een dropdown zal verschijnen met de lijst van regels om deze betrokken partij mee te matchen.

## Betrokken partijen samenvoegen

Een krachtige functie is het samenvoegen van betrokken partijen. Je hebt misschien al maanden aan data en een hoop lelijke **Morrisons** betrokken partijen die allemaal licht variëren. Je wilt al deze betrokken partijen samenvoegen tot één betrokken partij.

1. Klik op de drie puntjes naast je budgetnaam

![](/img/payees/BudgetOptionButton.png)

2. Klik op Beheer Betrokken Partijen

![](/img/payees/ManagingPayees.png)

3. Typ "Morrisons" in de filter om alleen die betrokken partijen te tonen.

![](/img/payees/Payees.png)

4. Klik op het selectievakje in de tabelkop naast de **Naam** kolom om alle verschillende variaties van "Morrisons" te selecteren

![](/img/payees/PayeesSelected.png)

5. Klik op de knop in de linkerbovenhoek om het menu te openen, en selecteer **Samenvoegen**

![](/img/payees/MergePayeesOption.png)

6. Alle betrokken partijen zullen samengevoegd worden tot één en de naam zal bewerkbaar zijn. Typ een naam voor de uiteindelijke betrokken partij.

![](/img/payees/PayeesMerged.png)

Je kunt individuele betrokken partijen selecteren en samenvoegen als je dat wilt, maar filteren & samenvoegen is een krachtige manier om snel je betrokken partijen op te schonen.

## Transfer betrokken partijen

[Overboekingen](./transfers.md) zijn gewoon speciale betrokken partijen die aangeven naar welke account er overgeboekt moet worden. Omdat het betrokken partijen zijn, kun je normale regels maken die automatisch overboekingen aanmaken. Je vindt ze onderaan het **Beheer Betrokken Partijen** scherm als je aangepaste regels wilt maken.
