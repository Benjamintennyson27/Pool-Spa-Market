import urllib.request, re
from bs4 import BeautifulSoup
req = urllib.request.Request('https://poolandspamarket.com.au/', headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read()
soup = BeautifulSoup(html, 'html.parser')

sections = ['myWorkout', 'myIndulge', 'myWatersedge', 'myHotTub', 'Amazon', 'Sapphire and Billabong']
for text in sections:
    elems = soup.find_all(string=re.compile(text, re.I))
    for elem in elems:
        parent2 = elem.find_parent('section')
        if parent2:
            img = parent2.find('img')
            if img:
                src = img.get('data-src') or img.get('src')
                print(f'{text} alt: {src}')
                break
