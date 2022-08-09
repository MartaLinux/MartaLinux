import json
import base64
import time
import hmac
import hashlib

data = {#будет приходить в запрос
  'ticker': 'BTC', #for example for obtaining trading balance for BTC currency
}

request = '/api/v4/trade-account/balance' #приходит в пост запрос
def gen(request, data):
    api_key = '' #получить на сайте
    secret_key = '' #put here your secret key
    
    baseUrl = 'https://whitebit.com' #конст
    #If the nonce is similar to or lower than the previous request number, you will receive the 'too many requests' error message
    nonce = str(int(time.time())) #nonce is a number that is always higher than the previous request number
    data['request'] = request
    data['nonce'] = nonce
    #preparing request URL
    completeUrl = baseUrl + request
    
    

    
    payload = base64.b64encode(data_json.encode('ascii'))
    signature = hmac.new(secret_key.encode('ascii'), payload, hashlib.sha512).hexdigest()
    return{
        'data': data,
        'data_json': data_json,
        'payload': payload,
        'signature': signature
    }


def lambda_handler(event, context):
    try:
        if 'request' in event:
            if event['request'] != "":
                if 'data' in event:
                    if event['data']!= "":
                        data_json = json.dumps(event['data'], separators=(',', ':')) #use separators param for deleting spaces
                       # data = event['data']
                        body = gen(data_json, event['request'])
                    else:
                         raise Exception('Request missing')
                
                else:
                    raise Exception('Data is missing')
            else:
                raise Exception('Request missing')
        else:
            raise Exception('Is not exist request')
    except Exception as e:
        status = 400
        body = 'It seems an ERROR! ' + str(e)
        return {
                "status":status,
                "body":body
            }
                
                
                