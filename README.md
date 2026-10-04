# 🖥️ Fundamentals of Computers — Complete Study Guide

A self-contained, mobile-friendly study pack for **Unit 1: Fundamentals of Computers**.
Built to be read on a phone, works **fully offline**, no internet or app required after download.

### 🔗 Live links

| | |
|---|---|
| 📘 **Full study guide** | **https://anshug36c.github.io/computer-fundamentals/** |
| 🎯 **Number System Lab** | **https://anshug36c.github.io/computer-fundamentals/number-system-lab.html** |

---

## 📚 What's covered

| Module | Topic |
|---|---|
| 1 | **Data vs Information** — definitions, difference table, types of data, DIKW hierarchy, qualities of good information, GIGO |
| 2 | **The Information Processing Cycle** — Input → Processing → Output → Storage (IPOS), real-life examples (ATM, billing, weather), types of data processing (batch, online, real-time, time-sharing, distributed) |
| 3 | **Introduction to Computers** — full definition with every keyword explained, computer vs calculator, the 5-part computer system |
| 4 | **Characteristics of Computers** — 10 strengths (speed, accuracy, diligence, versatility, storage…) + 6 limitations |
| 5 | **Evolution & History** — Abacus → Babbage → Ada Lovelace → Hollerith → Turing → ENIAC → von Neumann → Intel 4004, the **five generations** table, milestone timeline, India corner (TIFRAC, PARAM) |
| 6 | **Types of Computers** — analog / digital / hybrid, supercomputer → mainframe → mini → micro, general vs special purpose, embedded / server / workstation / IoT / quantum |
| 7 | **Basic Organization of a Digital Computer** — block diagram, input unit, **CPU (ALU + Control Unit + registers)**, memory unit, output unit, system buses, instruction cycle, memory hierarchy, units of memory, hardware vs software, firmware, motherboards & ports |
| 8 | **Number Systems** — binary, octal, decimal, hexadecimal; positional vs non-positional; **all conversions**: decimal → any base, any base → decimal, binary ↔ octal (3 bits), binary ↔ hex (4 bits), octal ↔ hex, fractions, terminating vs non-terminating |
| 9 | **Related essentials** — binary arithmetic, 1's & 2's complements, signed numbers & overflow, BCD, Excess-3, Gray code, ASCII, EBCDIC, Unicode, parity, logic gates, real-world uses |
| 10 | **Quick revision sheet** — the night-before-the-exam page |
| 11 | **62 practice questions with answers** (32 theory + 30 numericals, click-to-reveal) |
| + | **Glossary** of 40+ key terms |

## 🧰 The interactive lab (`number-system-lab.html`)

* **Converter** — any base → any base (2, 3, 5, 7, 8, 10, 12, 16, 60), including fractions, showing the **full working**: division tables, positional expansion, bit grouping.
* **Practice quiz** — random questions on decimal↔binary↔octal↔hex, 1's/2's complement, binary addition and BCD, with auto-checking, a score counter and a **"show steps"** button.
* **Tables & formulas** — digit tables, powers of 2, conversion cookbook.

## 📱 How to use on a phone

1. Open the live guide link above in **Chrome / Safari**.
2. Chrome → **⋮ → Add to Home screen** to keep it as an offline icon.
3. Tap **🖨 Print / save as PDF** in the button bar to make a PDF for sharing on WhatsApp.
4. Or simply download `index.html` + `number-system-lab.html` (keep them in the same folder) and open in a browser — no internet needed.

See [`SHARE-ON-PHONE.md`](SHARE-ON-PHONE.md) for step-by-step sharing instructions, hosting options and a copy-paste WhatsApp message.

## 📂 Repository layout

```
index.html                     ← the complete study guide (homepage)
number-system-lab.html         ← interactive converter + quiz
README.md                      ← this file
SHARE-ON-PHONE.md              ← how to share/host it
Fundamentals-of-Computers-Notes.md   ← all content as plain-text notes
src/                           ← editable source parts + build & test scripts
```

## 🛠 Rebuilding / editing

Content lives in `src/part1.html` … `src/part7.html`. After editing:

```bash
python3 build.py     # regenerates index.html and checks that all anchors resolve
```

The number-system maths was verified with scripted tests (`src/verify.py`, `src/testlab*.js`) — every worked example in the guide was machine-checked, and the converter's logic passed 9,000 randomised round-trip tests.

## 📄 License

Free to use, copy, print, edit and share for study and teaching.
