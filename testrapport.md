# Testrapport Astrology module

För testning av modulen har varje metod testats (privata metoder indirekt). Testningen har utförts med hjälp av manuella testfall, se filen testApp.js. Olika testvärden har angetts, både giltiga och ogiltiga värden. En viss bredd i spridningen av testerna har använts för att få de så täckande som möjligt genom att testa på lite olika sätt, även om det inte täcker alla eventualiter. Samtliga testfall utom ett har gått igenom och visar på ett gott resultat. Modulen fungerar bra, men det finns en brist gällande den speciella månaden februari som inte får rätt antal dagar och därmed kan ge ett felaktigt stjärntecken, vilket är viktigt att ta hänsyn till i användningen av modulen. Inför uppdateringar i kommande versioner bör detta åtgärdas. Nedan följer en specifikation av varje testfall:

| **Vad som testats:**        | **Hur det testats:**                              | **Testresultat:**                      |
|-----------------------------|---------------------------------------------------|----------------------------------------|
| TC1: Validering av datum    | Matade in ett giltigt datum (2023-03-30)          | GODKÄND. Validerat datum: 2023-03-30   |
| TC2: Validering av datum    | Matade in ett datum i ogiltigt format (2023-0-30) | GODKÄND. Felmeddelande som ber om formatet YYYY-MM-DD |
| TC3: Validering av datum    | Matade in ett datum i ogiltigt format (23-01-30)  | GODKÄND. Felmeddelande som ber om formatet YYYY-MM-DD |
| TC4: Validering av datum    | Matade in ett datum i ogiltigt format (30 jan 2023)| GODKÄND. Felmeddelande som ber om formatet YYYY-MM-DD |
| TC5: Validering av datum    | Matade in ett ogiltigt datum (2023-02-30)          | GODKÄND. Felmeddelande om ogiltigt datum |
| TC6: Skapa objekt           | Matade in ett giltigt datum (2023-01-30)           | GODKÄND. Objekt med validerat datum 2023-01-30 |
| TC7: Skapa objekt           | Matade in ett ogiltigt datum (2023-02-30)          | GODKÄND. Felmeddelande om ogiltigt datum |
| TC8: Hämta stjärntecken     | Matade in ett giltigt datum (2023-03-30)           | GODKÄND. Stjärntecknet Väduren        |
| TC9: Hämta stjärntecken     | Matade in ett giltigt datum (2023-07-22)           | GODKÄND. Stjärntecknet Kräftan        |
| TC10: Hämta stjärntecken    | Matade in ett ogiltigt datum (2023-00-30)          | GODKÄND. Inget matchande tecken       |
| TC11: Hämta stjärntecken    | Matade in ett ogiltigt datum (2023-02-30)          | UNDERKÄND. Stjärntecknet Fiskarna, förväntade felmeddelande |
| TC12: Hämta elementet       | Matade in ett eldtecken (Väduren)                  | GODKÄND. Elementet Eld                |
| TC13: Hämta elementet       | Matade in ett lufttecken (Vågen)                   | GODKÄND. Elementet Luft               |
| TC14: Hämta elementet       | Matade in ett ogiltigt tecken (Ogiltigt tecken)    | GODKÄND. Inget matchande element      |
| TC15: Hämta modaliteten     | Matade in ett fast tecken (Oxen)                   | GODKÄND. Modaliteten Fast             |
| TC16: Hämta modaliteten     | Matade in ett föränderligt tecken (Skytten)        | GODKÄND. Modaliteten Föränderlig      |
| TC17: Hämta modaliteten     | Matade in ett felstavat tecken (Libro)             | GODKÄND. Ingen matchande modalitet    |
