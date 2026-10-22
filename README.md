# adiso.nl

Website van Adiso, uitgever van apps. Statisch, gehost op GitHub Pages.

- `/` en `/en/`: Adiso
- `/notetoself/` en `/en/notetoself/`: Note to Self
- `/notetoself/privacy/` en `/en/notetoself/privacy/`: privacybeleid (Play Store en Google OAuth-verificatie)

Het contactadres staat niet als geheel in de HTML; `assets/contact.js` stelt het in de browser samen (simpele spambescherming zonder server).

## DNS voor adiso.nl (GitHub Pages)
- A-records voor `adiso.nl`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- AAAA-records: 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153
- CNAME `www` → `<github-gebruiker>.github.io`
