# Fundamentals of Computers — Complete Unit 1 Notes

> Everything in this unit in one file: **Data & Information · Information Processing Cycle · Computer Definition · Characteristics · Evolution & History · Types of Computers · Basic Organization of a Digital Computer · Number Systems & Conversions.**
> Companion files: `index.html` (full illustrated guide with diagrams) and `number-system-lab.html` (converter with step-by-step working + random quiz).

**How to study:** read a section → cover the worked example and redo it on paper → answer the questions at the end from memory.
**Exam formula that covers most of the paper:** *definition (verbatim) + one difference table per pair of terms + three diagrams* (computer block diagram, IPOS cycle, memory hierarchy).

---

## 1. Data vs Information

### Definitions
- **Data** — raw, unorganised, unprocessed facts and figures that have little or no meaning by themselves. It is the **input**. *Examples: 45, 78, 92, 67 · "Rahul, 21, Kichha" · keyboard input · camera pixels.*
- **Information** — data that has been processed, organised and given context so that it becomes meaningful and useful for decision making. It is the **output**. *Example: "Rahul scored 78/100 — Grade B; class average 70.5; position 3rd."*
- **Data processing** — any operation (calculating, sorting, summarising, comparing, classifying) performed on data to obtain information.

### Types of data
| Basis | Types |
|---|---|
| Nature | **Quantitative** (numeric — marks 78) vs **Qualitative** (descriptive — "good student") |
| Structure | **Structured** (table/rows-columns) vs **Unstructured** (photos, audio, chat) |
| Continuity | **Discrete** (countable — 47 students) vs **Continuous** (any value — 31.62 °C) |

### Data vs Information — difference table
| Point | Data | Information |
|---|---|---|
| Meaning | Raw, unprocessed facts | Processed, meaningful facts |
| Form | Scattered, disorganised | Organised, in context |
| Usefulness | Not directly usable for decisions | Directly usable for decisions |
| Role in IPO cycle | Input | Output |
| Dependency | Independent — same data can yield many informations | Depends on data and how it is processed |
| Size | Usually very large | Small, condensed, specific |
| Example | 30 daily temperatures: 30.1, 29.8, 32.4 … | "Highest temperature this month = 32.4 °C on the 12th" |
| Analogy | Bricks, cement, sand | The finished house |

**Memory hook:** **D**ata = **D**umb facts; **I**nformation = **I**ntelligent facts (data + meaning). "Data is processed to get information; information is data in context."

### DIKW hierarchy
**Data** (raw facts) → **Information** (data + context; who/what/when) → **Knowledge** (patterns; how) → **Wisdom** (judgement; why/what to do).
*Weather example:* 28.4, 29.1, 31.7 → "average temp rose 4 °C in June" → "temperature rises as monsoon approaches" → "plan irrigation before June".

### Qualities of good information
**Accurate · Complete · Relevant · Timely · Clear · Verifiable · Cost-effective · Accessible · Reliable** (short form: ACRTVCCAR; the big four = **ACCURATE, COMPLETE, RELEVANT, TIMELY**).

