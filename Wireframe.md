FONTY 


Primárny font (Nadpisy): Montserrat alebo Roboto (Bold/Black). Sú geometrické a evokujú stabilitu.

Sekundárny font (Text): Inter alebo Open Sans. Sú výborne čitateľné aj v menších veľkostiach pri technických správach.


----------------------------------------------

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


------------------------------------------------


A. Home Page (Index)
Hero Sekcia:

Nadpis (H1): Expert na ESD ochranu a technickú čistotu s 10-ročnou praxou.

Podnadpis: Zabezpečujeme integritu vašich EPA priestorov podľa noriem IEC, ANSI a VDA. Od auditov až po nedeštruktívnu obnovu podláh.

CTA Button Primary: Získať cenovú ponuku (Scroll to Contact)

CTA Button Secondary: Naše odborné služby (Internal Link)

Trust Bar (Static Component): Logá noriem: ANSI/ESD S20.20, IEC 61340, VDA 19.1-2.

Grid Služieb (React + Framer Motion): * Karty s "hover" efektom (scale/border-glow).

Texty: ESD Audity, Technická čistota, Školenia na mieru, Obnova podláh.

B. Podstránka: Služby (Detail)
Štruktúra: Každá služba má vlastnú sekciu s "Feature Listom".

Odrážky pre "ESD Audit":

Komplexná kontrola pracovísk a liniek.

Merania kalibrovanými prístrojmi s certifikátom.

Identifikácia kritických bodov (Risk Assessment).

Finálna správa použiteľná pri zákazníckych auditoch.

CTA: Stiahnuť vzorový audit (PDF Lead Magnet).

C. Podstránka: O nás & Referencie
Príbeh: Zameranie na prepojenie ESD a technickej čistoty od roku 2017.

Referencie: Logá partnerov v "infinite scroll" páse (Framer Motion).

2. Google Recenzie a Referencie (Integrácia)
Pre maximálnu dôveryhodnosť neodporúčam len statický text, ale dynamické prepojenie:

Google Maps API / Business Profile: Použi knižnicu ako react-google-reviews alebo fetchuj dáta cez Astro endpoint.

UI Prvok: "Bento Grid" štýl recenzií. Každá karta obsahuje: Meno (alebo iniciály firmy), hviezdičky, text recenzie a logo "Google".

Deep Link: Tlačidlo "Napísať recenziu", ktoré smeruje priamo na tvoj Google Business profil (https://search.google.com/local/writereview?placeid=VASE_ID).

3. Wireframe a Štruktúra (Diagram)
Tu je vizuálna štruktúra, ktorú môžeš priamo pretaviť do komponentov:

Detailné rozloženie (Blueprint):
Header (Astro): Sticky navigácia, Glassmorphism efekt (backdrop-filter: blur).

Hero Section (React + Framer): Jemná animácia častíc na pozadí (simulácia prachu/iónov).

Services Layout: * Desktop: 3-stĺpcový grid.

Mobile: Vertikálny stack s "Accordions" pre detaily.

Reference/Reviews Section: Horizontálny slider.

Footer: Mapa, rýchle odkazy, certifikáty, GDPR info.


Prepojenie na Google Recenzie (Linkovanie)
Aby si nemusel manuálne prepisovať texty, navrhujem toto riešenie pre Frontend:

Vytvor si v Astro src/data/reviews.json (ak nechceš platiť API).

Referencia na Google: Do sekcie recenzií vlož Badge: "4.9/5 na Google Business Profile".

Direct Link: Tlačidlo pod recenziami: „Pozrieť všetky overené recenzie“. Link: https://www.google.com/maps/place/ESDtronic+s.r.o./@48.7303022,21.2455581,17z/data=!4m8!3m7!1s0x473ee16a760579e1:0x498e843c0540d6e6!8m2!3d48.7303022!4d21.248133!9m1!1b1!16s%2Fg%2F11v5m468_y?entry=ttu


[ HEADER: Logo | Služby | Case Studies | Kontakt | SK/UA ]
---------------------------------------------------------
[ HERO: (H1) ESD & Čistota v dokonalej rovnováhe        ]
[       (Sub) Prepojujeme svet mikro-elektroniky        ]
[       (Animácia) Interaktívne pole iónov              ]
---------------------------------------------------------
[ TRUST: Logá noriem (IEC, ANSI, VDA) - Marquee efekt   ]
---------------------------------------------------------
[ SECTION: Prečo riešiť oba svety naraz?                ]
[ (L) Graf: Statika + Prach = Riziko                    ]
[ (R) Text: Ako statický náboj priťahuje kontamináciu   ]
---------------------------------------------------------
[ BENTO GRID SLUŽBY:                                    ]
[ [ ESD Audit ] [ Tech. Čistota ] [ Školenia ]          ]
[ [ Paušál    ] [ Obnova podláh ] [ Merania ]          ]
---------------------------------------------------------
[ CASE STUDY PREVIEW: (Karta s tmavým pozadím)          ]
[ "Znížili sme chybovosť o 15%..." [ Čítať príbeh ]    ]
---------------------------------------------------------
[ GOOGLE REVIEWS: (Horizontal Scroll / Masonry)        ]
[ [ ⭐⭐⭐⭐⭐ ] [ ⭐⭐⭐⭐⭐ ] [ ⭐⭐⭐⭐⭐ ]         ]
---------------------------------------------------------
[ FOOTER: Kontaktný formulár | Mapa | Certifikáty       ]