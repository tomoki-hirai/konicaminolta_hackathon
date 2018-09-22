import urllib.request, json

if __name__ == '__main__':
    url = "http://localhost:3000/meeting/speaking"
    method = "POST"
    headers = {"Content-Type" : "application/json"}

    obj = {"user_id" : "warota" , "start" : "test" , "end" : "test" , "room_id" : "1" }
    json_data = json.dumps(obj).encode("utf-8")

    request = urllib.request.Request(url, data=json_data, method=method, headers=headers)
    with urllib.request.urlopen(request) as response:
        response_body = response.read().decode("utf-8")