### Other terms
- **GIGO** — Garbage In Garbage Out: a computer is only as good as the data fed to it.
- **Metadata** — data about data (creation date, size, author).
- **Big Data (5 V's)** — Volume, Velocity, Variety, Veracity, Value.

---

## 2. The Information Processing Cycle (IPO / IPOS)

**Input → Processing → Output → Storage** (some books add a 5th stage: **Communication/Distribution**, or **Control/Feedback**).

1. **Input** — data and instructions are entered through input devices and stored in memory. Data still has no meaning.
2. **Processing** — the CPU (ALU + Control Unit) performs arithmetic and logical operations: calculating, comparing, sorting, searching, classifying, summarising. Data becomes information.
3. **Output** — the result is presented in usable form: **soft copy** (monitor, projector, speakers) or **hard copy** (printer, plotter).
4. **Storage** — data and results are saved for future use: primary memory (RAM) and secondary storage (HDD, SSD, pen drive, cloud). Storage is what makes a computer different from a calculator.

**Real-life examples**

| System | Input | Processing | Output | Storage |
|---|---|---|---|---|
| ATM | Card, PIN, amount | Verify PIN, check balance, debit | Cash, receipt, balance | Updated account record |
| Shop billing | Barcode scans | Look up price, add tax, total | Printed bill | Sales record |
| Weather forecasting | Temperature, wind, satellite data | Run prediction model | Rain alert, forecast | Historical database |
| Marksheet app | Student marks | Total, percentage, grade | Report card | School database |

**The system around the cycle:** Hardware + Software + Data + People (liveware) + Procedures + Connectivity.

### Types of data processing
| Type | How it works | Example |
|---|---|---|
| **Batch** | Collected over time, processed together; no user interaction | Salary, results, electricity bills |
| **Online / Transaction** | Each transaction processed immediately; user waits | ATM, railway booking, UPI |
| **Real-time** | Must finish within a deadline to control a physical process | Air-traffic control, ICU monitor, ABS brakes |
| **Time-sharing / Multiprogramming** | Many users share one CPU, switched rapidly | College server, cloud |
| **Distributed** | Job split across many networked computers | Search engines, banking networks |

---

## 3. What is a Computer?

### Definition (learn both)
- **Full:** *A computer is an electronic, programmable device that accepts data and instructions as input, processes them automatically according to a stored set of instructions (a program), produces meaningful information as output, and stores the results for future use.*
- **Short:** *An electronic device that takes input, processes it according to instructions, gives output, and can store data.*

Word origin: Latin ***computare*** = to calculate.

### Every keyword matters
| Word | Why it matters |
|---|---|
| **Electronic** | Runs on electricity using circuits; works with binary 0/1 |
| **Programmable** | Follows a **stored set of instructions** — change the program, same machine does a totally different job (**stored-program concept**, von Neumann) |
| **Accepts data** | It cannot think; data must be supplied |
| **Automatic** | Works without step-by-step human help once started |
| **Output** | Converts raw data into usable, meaningful form |
| **Stores** | Remembers data and instructions — unlike a calculator |

### Computer vs Calculator
| Feature | Calculator | Computer |
|---|---|---|
| Memory | Minimal/temporary | Large (primary + secondary) |
| Programmable | No, fixed operations | Yes, any program |
| Automatic | Needs a key press per step | Runs a whole program |
| Devices | Keypad + display | Keyboard, mouse, printer, disk, network |
| Logic/decisions | No | Yes ("if… then…") |

**Computer system** = hardware + software + data + users + procedures (+ connectivity). "Computer" alone means the machine.

---

## 4. Characteristics of Computers

### Strengths
| # | Characteristic | Meaning / figure |
|---|---|---|
| 1 | **Speed** | Billions of operations per second (GHz); supercomputers in FLOPS |
| 2 | **Accuracy** | 100% correct if input and program are correct; errors come from GIGO or faulty logic |
| 3 | **Diligence** | Same accuracy on the 10-lakhth transaction as on the first; no fatigue or boredom |
| 4 | **Versatility** | One machine does many jobs (music, accounts, design, gaming) — only software changes |
| 5 | **Storage** | KB in the 1980s → terabytes/petabytes today; cloud is practically unlimited |
| 6 | **Automatism** | Runs the whole job by itself once started (overnight batch, auto-backup) |
| 7 | **Reliability** | Same input + same program = same output, always |
| 8 | **Cost-effectiveness** | One machine replaces many clerks; cheaper per unit of work |
| 9 | **Logical decisions** | Compares and branches: "if marks ≥ 33 then pass" |
| 10 | **Memory / retrieval** | Finds one record among crores in milliseconds |

**Memory hook:** **S·A·D·V·S·A·R·C·L·P** — *"Some Androids Don't Very Simply Accept Random Crazy Logical Problems"*. The famous trio first: **Speed · Accuracy · Diligence**.

### Limitations
- **No intelligence of its own** — cannot think, reason or decide; only obeys programs.
- **No emotions or judgement** — cannot feel or judge right/wrong.
- **GIGO** — wrong data or wrong program → wrong output.
- **Needs electricity, maintenance, a suitable environment.**
- **Cannot learn from experience by itself** — must be reprogrammed/retrained.
- **Zero common sense** — instructions must be literal.

*Summary line:* "A computer is a **dumb machine with a great memory** — fast, accurate, obedient, tireless, but thoughtless."

---

## 5. Evolution and History of Computers

### 5.1 Pre-history — calculating aids
| When | Invention / Person | Contribution |
|---|---|---|
| ~3000 BC | **Abacus** (Babylon/China) | First manual calculating device — beads on rods |
| 1617 | **Napier's Bones** — John Napier | Rods for multiplication/division; also logarithms |
| 1622 | **Slide Rule** — William Oughtred | Analog calculator used for 300+ years |
| 1642 | **Pascaline** — Blaise Pascal | First mechanical calculator (gears); add & subtract |
| 1673 | **Stepped Reckoner** — Gottfried Leibniz | First multiply/divide machine; gave the **binary system** |
| 1801 | **Jacquard Loom** — Joseph Marie Jacquard | **Punched cards** controlling a loom — first "stored instructions" |
| 1822/1837 | **Difference Engine & Analytical Engine** — **Charles Babbage** | **Father of the Computer**; Analytical Engine = mill (CPU) + store (memory) + card input + printer, first general-purpose programmable design |
| 1843 | **Ada Lovelace** | Wrote the first program (Bernoulli numbers) — **first programmer** |
| 1890 | **Herman Hollerith** | Punched-card tabulator for the US Census → his firm became **IBM** (1924) |
| 1936–50 | **Alan Turing** | **Turing Machine** (model of computation), Enigma code-breaking, **Turing Test** (1950) — father of computer science/AI |
| 1938–41 | **Z1/Z3** — Konrad Zuse | Z3 = first programmable, fully automatic digital computer (relays) |
| 1944 | **Harvard Mark-I** — Aiken & IBM | Electro-mechanical general-purpose calculator, 50 feet long |

### 5.2 The machines that start the real story
| Machine | Year | Key facts |
|---|---|---|
| **ENIAC** | 1946 | Eckert & Mauchly, Univ. of Pennsylvania; **first large general-purpose electronic digital computer**; ~18,000 vacuum tubes, ~30 tonnes, ~5,000 additions/sec; programmed by rewiring plugboards |
| **EDVAC** | design 1945, built 1951 | **Stored-program concept** — "First Draft of a Report on the EDVAC" by **John von Neumann**: data *and* instructions in the same memory |
| **EDSAC** | 1949 | Cambridge (Maurice Wilkes) — first practical stored-program computer in regular use |
| **Manchester Baby (SSEM)** | 1948 | First machine to actually **run** a program stored in electronic memory |
| **UNIVAC-I** | 1951 | First **commercial** computer sold in the USA; predicted the 1952 election |
| **IBM System/360** | 1964 | First **family** of compatible computers (3rd generation landmark) |
| **Intel 4004** | 1971 | **First microprocessor** — complete CPU on one chip |
| **Altair 8800 / Apple II / IBM PC** | 1975/77/81 | The personal-computer revolution |

### 5.3 The Five Generations
| Gen | Period | Technology | Features | Examples | Languages/Software |
|---|---|---|---|---|---|
| **1st** | 1940–56 | **Vacuum tubes** | Huge, heavy, hot, costly, unreliable, slow (ms), huge power; punched cards; one program at a time | ENIAC, EDVAC, EDSAC, UNIVAC-I, IBM 701/650 | Machine language (0s and 1s) |
| **2nd** | 1956–63 | **Transistors** (Bell Labs, 1947) | Smaller, cheaper, faster, reliable, less heat; magnetic core & tape; batch OS; printers/disks | IBM 1401, IBM 7094, CDC 1604, UNIVAC 1108 | **FORTRAN (1957), COBOL (1959)**, ALGOL, LISP, Assembly |
| **3rd** | 1964–71 | **Integrated Circuits (ICs)** — Kilby & Noyce 1958; SSI/MSI | Much smaller/faster/reliable; keyboard + monitor; **operating systems, time-sharing, multiprogramming**; minicomputers | IBM System/360, PDP-8, PDP-11, ICL 1900 | BASIC, PASCAL, C; Unix (1969) |
| **4th** | 1971–80s → today | **Microprocessors + LSI/VLSI/ULSI** | Personal computers; GUI/mouse/windows; optical & flash storage; networks, internet, email, multimedia; laptops, mobiles | IBM PC, Apple Macintosh, Intel 4004/8086/Pentium, Cray | C++, Java, Python, SQL; Windows, Linux, macOS, Android |
| **5th** | 1980s → future | **Artificial Intelligence**, parallel processing, **quantum computing**, nanotechnology | Machines that learn: ML, natural language, vision, robotics, expert systems, cloud/IoT/Big Data, **knowledge processing** | IBM Watson, AlphaGo, self-driving cars, Alexa/Siri, generative AI, quantum computers | Python/ML frameworks (TensorFlow, PyTorch), PROLOG |

**Memory hook:** **V-T-I-M-A** → *"Very Tall Indians Make Achievements"* — **V**acuum tube → **T**ransistor → **I**C → **M**icroprocessor → **A**I.

### 5.4 Milestone timeline
| Year | Milestone |
|---|---|
| 3000 BC | Abacus |
| 1642 / 1673 | Pascaline / Stepped Reckoner (binary system) |
| 1837 | Analytical Engine — Babbage, father of the computer |
| 1843 | Ada Lovelace — first program |
| 1890 | Hollerith tabulator → IBM |
| 1936 | Turing Machine |
| 1946 | ENIAC |
| 1945/1951 | Von Neumann stored-program (EDVAC) |
| 1947 / 1958 | Transistor / Integrated Circuit invented |
| 1951 | UNIVAC-I, first commercial computer |
| 1971 | Intel 4004, first microprocessor |
| 1975–81 | Altair, Apple II, IBM PC |
| 1989–91 | World Wide Web (Tim Berners-Lee); Linux; **PARAM 8000 (India)** |
| 1997 | Deep Blue beats Kasparov |
| 2011–16 | Watson wins Jeopardy! · AlphaGo beats Go champion |
| 2019–24 | Quantum supremacy claims; exascale machines; generative-AI boom |

### 5.5 India corner
- **1955 — HEC-2M** at the Indian Statistical Institute, Kolkata: first electronic computer in India.
- **1960 — TIFRAC**, TIFR Mumbai: India's first indigenously designed computer.
- **1991 — PARAM 8000**: India's first indigenous supercomputer, **C-DAC**, under **Dr. Vijay Bhatkar**.
- **Today** — PARAM series, PARAM Siddhi-AI, National Supercomputing Mission (2015) and PARAM Rudra systems.

---

## 6. Types of Computers

### 6.1 By data handling
| Type | Works on | Principle | Speed/Accuracy | Examples |
|---|---|---|---|---|
| **Analog** | **Continuous** quantities (voltage, pressure, temperature) | Measures continuously varying physical quantities; output as dials/graphs | Very fast, **less accurate**, approximate | Speedometer, mercury thermometer, analog watch, oscilloscope, flight simulator |
| **Digital** | **Discrete** data (0s & 1s) | Counts discrete values; binary processing; can store | Very accurate, exact, storable | Laptop, desktop, smartphone, calculator, ATM |
| **Hybrid** | Both — analog input → digitised → digital processing → analog output | Combines analog speed with digital accuracy/control | Accurate + real-time | ECG/ICU monitors, petrol pumps, aircraft & spacecraft control, weather/defence systems |

**Hook:** **A**nalog = **A**pproximate (waves) · **D**igital = **D**efinite (digits) · **H**ybrid = **H**alf and half.

### 6.2 By size, speed, power, cost
| Type | Size/Power | Speed | Cost | Features/Users | Examples |
|---|---|---|---|---|---|
| **Supercomputer** | Largest, thousands of parallel processors | Highest — petaFLOPS to exaFLOPS (10¹⁸ ops/sec) | Crores | Weather/cyclone forecasting, climate modelling, nuclear & defence simulation, drug/genome research, oil exploration, AI training, rendering | Frontier, Fugaku, Sunway TaihuLight, **PARAM Siddhi-AI, PARAM Rudra** |
| **Mainframe** | Very large, thousands of users | Very high (millions of transactions/hr) | Very expensive | Centralised high-volume transaction processing: banking, railways (IRCTC), insurance, census; famous reliability | IBM z Series, IBM ES/9000 |
| **Minicomputer / Midrange** | Medium | High | Moderate–high | Department-level multi-user server: hospital, college, bank branch | PDP-8, PDP-11, VAX, IBM AS/400 (IBM i) |
| **Microcomputer (PC)** | Smallest; CPU on a microprocessor | High for one user (today's phone beats 1990s supercomputers) | Cheapest | Single-user general purpose: **desktop**, **laptop/notebook**, **tablet/smartphone**, **workstation** | HP/Dell desktops, MacBook, iPad, Android phones |

**Order to quote:** Supercomputer > Mainframe > Minicomputer > Microcomputer (size, power, cost). Portability order reverses.

### 6.3 By purpose
- **General-purpose** — versatile, any program: desktop, laptop, server, tablet.
- **Special-purpose (dedicated)** — built for one fixed task: ATM, washing machine, digital camera, microwave, car ECU, POS billing, MRI, traffic-light controller.

### 6.4 Modern classifications (one line each)
**Embedded computer** (inside another device — AC, router, smart TV) · **Server** (provides services to clients) · **Workstation** (high-end single-user engineering/design) · **Wearable/IoT/Edge** (smartwatch, sensor node) · **Quantum computer** (qubits, superposition) · **Grid/Cluster/Cloud** (many computers as one resource; IaaS/PaaS/SaaS).

---

## 7. Basic Organization of a Digital Computer

### 7.1 The block diagram (draw this from memory)
```
        INPUT UNIT                    CENTRAL PROCESSING UNIT                    OUTPUT UNIT
   keyboard, mouse,       ┌──────────────────────────────────────┐        monitor, printer,
   scanner, mic,          │              CPU                     │        speakers, projector
   camera, sensor  ─────► │   ┌─────────┐    ┌──────────────┐     │ ─────► (soft copy / hard copy)
                          │   │   ALU   │    │ CONTROL UNIT │     │
                          │   └─────────┘    └──────────────┘     │
                          │        REGISTERS: PC, IR, MAR, MDR, ACC│
                          └───────────────┬──────────────────────┘
                                          │ SYSTEM BUS
                                          │ (data / address / control)
                          ┌───────────────┴──────────────────────┐
                          │           MEMORY UNIT                │
                          │  PRIMARY: RAM, ROM, Cache (fast, small)
                          │  SECONDARY: HDD, SSD, pen drive, cloud (slow, huge)
                          └──────────────────────────────────────┘
```

### 7.2 Functions of each unit
- **Input Unit** — accepts data and instructions, converts them into machine-readable binary form and passes them on. Devices: keyboard, mouse, trackball, joystick, scanner, mic, webcam, touchscreen, light pen, digitizer, barcode/QR reader, OMR, OCR, MICR, biometrics.
- **CPU ("the brain")**
  - **ALU (Arithmetic Logic Unit)** — does the actual work: arithmetic (+ − × ÷) and logical/comparison (>, <, =, AND, OR, NOT); stores the result in a register (usually the **Accumulator**) and sets flags (zero, carry, sign, overflow).
  - **Control Unit** — does **not** process data; it **fetches, decodes and directs** — tells the ALU what to do, memory when to read/write, I/O devices when to act, and keeps everything in step with the clock. The "traffic police".
  - **Registers** — fastest temporary storage inside the CPU: **PC** (address of next instruction), **IR** (current instruction), **MAR** (memory address), **MDR** (memory data), **ACC** (accumulator), plus general-purpose registers.
- **Memory Unit** — stores data, instructions and results; memory is an array of numbered cells ("addresses"). **Primary** (CPU-accessible: RAM, ROM, cache) and **Secondary** (permanent, huge, cheap: HDD, SSD, optical, pen drive, cloud).
- **Output Unit** — converts binary results into human-readable form: **soft copy** (monitor/LCD/LED/OLED, projector, speakers) and **hard copy** (impact printers — dot-matrix, daisy wheel, line printer; non-impact — inkjet, laser, thermal, 3D; plus plotters).

**Hooks:** **ALU = A**ll **L**ogic **U**nderstanding (does the sums). **CU = C**hief **U**mpire (gives the orders).

### 7.3 System buses
| Bus | Direction | Carries | Key point |
|---|---|---|---|
| **Data bus** | Bidirectional | Actual data & instructions | Width (8/16/32/64 bits) = how much at a time |
| **Address bus** | CPU → memory | Address of the cell to read/write | n lines → **2ⁿ locations**; 32 lines → 2³² ≈ 4 GB |
| **Control bus** | Bidirectional | Read, write, interrupt, clock, reset | Synchronises everything — the CU's channel |

### 7.4 Instruction cycle (fetch–decode–execute cycle / machine cycle)
1. **FETCH** — CU reads the next instruction from the address in the **PC**; PC is incremented.
2. **DECODE** — instruction goes to the **IR**; the CU works out the operation and operands.
3. **EXECUTE** — the ALU performs the operation (or data moves, or a device is signalled).
4. **STORE / WRITE-BACK** — result written to a register or memory; flags updated. Repeat.

Repeats billions of times/second, timed by the **system clock**. **Von Neumann architecture** = data and instructions in the same memory; **Harvard architecture** = separate instruction and data memories (microcontrollers, DSPs).

### 7.5 Memory hierarchy & storage
**Registers > Cache (L1/L2/L3) > Primary (RAM/ROM) > Secondary/Tertiary (SSD, HDD, optical, tape, cloud)**
Going up: faster, costlier per byte, smaller. Going down: slower, cheaper, bigger. Cache bridges the CPU–RAM speed gap.

| Storage | Type | Volatile? | Typical size | Notes |
|---|---|---|---|---|
| Registers | Primary (in CPU) | Yes | bytes | Fastest |
| Cache | Primary | Yes | KB–MB | L1 in-core, L2, L3 shared; "hit rate" decides performance |
| **RAM** | Primary | **Yes** | GB | Read/write working memory; **SRAM** (fast, flip-flops, cache) vs **DRAM** (capacitors, needs refresh, main memory) |
| **ROM** | Primary | **No** | KB–MB | Read-only firmware/BIOS; **PROM** (write once), **EPROM** (UV erase), **EEPROM** (electrical erase), Flash |
| SSD/Flash | Secondary | No | GB–TB | No moving parts, silent, fast, shock-resistant |
| HDD | Secondary | No | TB | Magnetic platters; mechanical, cheap per TB |
| Optical | Secondary | No | 700 MB / 4.7 GB / 25 GB | CD / DVD / Blu-ray, read by laser |
| Pen drive / card | Secondary | No | GB–TB | Portable flash storage |
| Magnetic tape | Tertiary | No | TB+ | Sequential access; backups/archives |
| Cloud | Remote | No | Unlimited | On someone else's servers, over the internet |

### 7.6 Units of memory
| Unit | Value | Roughly |
|---|---|---|
| **Bit** | 1 binary digit (0/1) | Smallest unit |
| **Nibble** | 4 bits | One hex digit |
| **Byte** | 8 bits | One character; 256 values (0–255) |
| **Word** | Machine dependent (8/16/32/64 bits) | What the CPU handles at once |
| KB / MB / GB / TB / PB / EB / ZB / YB | 2¹⁰ / 2²⁰ / 2³⁰ / 2⁴⁰ / 2⁵⁰ / 2⁶⁰ / 2⁷⁰ / 2⁸⁰ bytes | Page of text → photo → movie → hard disk → data centre → global traffic |

⚠️ In computing 1 KB = **1024 bytes** (powers of 2), but disk makers use 1000 — hence a "500 GB" disk shows less. Strictly 1024 B = 1 KiB.

**Speed terms:** clock speed (Hz/MHz/GHz) · **MIPS** (million instructions/sec) · **FLOPS** (floating-point ops/sec; supercomputers in tera/peta/exaFLOPS) · latency (delay) vs bandwidth (throughput).

### 7.7 Hardware vs Software (+ firmware)
| | Hardware | Software |
|---|---|---|
| Nature | Physical, touchable | Programs/instructions — intangible |
| Failure | Wears out | Does not wear out; becomes obsolete (bug = "software failure") |
| Dependency | Dead without software | Cannot run without hardware |
| Examples | CPU, RAM, keyboard, motherboard | Windows, MS Word, Chrome, compiler |

- **System software** — runs the machine: OS (Windows, Linux, macOS, Android, iOS), drivers, utilities, language processors, BIOS/firmware.
- **Application software** — does the user's job: general (word processor, spreadsheet, browser) and specific (payroll, railway reservation, Tally, AutoCAD).
- **Firmware** — software permanently stored in ROM/BIOS. **Middleware** — connects two applications (e.g. payment gateway).
- **Language processors:** **Assembler** (assembly → machine code) · **Compiler** (whole program at once; all errors together; C/C++) · **Interpreter** (line by line; stops at first error; Python/BASIC) · **Linker** (joins object + library code) · **Loader** (loads executable into RAM).
- **Motherboard** holds CPU, memory slots, chipset, expansion slots. **Ports:** USB, HDMI, VGA, Ethernet (RJ-45), audio jack; wireless Wi-Fi/Bluetooth/NFC. **Expansion cards:** GPU, sound, network.

---

## 8. Number Systems

### 8.1 Basics
**A number system is a set of symbols (digits) and rules for representing numbers.** The **base/radix (r)** gives: (i) exactly **r** digits, **0 to r−1**; (ii) place weights = powers of r; (iii) a carry when a digit reaches r−1.
- **Face value** = the digit itself. **Place value** = digit × weight of its position.
- **Radix point** separates integer and fraction parts.
- *Decimal example:* 3472 = 3×10³ + 4×10² + 7×10¹ + 2×10⁰.

### 8.2 The four systems
| System | Base | Digits | Weights | Where used |
|---|---|---|---|---|
| **Binary** | 2 | 0,1 | …8, 4, 2, 1 . 1/2, 1/4… | Inside every computer (two circuit states) |
| **Octal** | 8 | 0–7 | …64, 8, 1 . 1/8… | 1 digit = 3 bits; Unix permissions `chmod 755` |
| **Decimal** | 10 | 0–9 | …1000, 100, 10, 1 | Human counting |
| **Hexadecimal** | 16 | 0–9, A–F (A=10…F=15) | …256, 16, 1 . 1/16… | 1 digit = 4 bits; addresses, colour codes `#FF0000`, MAC addresses |

Writing a base: `(1011)₂ = 1011₂ = 0b1011` · `(745)₈ = 745₈ = 0o745` · `(2F3)₁₆ = 2F3₁₆ = 0x2F3` · decimal plain: 156.

**Validity rule:** a digit must be < base. (234)₈ valid, (289)₈ **invalid**; (102)₂ valid, (12A)₁₆ valid, (1G)₁₆ invalid.

**Other bases:** 3 ternary · 5 quinary · 7 · 12 duodecimal (dozen, months, clock) · 20 vigesimal · 32/64 (URL/data encoding) · 60 sexagesimal (time, angles).

### 8.3 Positional vs non-positional
**Positional** — value depends on position (47 ≠ 74; all modern systems; easy arithmetic). **Non-positional** — fixed symbol value (Roman numerals, tally marks; hard arithmetic).

### 8.4 Counting table & powers of 2
| Dec | Bin | Oct | Hex |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 1 | 1 | 1 | 1 |
| 2 | 10 | 2 | 2 |
| 3 | 11 | 3 | 3 |
| 4 | 100 | 4 | 4 |
| 5 | 101 | 5 | 5 |
| 6 | 110 | 6 | 6 |
| 7 | 111 | 7 | 7 |
| 8 | 1000 | 10 | 8 |
| 9 | 1001 | 11 | 9 |
| 10 | 1010 | 12 | A |
| 11 | 1011 | 13 | B |
| 12 | 1100 | 14 | C |
| 13 | 1101 | 15 | D |
| 14 | 1110 | 16 | E |
| 15 | 1111 | 17 | F |
| 16 | 10000 | 20 | 10 |

**Powers of 2:** 2⁰=1, 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32, 2⁶=64, 2⁷=128, 2⁸=256, 2⁹=512, 2¹⁰=1024, 2¹⁶=65536, 2²⁰≈10.5 lakh, 2³²≈4.3 billion.
**8-bit weights:** `128 64 32 16 8 4 2 1` — memorise this row and you can convert 8-bit numbers mentally.

### 8.5 The conversion map
| From → To | Method | Rule |
|---|---|---|
| Decimal → any base (integer) | Repeated **division** | collect remainders, read **bottom → top** |
| Decimal → any base (fraction) | Repeated **multiplication** | collect integer parts, read **top → bottom** |
| Any base → decimal | **Positional expansion** | digit × weight (power of base), sum |
| Binary ↔ Octal | **Groups of 3 bits** | pad from the radix point; 2³ = 8 |
| Binary ↔ Hex | **Groups of 4 bits** | pad from the radix point; 2⁴ = 16 |
| Octal ↔ Hex | **Via binary** (fast) or **via decimal** (safe) | no direct shortcut |

### 8.6 Decimal → Binary
**Method A — repeated division by 2**
```
45 ÷ 2 = 22 r 1   ↑
22 ÷ 2 = 11 r 0   ↑
11 ÷ 2 =  5 r 1   ↑   read remainders BOTTOM → TOP
 5 ÷ 2 =  2 r 1   ↑
 2 ÷ 2 =  1 r 0   ↑
 1 ÷ 2 =  0 r 1   ↑
(45)₁₀ = (101101)₂    Check: 32+8+4+1 = 45 ✔
```
**Method B — power subtraction (faster mentally)**
```
156: weights 128 64 32 16 8 4 2 1
128 ≤ 156 → 1 (rem 28) | 64 > 28 → 0 | 32 > 28 → 0 | 16 ≤ 28 → 1 (rem 12)
8 → 1 (rem 4) | 4 → 1 (rem 0) | 2 → 0 | 1 → 0
(156)₁₀ = (10011100)₂   Check: 128+16+8+4 = 156 ✔
```
⚠️ **Common mistake:** reading remainders top-to-bottom. First remainder = **LSB**, last remainder = **MSB**.

### 8.7 Decimal → Octal / Hexadecimal (same idea, divide by 8 or 16)
```
156 ÷ 8  = 19 r 4 ;  19 ÷ 8 = 2 r 3 ;  2 ÷ 8 = 0 r 2   → (234)₈   Check 128+24+4 = 156 ✔
156 ÷ 16 =  9 r 12(C) ; 9 ÷ 16 = 0 r 9                → (9C)₁₆   Check 144+12 = 156 ✔
1000 → (1750)₈     1000 → (3E8)₁₆     254 → (FE)₁₆
```

### 8.8 Any base → Decimal (positional expansion)
```
(1011.101)₂ = 1×8 + 0×4 + 1×2 + 1×1 + 1×1/2 + 0×1/4 + 1×1/8 = (11.625)₁₀
(745)₈   = 7×64 + 4×8 + 5        = 448+32+5   = (485)₁₀
(2F3)₁₆  = 2×256 + 15×16 + 3×1   = 512+240+3  = (755)₁₀
(A2C)₁₆  = 10×256 + 2×16 + 12    = 2560+32+12 = (2604)₁₀
(345)₇   = 3×49 + 4×7 + 5        = 147+28+5   = (180)₁₀
(2101)₃  = 2×27 + 1×9 + 0×3 + 1  = 54+9+0+1   = (64)₁₀
```

### 8.9 Binary ↔ Octal (groups of 3)
```
(101101)₂      → 101 | 101                     → (55)₈
(11011010)₂    → 011 | 011 | 010  (pad left)   → (332)₈
(745)₈         → 111 100 101                   → (111100101)₂
3-bit table: 0=000 1=001 2=010 3=011 4=100 5=101 6=110 7=111
```

### 8.10 Binary ↔ Hex (groups of 4 = one nibble)
```
(101101)₂    → 0010 | 1101                → (2D)₁₆
(11011010)₂  → 1101 | 1010                → (DA)₁₆
(2F3)₁₆      → 0010 1111 0011             → 001011110011 = (1011110011)₂
4-bit table: 0=0000 1=0001 2=0010 3=0011 4=0100 5=0101 6=0110 7=0111
             8=1000 9=1001 A=1010 B=1011 C=1100 D=1101 E=1110 F=1111
```

### 8.11 Octal ↔ Hex (through binary)
```
(2F3)₁₆ → binary 0010 1111 0011 → regroup in 3s: 001|011|110|011 → (1363)₈   (both = 755 ✔)
(745)₈  → binary 111 100 101 → pad to 4s: 0001 1110 0101        → (1E5)₁₆    (both = 485 ✔)
```

### 8.12 Fractions
**Decimal fraction → base r: repeated MULTIPLICATION**
```
(0.6875)₁₀ → binary
0.6875 × 2 = 1.375 → 1   ↓
0.3750 × 2 = 0.750 → 0   ↓   read integer parts TOP → BOTTOM
0.7500 × 2 = 1.500 → 1   ↓
0.5000 × 2 = 1.000 → 1   ↓   stop when the fraction becomes 0
Answer: (0.1011)₂   Check: 0.5 + 0.125 + 0.0625 = 0.6875 ✔

(13.625)₁₀ : 13 → 1101 ; 0.625 → 101  →  (1101.101)₂
(0.625)₁₀ → octal 0.5₈ (0.625×8 = 5.0) ; → hex 0.A₁₆ (0.625×16 = 10.0)
(0.375)₁₀ → 0.3₈
```
**Non-terminating fractions**
```
(0.35)₁₀ = (0.0101100…)₂  ≈ 0.010110 (0.34375) — it never ends; stop after the required bits and write ≈
(0.2)₁₀ = (0.0011001100…)₂   (0.1)₁₀ = (0.000110011…)₂
→ This is why 0.1 + 0.2 ≠ 0.3 exactly in programming languages!
```
**Fraction in another base → decimal:** use negative powers. `(0.101)₂ = 0.5 + 0.125 = 0.625` · `(0.11)₂ = 0.75` · `(0.A)₁₆ = 10/16 = 0.625`.

---

## 9. Binary Arithmetic, Complements & Codes

### 9.1 Rules
**Addition:** 0+0=0 · 0+1=1 · 1+0=1 · **1+1=10 (write 0, carry 1)** · 1+1+1=11 (write 1, carry 1)
**Subtraction:** 0−0=0 · 1−0=1 · 1−1=0 · 0−1 needs a borrow → 10−1 = 1

```
Addition: 1011 + 0110            Subtraction: 1010 − 0111 = 0011   (10 − 7 = 3)
   1 1 0 0  ← carries
     1 0 1 1
   + 0 1 1 0
   ─────────
   1 0 0 0 1      = 17 ✔

Multiplication: 1011 × 110 = 1000010   (11 × 6 = 66)
   → binary multiplication is only ADDITIONS + SHIFTS, which is why the CPU needs just an adder.

Division: 110110 ÷ 110 = 1001 remainder 0   (54 ÷ 6 = 9)
```
**Octal/hex arithmetic** — same carry/borrow idea with base 8/16:
`(57)₈ + (45)₈ = (124)₈` · `(745)₈ − (456)₈ = (267)₈` · `(2B)₁₆ + (1A)₁₆ = (45)₁₆` · `(A2)₁₆ − (7C)₁₆ = (26)₁₆` · `(FF)₁₆ + 1 = (100)₁₆`

### 9.2 Complements (how computers subtract by adding)
| Complement | Binary | Decimal |
|---|---|---|
| **Diminished radix, (r−1)'s** = **1's complement** | Invert every bit (0↔1) | **9's complement**: subtract each digit from 9 (4567 → 5432) |
| **Radix, r's** = **2's complement** | 1's complement **+ 1** | **10's complement**: 9's + 1 (4567 → 5433 = 10000 − 4567) |

```
2's complement of 45 = 00101101 :
  1's complement : 11010010   (invert)
  + 1            : 11010011   → represents −45
  Check: 00101101 + 11010011 = 1 00000000 → discard the carry → 00000000 ✔

Subtraction by 2's complement: 45 − 17
  45 = 00101101 ;  17 = 00010001 ; 2's comp of 17 = 11101111
  00101101 + 11101111 = 1 00011100 → drop carry → 00011100 = 28 ✔

Negative result: 17 − 45
  00010001 + 11010011 = 11100100 → no carry out ⇒ negative, in 2's complement form
  take the 2's complement of 11100100 → 00011100 = 28 ⇒ answer = −28
```
**Signed ranges (8-bit):** sign-magnitude −127…+127 (two zeros: ±0) · 1's complement −127…+127 (two zeros) · **2's complement −128…+127** (one zero, arithmetic just works) — formula **−2ⁿ⁻¹ to 2ⁿ⁻¹−1**.
**Overflow:** 127 + 1 = 01111111 + 1 = 10000000 = −128 (wrong sign → overflow). Detect by comparing the carry into the MSB with the carry out.

### 9.3 Codes
| Code | Bits | Key facts |
|---|---|---|
| **BCD (8421)** | 4 per digit | Each decimal digit coded separately. 45 → **0100 0101**; 359 → **0011 0101 1001**. **1010–1111 are invalid.** Wasteful but perfect for decimal displays |
| **Excess-3** | 4 | digit + 3: 0→0011, 5→1000, 9→1100; self-complementing |
| **Gray code** | — | Only **one bit changes** between consecutive values → fewer errors in rotary encoders. Binary 1011 → Gray **1110**; 1110 → Gray **1001** |
| **ASCII** | 7 (128 chars); extended 8 (256) | **'A' = 65, 'a' = 97, '0' = 48**, space = 32; digits 48–57, uppercase 65–90, lowercase 97–122 |
| **EBCDIC** | 8 (256) | IBM mainframe code; not compatible with ASCII |
| **Unicode / UTF-8/16/32** | variable | 1,10,000+ characters (all scripts + emoji); UTF-8 is backward-compatible with ASCII, hence dominates the web |
| **Parity bit** | +1 | Error **detection** only (not correction): even parity ⇒ total number of 1s is even |

### 9.4 Why binary?
1. **Two-state devices are simple and reliable** — ON/OFF, high/low voltage; noise margins are huge (ten levels would be error-prone).
2. **Boolean logic maps exactly** — 0 = false, 1 = true; logic gates do arithmetic.
3. **Less hardware, cheaper, faster, more reliable** — only two symbols to handle.
4. **Storage and transmission** naturally hold two states (magnetised/not, pit/no pit, voltage high/low).
5. **Arithmetic is trivial** — 4 addition and 4 multiplication rules, and subtraction = complement addition (no separate subtractor needed).
**Downside:** long strings — which is exactly why octal/hex exist.

**Logic gates (bonus):** AND ("all true"), OR ("any true"), NOT (inverts = 1's complement), NAND/NOR (universal), XOR ("inputs differ" — sum bit, parity, Gray conversion). **Boolean algebra** (Boole, 1854) + **Shannon (1937)** linking relay circuits to logic = the foundation of digital circuits.

---

## 10. Quick Revision Sheet

**Definitions:** Data = raw facts · Information = processed data · Computer = electronic programmable device (IPO+storage) · Number system = digits + rules with base r · Base = number of symbols.
**Cycles:** **IPOS** Input→Processing→Output→Storage · **Machine cycle** Fetch→Decode→Execute→Store.
**Generations (V-T-I-M-A):** Vacuum tube → Transistor → IC → Microprocessor → AI.
**Fathers & firsts:** Babbage (father of computer) · Ada Lovelace (first programmer) · von Neumann (stored program) · Turing (Turing machine, Turing test) · Hollerith (punched cards → IBM) · ENIAC (first general-purpose electronic digital computer, 1946) · UNIVAC-I (first commercial, 1951) · Intel 4004 (first microprocessor, 1971).
**Numbers:** 1 octal digit = 3 bits · 1 hex digit = 4 bits · 2¹⁰ = 1024 · 2¹⁶ = 65536 · 2³² ≈ 4.3 billion · 1 byte = 8 bits = 256 values · signed 8-bit 2's complement = −128…+127.
**Handy conversions:** (45)₁₀ = 101101₂ = 55₈ = 2D₁₆ · (156)₁₀ = 10011100₂ = 234₈ = 9C₁₆ · (255)₁₀ = 11111111₂ = 377₈ = FF₁₆ · (1000)₁₀ = 3E8₁₆.
**CPU** = ALU + CU + registers (PC, IR, MAR, MDR, ACC) · **Primary** = RAM (volatile) + ROM (non-volatile) + cache · **Buses** = data, address (2ⁿ), control.
**Types:** analog/digital/hybrid · super > mainframe > mini > micro · general/special purpose.
**Three diagrams:** computer block diagram · IPOS cycle · memory hierarchy pyramid.

---

## 11. Practice Questions

### Theory
1. Define data and information with examples; state the relationship.
2. Explain the information processing cycle with a real-world example.
3. Write any six characteristics of a computer.
4. "A computer is a dumb machine with a great memory." Justify.
5. Distinguish analog, digital and hybrid computers with examples.
6. Classify computers by size, speed and cost.
7. Explain the basic organization of a digital computer with a block diagram.
8. Difference between ALU and Control Unit.
9. What is the stored-program concept and who gave it?
10. Describe the five generations of computers.
11. Why is Babbage called the father of the computer?
12. Give the full definition of a computer and explain each keyword.
13. What are the limitations of a computer?
14. Differentiate primary and secondary memory.
15. State six differences between RAM and ROM.
16. What is cache memory and why is it needed?
17. Explain the system bus and its three types.
18. Describe the instruction cycle.
19. What is a number system? Define base/radix.
20. Why does a computer use binary?
21. Why do we need octal and hexadecimal?
22. Positional vs non-positional number systems.
23. Two methods of decimal → binary conversion; which is faster?
24. What are 1's and 2's complement, and why is 2's complement used?
25. What is BCD? Represent 45 in BCD.
26. Unicode vs ASCII.
27. What is a parity bit?
28. Hardware vs software (+ firmware, system vs application software).
29. Short notes: ENIAC, von Neumann, UNIVAC-I, Intel 4004.
30. What is a supercomputer? Uses and India's position.
31. General-purpose vs special-purpose computers.
32. Role of the system clock; how is speed measured?

### Numericals (answers in brackets)
1. (1101)₂ → decimal **[13]**
2. (1A)₁₆ → decimal **[26]**
3. (77)₈ → decimal **[63]**
4. (1010.11)₂ → decimal **[10.75]**
5. (52)₁₀ → binary, octal, hex **[110100₂, 64₈, 34₁₆]**
6. (0.75)₁₀ → binary **[0.11₂]**
7. (255)₁₀ → binary and hex **[11111111₂, FF₁₆]**
8. (100)₁₀ → binary, octal, hex **[1100100₂, 144₈, 64₁₆]**
9. (110110)₂ → octal, hex, decimal **[66₈, 36₁₆, 54]**
10. (1AC)₁₆ → binary, decimal **[110101100₂, 428]**
11. (435)₈ → binary, decimal **[100011101₂, 285]**
12. (2C5)₁₆ → octal **[1305₈]**
13. 1's and 2's complement of (11001010)₂ **[00110101, 00110110]**
14. (10110)₂ − (1101)₂ using 2's complement **[1001₂ = 9]**
15. (1111)₂ + (1011)₂ **[11010₂ = 26]**
16. (101)₂ × (11)₂ **[1111₂ = 15]**
17. (47)₈ + (65)₈ **[134₈ = 92]**
18. (FF)₁₆ + 1 **[100₁₆ = 256]**
19. (950)₁₀ in BCD **[1001 0101 0000]**
20. Gray code of (1110)₂ **[1001]**
21. (101.101)₂ → decimal **[5.625]**
22. Range of 8-bit unsigned and 2's complement signed **[0–255 ; −128…+127]**
23. Largest number in 10 bits **[1023 = 2¹⁰−1]**
24. Bits needed for 100 **[7 bits (1100100₂)]**
25. ASCII of 'B', 'b', '1' **[66, 98, 49]**
26. 192.168.0.1 in binary **[11000000.10101000.00000000.00000001]**
27. (1000)₁₀ → hex, and back **[3E8₁₆ → 1000 ✔]**
28. (777)₈ → decimal; what is special? **[511 = 2⁹−1, largest 9-bit number]**
29. Which is largest: (10011)₂, (23)₈, (13)₁₆, (19)₁₀? **[All equal 19 — always convert to one base to compare]**
30. (0.35)₁₀ → binary **[0.010110… — non-terminating]**

---

## 12. Glossary (quick)

**ALU** arithmetic-logic unit · **ASCII** 7/8-bit character code (A=65) · **Base/radix** digits per system · **BCD** 4-bit decimal digit code · **Bit/Byte/Nibble** 1 bit / 8 bits / 4 bits · **Bus** data-path between units · **Cache** fast CPU-side memory · **Clock speed** GHz heartbeat · **Compiler/Interpreter** whole-program / line-by-line translators · **CPU** ALU + CU + registers · **Data/Information** raw facts / processed meaning · **EBCDIC** IBM 8-bit code · **Firmware** software in ROM (BIOS) · **FLOPS** speed measure · **GIGO** garbage in, garbage out · **Hexadecimal** base-16 (0–9, A–F) · **Instruction cycle** fetch-decode-execute-store · **IPOS** input-process-output-store · **LSB/MSB** lowest/highest weight bit · **Mainframe** large multi-user machine · **Microprocessor** CPU on one chip · **Octal** base-8 · **Parity bit** error detection · **RAM/ROM** volatile working memory / permanent read-only memory · **Register** ultra-fast CPU storage · **SSD/HDD** flash drive / magnetic disk · **Stored-program concept** von Neumann's shared memory idea · **Supercomputer** fastest class (peta/exaFLOPS) · **Unicode** universal character set · **Volatile** loses contents on power off · **Word length** bits handled at once.

---

**Next topics that build on this unit:** Boolean algebra & logic gates → computer languages & translators → operating systems → computer applications & networking.
