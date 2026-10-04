# 📱 How to share this with anyone's phone

## ✅ It is already online — just share this link

**Full study guide:** https://anshug36c.github.io/computer-fundamentals/
**Number System Lab (converter + quiz):** https://anshug36c.github.io/computer-fundamentals/number-system-lab.html

The guide has a **“🎯 Open the practice lab”** button at the top, so you can send people only the first link.
On a phone: Chrome → **⋮ → Add to Home screen** to keep it as an offline icon. Tap **🖨 Print / save as PDF** in the button bar to make a PDF for WhatsApp.

*Everything below is for the case where you also want to send the raw files, or host a copy of your own.*

---


Everything here is **self-contained**: no internet, no app, no login needed to *use* it. Two HTML files + one notes file.

| File | Size | What it is |
|---|---|---|
| **`index.html`** | ~155 KB | The complete study guide — **open this one first** |
| **`number-system-lab.html`** | ~34 KB | Interactive converter (step-by-step working) + auto-checked quiz |
| `Fundamentals-of-Computers-Notes.md` | ~43 KB | Plain-text notes version |
| `site/` folder | — | The two HTML files ready to upload for hosting |

⚠️ **Keep the two HTML files in the same folder** — the guide links to the lab and the lab links back.

---

## ✅ Way 1 — Send the files directly (fastest, zero setup)

**You (sender):**
1. Download both HTML files to your phone.
2. WhatsApp → open the chat or group → **📎 attach → Document** → select `index.html` → send. Do the same for `number-system-lab.html`.
   - Send as **Document/File**, not as text or a forwarded link.
   - Telegram: **attach → File**. Gmail: attach as a file.
3. Want one attachment instead of two? Send the ZIP — but the receiver must unzip it first.

**Tell the receiver this:**
- **Android:** tap the file → if it opens as code, tap **⋮ → Open with → Chrome**. Or download it, then Files → Downloads → tap → *Open with Chrome*.
- **iPhone:** tap the file → **Share → Save to Files** → open the **Files** app → tap it (it opens as a page in the preview). For the interactive quiz, use Chrome/Safari from Files.
- **The quiz buttons need a real browser.** Inside WhatsApp/Telegram's own viewer the page may only *display*. That is why step "Open with Chrome" matters.
- After downloading, it **works fully offline** — aeroplane mode, no data needed, forever.

---

## 🌐 Way 2 — Put it online once, share ONE link (best for a class group)

### Option A — GitHub Pages (free forever, stable link)
1. Create a free account at **github.com**.
2. **New repository** → name it e.g. `computer-fundamentals` → visibility **Public** → *Create repository*.
3. On the repo page: **Add file → Upload files** → upload **both** files from the `site/` folder (`index.html`, `number-system-lab.html`) → **Commit changes**.
   *(GitHub also works in a phone browser — upload straight from your Files app.)*
4. **Settings → Pages** → Branch: **main**, folder: **/ (root)** → **Save**.
5. Wait ~1 minute. Your link is:
   `https://<your-username>.github.io/computer-fundamentals/`
   The guide opens first, and the "🎯 Open the practice lab" button at the top leads to the quiz.

### Option B — Netlify Drop (no GitHub account, ~30 seconds)
1. On a computer open **app.netlify.com/drop** → **drag the `site/` folder** onto the page.
2. You instantly get a URL like `https://sunny-otter-123.netlify.app`. Sign in with email to keep it permanently (and rename it).

### Option C — One page only, simplest
- **tiiny.host** (or similar) → upload `index.html` → get a link in seconds. Fine if you only need the guide online.

> ❌ **Don't use Google Drive / OneDrive for HTML** — they show the code or a download prompt instead of opening the page.

---

## 🖨️ Way 3 — Turn it into a PDF and forward on WhatsApp (best for pure readers)

- **On a phone (Chrome):** open `index.html` → tap **“🖨 Print / save as PDF”** in the button bar under the title → **Print → Save as PDF** → share that PDF.
- The button **auto-opens all answers first**, so the PDF contains the answers. Want a question-only PDF for self-testing? Tap **“🙈 Hide all answers”** first, then print.
- **On a computer:** Chrome → `Ctrl/Cmd + P` → Destination: *Save as PDF*.
- PDFs cannot run the interactive quiz — put the hosted link in your message as well.

---

## 💬 Ready-to-forward message (copy-paste)

**English**
> 📚 *Fundamentals of Computers — complete Unit 1 notes (Data & Information, Information Processing Cycle, Computer Definition, Characteristics, History & Generations, Types of Computers, Organization of a Digital Computer, Number Systems & Conversions).*
> ✔ Full guide with diagrams, worked examples and 60+ questions with answers
> ✔ Bonus tool: converts binary/octal/decimal/hex with full steps + random quiz
> ✔ Works offline — just open `index.html` in Chrome
> Open the file → ⋮ → *Open with Chrome* if it shows code.

**Hinglish**
> 📚 *Fundamentals of Computers — Unit 1 ke complete notes (Data vs Information, IPOS cycle, Computer definition, Characteristics, History & Generations, Types of Computers, Basic Organization, Number Systems & Conversions).*
> ✔ Diagrams, solved examples aur 60+ questions-answers ke saath
> ✔ Extra: number-system converter (step-by-step) + quiz
> ✔ Internet ki zaroorat nahi — file kholo aur ⋮ → *Open with Chrome* dabao.

---

## 🛠 Troubleshooting

| Problem | Fix |
|---|---|
| File opens as raw code | Open it with **Chrome / Safari**, not the chat's internal viewer |
| Quiz buttons don't respond | It's inside an in-app viewer — open the same file in Chrome |
| Colours/layout look plain | The whole file didn't transfer — resend the full ~155 KB file |
| "Open the practice lab" does nothing | Both HTML files must sit in the **same folder / same repo** |
| Sent a ZIP, receiver stuck | Android: Files app → tap zip → **Extract**. iPhone: Files → tap zip (auto-extracts) |
| Want it as an app icon | Chrome → ⋮ → **Add to Home screen** (guide opens full-screen, offline) |

---

## ℹ️ Good to know
- Both pages together are only ~190 KB — sends over WhatsApp instantly, even on slow data.
- No ads, no tracking, no server, nothing to install. The maths tool runs entirely inside the browser.
- Free to copy, print, edit and share with your class.
- Editing the content later: change files in `src/part*.html`, then run `python3 build.py` to rebuild `index.html` and refresh `site/`.
