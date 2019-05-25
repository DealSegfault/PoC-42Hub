import requests, random

COUNT = 200
REQUEST_URL = f'https://randomuser.me/api/?results={COUNT}&nat=fr,us,gb,de'
API_REQUEST = 'http://localhost:7777/api/user'

def loginfy(username):
    return ''.join([i for i in username if not i.isdigit()])

r = requests.get(REQUEST_URL)
if r.status_code != 200:
    exit(1)
jsonData = r.json()['results']
count = 0
for result in jsonData:
    data = {
        'login': loginfy(result['login']['username']),
        'firstname': result['name']['first'],
        'lastname': result['name']['last'],
        'img': result['picture']['medium'],
        'fortyTwoId': random.randrange(10000000000000000),
        'language': result['nat'].lower(),
        'roomId': str(count),
        'roomState': 'RAS'
    }
    count += 1
    res = requests.post(API_REQUEST, data)
    if res.status_code == 200:
        print(f'Person nbr {count} added')
    else:
        print('error')
