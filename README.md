# Digitálny Kabinet — webstránka

## Čo je v priečinku
- `index.html` — celá stránka (jedna stránka, sekcie cez menu)
- `style.css` — farby, písma, vzhľad (farby menníš na začiatku súboru)
- `script.js` — mobilné menu + jemné animácie, netreba meniť
- `assets/logo.png` — celé logo (v hero sekcii)
- `assets/logo-icon.png`, `assets/favicon.png` — logo bez textu (v menu a v záložke prehliadača)
- `assets/photos/` — fotky tímu (zatiaľ placeholder, vymeníš za skutočné fotky rovnakého názvu)

## Ako upravovať obsah
Otvor `index.html` v akomkoľvek textovom editore (napr. Poznámkový blok, VS Code). Text v jednotlivých
sekciách je bežný text medzi HTML značkami — meníš iba text, značky (napr. `<h2>`, `<p>`) nechaj tak.
Každá sekcia má komentár `<!-- ... -->` s vysvetlením, čo tam upraviť.

**Výmena fotky:** ulož novú fotku pod rovnaký názov ako tá pôvodná (napr. `eva-krekovicova.jpg`)
do priečinka `assets/photos/` — nahradí starú automaticky.

**Pridanie nového materiálu na stiahnutie:** nahraj súbor (napr. PDF) do priečinka
`assets/materialy/` a v sekcii "Materiály zadarmo" skopíruj jeden blok `<div class="material-item">`,
uprav text a v `href="..."` daj presnú cestu k súboru.

**Pridanie novej pripravovanej udalosti / témy:** skopíruj celý blok jednej karty
(`<div class="upcoming-card">` alebo `<div class="topic-card">`) a uprav text.

## Ako to nasadiť na www.digitalnykabinet.sk (Websupport)

Doménu už máš. Teraz potrebuješ webhosting, aby mal web kde "bývať". Keďže chceš mať
všetko na jednom mieste, najjednoduchšie je dokúpiť hosting priamo na Websupporte a napojiť
naň doménu, ktorú tam prípadne prevedieš alebo len nasmeruješ.

### 1. Založ si účet a kúp hosting
1. Choď na **websupport.sk** → **Webhosting**.
2. Websupport ponúka hostingové balíky **Simple / Smart / Super** (a samostatne aj
   **Website Builder**, ak by si chcela stránku skladať cez ich vlastný nástroj namiesto
   nahrávania hotových súborov). Keďže táto stránka je hotová ako súbory (HTML/CSS/JS),
   potrebuješ **klasický webhosting** (Simple stačí na jednoduchý prezentačný web ako tento),
   nie Website Builder.
3. Pri objednávke sleduj rozdiel medzi zvýhodnenou cenou prvého obdobia a cenou pri
   predĺžení (pri ročnej platbe je prvé obdobie zvyčajne výrazne lacnejšie).
4. Skontroluj aktuálny cenník priamo na websupport.sk/cennik — ceny sa v priebehu roka menia.

### 2. Priraď doménu k hostingu
Máš dve možnosti:
- **Ak doménu spravuješ inde** (napr. u iného registrátora): stačí v jej DNS nastaveniach
  zmeniť tzv. **nameservery (NS záznamy)** na tie, ktoré ti Websupport pridelí k hostingu
  (nájdeš ich v administrácii WebAdmin pri hostingovej službe). Zmena sa prejaví do
  niekoľkých hodín až 24 hodín.
- **Ak chceš mať aj doménu priamo na Websupporte**: vo WebAdmine spravíš tzv. **transfer domény**
  k Websupportu (potrebuješ k tomu autorizačný/EPP kód od pôvodného registrátora). Toto je presne
  ten "všetko na jednom mieste" variant, ktorý si chcela.

### 3. Nahraj súbory stránky
1. Vo WebAdmine otvor svoju hostingovú službu a nájdi **Správca súborov (File Manager)**
   alebo si zapni **FTP prístup** (údaje FTP nájdeš tiež vo WebAdmine).
2. Nahraj **celý obsah tohto priečinka** (nie priečinok samotný, ale jeho obsah — `index.html`,
   `style.css`, `script.js` a priečinok `assets`) do koreňového priečinka webu
   (zvyčajne sa volá `www` alebo `public_html`).
3. Po chvíli (kým sa doména prepojí) bude stránka dostupná na www.digitalnykabinet.sk.

### 4. SSL certifikát (https)
Websupport zvyčajne ponúka bezplatný SSL certifikát priamo vo WebAdmine (často automaticky
aktivovaný pri hostingu) — over si v administrácii, či je zapnutý, aby stránka bežala
na `https://www.digitalnykabinet.sk`, nie len `http://`.

### Keď budeš chcieť funkčný kontaktný formulár
Táto verzia posiela kontakt cez bežný e-mailový odkaz (klik otvorí e-mailového klienta).
Keď budeš mať hosting spustený, viem ti pripraviť aj skutočný formulár, ktorý pošle
správu priamo na tvoj e-mail (Websupport hosting podporuje PHP, takže to pôjde jednoducho).
