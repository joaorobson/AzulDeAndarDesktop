require('babel-register');

import { app, BrowserWindow } from 'electron';

import { autoUpdater } from "electron-updater"

let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.webContents.openDevTools()
  mainWindow.setMenu(null);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
