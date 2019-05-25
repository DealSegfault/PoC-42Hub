import requests, random

COUNT = 500
REQUEST_URL = f'https://randomuser.me/api/?results={COUNT}&nat=fr,us&gender=female'
API_REQUEST = 'http://localhost:7777/api/room'

def loginfy(username):
    return ''.join([i for i in username if not i.isdigit()])

def in_user(users, key, data):
    for user in users:
        if (int(user[key]) == int(data)):
            return True
    return False

r = requests.get('http://localhost:7777/api/user')
if r.status_code != 200:
    exit(1)
users = r.json()['result']

r = requests.get(REQUEST_URL)

if r.status_code != 200:
    exit(1)

jsonData = r.json()['results']
count = 0
for result in jsonData:
    if count % 20 == 0:
        roomQuarter = result['location']['city']
    if in_user(users, 'roomId', count):
        reserveState = ('OCC', 'RES')[random.randint(0, 1)]
    else:
        reserveState = 'NAN'
    data = {
        'reserveState': reserveState,
        'alertState': 'RAS',
        'roomId': str(count),
        'roomName': result['name']['first'],
        'roomQuarter': roomQuarter,
        'roomId': str(count),
        'roomCluster': str(int(count / 100))
    }
    res = requests.post(API_REQUEST, data)
    if res.status_code == 200:
        print(f'Room nr {count} added')
    else:
        print('error')
    count += 1
