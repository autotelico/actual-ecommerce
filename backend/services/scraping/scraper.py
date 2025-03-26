from bs4 import BeautifulSoup
import requests

response = requests.get("https://www.olx.com.br/brasil?q=bicicleta")
html = response.text
soup = BeautifulSoup(html, 'html.parser')
el = soup.prettify()
print(el)