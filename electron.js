const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Use a preload script for security
    },
  });

  if (process.env.NODE_ENV === 'development') {
    // Load React app from localhost in development mode
    win.loadURL('http://localhost:3000');
  } else {
    // Load the React build for production
    win.loadFile(path.join(__dirname, 'build', 'index.html'));
  }

  // Open DevTools in development
  if (process.env.NODE_ENV === 'development') {
    win.webContents.openDevTools();
  }

  // Handle when the window is closed
  win.on('closed', () => {
    win = null;
  });

  // Handle loading errors
  win.webContents.on('did-fail-load', () => {
    console.error('Failed to load content. Check if the React app or build is available.');
  });
}

app.whenReady().then(() => {
  createWindow();

  // macOS: Recreate window when dock icon is clicked and no windows are open
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
