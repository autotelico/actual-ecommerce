import sys
import json

def process_data(data):
    return {"processed": data.upper()}

if len(sys.argv) > 1:
    input_data = sys.argv[1]
else:
    input_data = "" 

result = process_data(input_data)
print(json.dumps(result))  