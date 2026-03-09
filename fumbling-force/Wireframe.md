
Primárny font (Nadpisy): Montserrat alebo Roboto (Bold/Black). Sú geometrické a evokujú stabilitu.

Sekundárny font (Text): Inter alebo Open Sans. Sú výborne čitateľné aj v menších veľkostiach pri technických správach.


Gemini povedal
Ako UX/UI dizajnér som analyzoval vašu aktuálnu stránku esdtronic.eu. Stránka má dobrý technický základ, ale pôsobí mierne zastaralo (vizuál pripomína začiatok milénia) a trpí niekoľkými typografickými a SEO nedostatkami.

Tu je komplexný návrh na modernizáciu:

1. SEO a kľúčové slová (Optimalizácia)
Aktuálne texty obsahujú gramatické chyby (chýbajúce čiarky, medzery pred čiarkami) a slabú štruktúru nadpisov.

Hlavné kľúčové slová: ESD audit, antistatická ochrana, technická čistota VDA 19.1, EPA priestory, meranie ESD podláh, školenie ESD.

On-page SEO:

H1 nadpis: Momentálne je príliš všeobecný. Zmeniť na: „Odborné ESD audity a riešenia pre technickú čistotu v priemysle“.

Meta Description: Doplniť popis: „Zabezpečte bezpečnosť vašej výroby. Ponúkame profesionálne ESD audity, školenia a obnovu EPA podláh podľa štandardov IEC a ANSI. 10 rokov skúseností.“

Oprava textov: Odstrániť preklepy (napr. „śkolenia“, „podláh v EPA priestore“ – zjednotiť terminológiu).

2. Typografia (Fonty)
Pre technickú spoločnosť potrebujete fonty, ktoré pôsobia precízne, moderne a dôveryhodne.

Primárny font (Nadpisy): Montserrat alebo Roboto (Bold/Black). Sú geometrické a evokujú stabilitu.

Sekundárny font (Text): Inter alebo Open Sans. Sú výborne čitateľné aj v menších veľkostiach pri technických správach.

Párovanie: Nadpisy v bezpätkovom (Sans-serif) štýle dodajú webu čistý „industriálny“ vzhľad.

3. Brandová identita
ESDtronic by mal pôsobiť ako „Technologický expert a partner“, nie len ako servisná firma.

Vizuálny štýl: Používať reálne fotografie z meraní (vysoké rozlíšenie) kombinované s čistou vektorovou grafikou (ikony obvodov, ionizácie).

Tone of Voice: Profesionálny, technicky presný, ale zrozumiteľný.


$primary-blue: #06419f;
$accent-cyan: #00d4ff;
$bg-light: #fbfbfb;
$text-main: #1a1a1a;
$transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);


5. Wireframe návrh (Štruktúra domovskej stránky)
Navrhujem prejsť na sekčný layout (Full-width):

Header (Navigácia): * Logo vľavo, menu vpravo (Služby, O nás, Referencie, Kontakt).

Výrazné tlačidlo v rohu: „Nezáväzný dopyt“.

Hero Sekcia (Hlavný banner): * Vľavo silný H1 nadpis a krátky text o expertnosti.

Vpravo kvalitná fotka (napr. meranie na linke).

Tlačidlo: „Naše služby“.

Trust Bar (Logá noriem): * Pás s logami noriem (IEC, ANSI, VDA), ktoré firma dodržiava. Buduje to okamžitú dôveru.

Služby (Grid 3x2): * Karty s ikonami. Každá karta má krátky popis a tlačidlo „Viac informácií“. (Odstrániť toľko opakujúcich sa textov „chcem viac informácií“ v texte, nechať len pod blokom).

Prečo my? (USP): * 3 kľúčové body: 10 rokov praxe, certifikované prístroje, riešenia na mieru.

Kontaktný formulár: * Zjednodušiť ho. Na pozadí jemná mapa alebo technický nákres.

6. Technické odporúčania (Zdrojový kód)
Responzivita: Aktuálny web má na mobile rezervy. Použite moderný CSS Framework (Tailwind alebo Bootstrap).

Rýchlosť: Obrázky previesť do formátu .webp.

SSL: Uistite sa, že certifikát je správne nasadený (aktuálne sa web javí v poriadku, ale dôležitá je rýchlosť odozvy servera).