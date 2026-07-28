# Sito del matrimonio — Francesco & Giulia

Sito statico (HTML/CSS/JS puro), pronto per GitHub Pages.

## File inclusi
- `index.html` — la pagina
- `styles.css` — lo stile
- `script.js` — countdown, menu mobile, invio RSVP
- `CNAME` — collega il sito al dominio `francesco-e-giulia.it`
- `images/` — cartella dove mettere le vostre foto

## 1. Creare il repository su GitHub
1. Vai su [github.com/new](https://github.com/new)
2. Nome repository, ad esempio: `matrimonio` (può essere pubblico o privato — se privato, GitHub Pages richiede un piano Pro)
3. Non aggiungere README/gitignore (li avete già)
4. Crea il repository

## 2. Caricare i file
Dal terminale, dentro la cartella con questi file:

```bash
git init
git add .
git commit -m "Sito matrimonio"
git branch -M main
git remote add origin https://github.com/TUO-USERNAME/matrimonio.git
git push -u origin main
```

Sostituisci `TUO-USERNAME` con il tuo username GitHub.

*In alternativa, senza terminale: su GitHub, apri il repository → "Add file" → "Upload files" → trascina tutti i file (inclusa la cartella `images`).*

## 3. Attivare GitHub Pages
1. Nel repository, vai su **Settings → Pages**
2. In "Build and deployment" → Source: **Deploy from a branch**
3. Branch: **main**, cartella **/ (root)** → Save
4. Dopo un minuto il sito sarà online su `https://TUO-USERNAME.github.io/matrimonio/`

## 4. Collegare il dominio francesco-e-giulia.it
Il file `CNAME` è già incluso e imposta il dominio lato GitHub. Manca solo la parte DNS dal vostro provider (dove avete comprato il dominio):

**Opzione consigliata (dominio senza www, es. `francesco-e-giulia.it`):**
Aggiungete questi 4 record **A** sul dominio principale (`@`):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**Se volete anche `www.francesco-e-giulia.it`:**
Aggiungete un record **CNAME** per `www` che punta a:
```
TUO-USERNAME.github.io
```

Poi torna su **Settings → Pages** del repository, in "Custom domain" inserisci `francesco-e-giulia.it` e salva. GitHub verificherà il DNS (può richiedere da qualche minuto a qualche ora) e poi puoi attivare **Enforce HTTPS**.

## 5. Attivare l'RSVP
Il form usa [Formspree](https://formspree.io) (gratuito fino a 50 invii/mese):
1. Crea un account gratuito su formspree.io
2. Crea un nuovo "Form", copia l'ID che ti danno (es. `xzbqreab`)
3. In `index.html`, cerca `YOUR_FORM_ID` nel tag `<form ... action="https://formspree.io/f/YOUR_FORM_ID">` e sostituiscilo con il tuo ID
4. Ricarica il sito (nuovo commit/push): da quel momento le conferme arriveranno alla tua email

## 6. Personalizzare i contenuti
Cose da modificare direttamente in `index.html` prima di pubblicare:
- **La nostra storia**: carica in `images/` una foto verticale (`storia-1.jpg`) per il primo incontro e una orizzontale (`storia-2.jpg`) per la prima uscita — i riquadri restano vuoti finché non le aggiungi
- **Galleria**: sostituisci i riquadri `.gallery-item` con vere immagini (`<img src="images/foto1.jpg">`), dopo aver caricato le foto nella cartella `images/`
- **Lista nozze**: testo segnaposto nella sezione `#lista`
