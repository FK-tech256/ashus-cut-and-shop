# PowerShell script to automate full stack local development

# Install frontend dependencies
Write-Host "Installing frontend dependencies..."
npm install

# Install backend dependencies
Write-Host "Installing backend dependencies..."
cd backend
npm install

# Start backend server in background
Write-Host "Starting backend server..."
Start-Process powershell -ArgumentList 'npm run dev' -WorkingDirectory $PWD

# Return to root and start frontend server
cd ..
Write-Host "Starting frontend server..."
npm run dev 