import requests, random

COUNT = 250
REQUEST_URL = f'https://randomuser.me/api/?results={COUNT}&nat=fr,us,gb,de'
API_REQUEST = 'http://localhost:7777/api/user'

def loginfy(username):
    return ''.join([i for i in username if not i.isdigit()])

rooms = [i for i in range(0,500)]

r = requests.get(REQUEST_URL)
if r.status_code != 200:
    exit(1)
jsonData = r.json()['results']
count = 0
for result in jsonData:
    roomId = random.choice(rooms)
    rooms.remove(roomId)
    data = {
        'login': loginfy(result['login']['username']),
        'firstname': result['name']['first'],
        'lastname': result['name']['last'],
        'email': result['email'],
        'img': result['picture']['medium'],
        'language': result['nat'].lower(),
        'roomId': str(roomId)
    }
    count += 1
    res = requests.post(API_REQUEST, data)
    if res.status_code == 200:
        print(f'Person nbr {count} added')
    else:
        print('error')
