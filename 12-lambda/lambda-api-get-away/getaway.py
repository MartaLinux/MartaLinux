import json
import time
import os
import hashlib
import hmac
def gen_sign(method, url, query_string=None, payload_string=None):
    key = '7c89ccafea7f8aebdb089519bcc11595'        # api_key
    secret = 'fd49b0028b355712d73fba2d83bf52b21ebbad01dd133d7127f82a92c4a4aec0'     # api_secret
    
    t = time.time()
    m = hashlib.sha512()
    m.update((payload_string or "").encode('utf-8'))
    hashed_payload = m.hexdigest()
    s = '%s\n%s\n%s\n%s\n%s' % (method, url, query_string or "", hashed_payload, t)
    sign = hmac.new(secret.encode('utf-8'), s.encode('utf-8'), hashlib.sha512).hexdigest()
    return {'KEY': key, 'Timestamp': str(t), 'SIGN': sign}

def lambda_handler(event, context):
    host = "https://api.gateio.ws"
    prefix = "/api/v4"
    headers = {'Accept': 'application/json', 'Content-Type': 'application/json'}
    
    #url = '/wallet/total_balance' #require
    #method = 'GET' #require
    #query_param = '' #not require
    #payload_string = '' #not require
    """ The Page is the Mandatory parameter """
    """ Receiving the headers for columns """
    #return event
    try:
        if 'url' in event:
            if event["url"] != "":
                if 'method' in event:
                    if event["method"] != "":
                        if 'query_param' in event:
                            query_param = event['query_param']
                        else:
                            query_param = None
                        if event["method"] == "POST":
                            payload_string = event['payload_string']
                        else:
                            payload_string = None
                            
                        body = gen_sign(event['method'], prefix + event['url'],query_param, payload_string)
                        status =200
                    else:
                        raise Exception("'method' is missing")
                else:
                    raise Exception("'method' is not exist")
            else:
                raise Exception("'url' is missing")
            return {
                "status":status,
                "body":body
            }
        else:
             raise Exception("'url' is not exist") 
    except Exception as e:
        status =400
        body = 'It seems an ERROR! ' + str(e)
        return {
            "status":status,
            "body":body
        }
