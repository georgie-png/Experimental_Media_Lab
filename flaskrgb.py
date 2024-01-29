from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
import subprocess


app = Flask(__name__)
CORS(app)

p = 0 # initial number  of processes for counting

# define processes for runtext.py
processes = {}

@app.route('/receive', methods=['POST'])
def receive_message():
    global p
    p = p+1

    # json string from P5
    data = request.json

    #get data from P5
    received_message = data.get('message', '') 
    received_Red = data.get('Red', '')
    received_Green= data.get('Green', '')
    received_Blue = data.get('Blue', '')


    # print the received message from P5 
    print(f"Received message: {received_message}")
    print(f"Received Red: {received_Red}")
    print(f"Received Blue: {received_Blue}")
    print(f"Received Green: {received_Green}")


    # Send a response back to the p5.js client
    response_data = {'status': 'success', 'message': received_message }

    if p == 1:
        #run runtext.py with arguments (--text, red, green and blue received p5) 
        process = subprocess.Popen(['python3', 'runtext.py', '--text='+received_message,'--red='+received_Red,'--green='+received_Green,'--blue='+received_Blue])
        processes[p] = process # store the process

    else:  # more than one process
        processes[p-1].terminate() # terminate the previous process
        #run runtext.py with arguments (--text, red, green and blue received p5) 
        process = subprocess.Popen(['python3', 'runtext.py', '--text='+received_message,'--red='+received_Red,'--green='+received_Green,'--blue='+received_Blue])
        processes[p] = process # store the process

    print(p)



    return response_data


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
