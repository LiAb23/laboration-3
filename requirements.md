# L3 – Astrology App

## Kravspecifikation 

### Vision
Målet med Astrology App är att erbjuda en enkel och lättillgänglig webbapplikation som låter användaren skriva in sitt eget eller någon annans födelsedatum för att snabbt ta reda på grundläggande astrologisk information för det angivna datumet.  

Många människor är nyfikna på astrologi men saknar ett enkelt verktyg för att direkt få fram sitt stjärntecken och tillhörande egenskaper. Det kan till exempel handla om att man är nyfiken på sin astrologiska profil, eller att man vill få reda på sådan information kring en potentiell partner eller för sitt barn. Applikationen riktar sig till användare som vill få en snabb överblick över astrologisk information utan att behöva söka på flera olika webbplatser. Genom att ange ett födelsedatum ska användaren kunna få information om stjärntecken, element och modalitet. I en eventuell senare vidareutveckling av appen kan mer data tillkomma, som en astrologiskt grundad beskrivning av personen med det aktuella födelsedatumet med mera.  

Applikationen fungerar även som ett exempel på hur den återanvändbara Astrology-modulen från laboration 2 i kursen 1DV610 kan användas i en reell användarapplikation.  

Appen ska vara lättanvänd och fungera i webbläsaren.  

### Funktionella krav
1. Som en användare vill jag kunna mata in ett datum i formatet YYYY-MM-DD.
2. Appen validerar datumet och visar felmeddelande om det är ett ogiltigt datum.
3. Appen visar motsvarande stjärntecken (Zodiac Sign) för ett giltigt datum.
4. Appen visar element (Fire, Earth, Air, Water) för stjärntecknet.
5. Appen visar modalitet (Cardinal, Fixed, Mutable) för stjärntecknet.
6. Appen uppdaterar visningen direkt när användaren trycker på "Show"-knappen.

### Icke-funktionella krav
- Appen ska vara enkel (enfärgad bakgrund), tydlig (bara en sida, hjälptext i fälten) och minimalistisk (endast datumfält, en knapp och ett resultatfält).
- Frontend ska fungera i moderna webbläsare.
- Appen ska använda modulen från den modifierade L2.
- Appen ska vara lätt att underhålla och att läsa koden i enlighet med principerna beskrivna i boken Clean Code.

### Teknik
Applikationen implementeras som en enkel klientbaserad webbapplikation och använder följande tekniker:
- HTML - för struktur och användargränssnitt
- CSS - för layout och styling
- JavaScript (ES Modules) - för applikationslogik
- Astrology Module (L2) - för de astrologiska beräkningarna av stjärntecken, element och modalitet

### Testfall
| Krav | Testfall | Indata | Förväntat utfall |
|------|----------|--------|----------------|
|  1   | TC1: Datum har ej angetts | Tom input | Meddelande visas: "Please select a date" |
|  1   | TC2: Korrekt datumformat | 2023-03-30 | Inget felmeddelande kopplat till format visas, datumet bearbetas vidare och ger resultat om giltigt |
|  1   | TC3: Ogiltigt datumformat | 30-03-2023 | Felmeddelande: "The date must be in the following format: YYYY-MM-DD" |
|  2   | TC4: Ogiltigt datum | 2023-02-30 | Felmeddelande: "The date you submitted is not a valid date." |
|  3   | TC5: Visa stjärntecken | 2023-03-30 | ♈Aries |
|  3   | TC6: Visa stjärntecken vid gränsdatum | 2023-05-20 | ♉Taurus |
|  4   | TC7: Visa element | 2023-03-30 | 🔥 Fire |
|  5   | TC8: Visa modalitet | 2023-03-30 | Cardinal |
|  6   | TC9: Visa resultaten | Klick på "Show" efter giltigt datum | Resultaten visas direkt utan omladdning |

### Antaganden
- Appen är enkel och ska inte innehålla avancerad UI-design eller serverlogik.
- Alla beräkningar av stjärntecken, element och modalitet hämtas direkt från L2-modulen.
- Testning kan ske manuellt genom webbgränssnittet.  