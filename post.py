import urllib.request, json

if __name__ == '__main__':
    # url = "http://ec2-13-231-238-116.ap-northeast-1.compute.amazonaws.com:3000/meeting/speaking"
    # url = "http://localhost:3000/users"
    # url = "http://ec2-13-231-238-116.ap-northeast-1.compute.amazonaws.com:3000/meeting/myturn"
    url = "http://localhost:3000/meeting/myturn"
    # url = "http://ec2-13-231-238-116.ap-northeast-1.compute.amazonaws.com:3000/meeting/speaking"

    method = "POST"
    headers = {"Content-Type" : "application/json"}

    # obj = {"user_id" : "warota" , "start" : "test" , "end" : "test" , "room_id" : "1" }
    obj = {"user_id" : "5" , "user_name" : "hirai"}
    # obj = {"room_id" : "2" , "room_name" : "OSU" , "flag" : "true"}
    json_data = json.dumps(obj).encode("utf-8")

    request = urllib.request.Request(url, data=json_data, method=method, headers=headers)
    with urllib.request.urlopen(request) as response:
        response_body = response.read().decode("utf-8")