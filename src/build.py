#!/usr/bin/env python3
"""Assemble src/part1..7.html into the single-page guide (index.html),
refresh the ready-to-host site/ folder, and verify every in-page anchor."""
import re, os, shutil
os.chdir(os.path.dirname(os.path.abspath(__file__)))

parts = [f'src/part{i}.html' for i in range(1, 8)]
head = open(parts[0]).read()
cut = head.index('</header>\n') + len('</header>\n')
out = head[:cut] + "\n" + head[cut:] + "\n"
for p in parts[1:]:
    out += open(p).read() + "\n"
open('index.html', 'w').write(out)

ids = set(re.findall(r'id="([^"]+)"', out))
bad = sorted(set(re.findall(r'href="#([^"]+)"', out)) - ids)

# ready-to-upload folder for GitHub Pages / Netlify Drop
os.makedirs('site', exist_ok=True)
for f in ['index.html', 'number-system-lab.html']:
    shutil.copy(f, os.path.join('site', f))

print('index.html  chars:', len(out), '| bytes:', os.path.getsize('index.html'))
print('broken anchors:', bad or 'none')
print('site/ contains :', sorted(os.listdir('site')))
