const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowerWindow } = electron;

let mainWindow;

app.on('ready',()=>{
    mainWindow = new BrowerWindow({});
    mainWindow.loadURL(url.format({
        pathname:path.join(__dirname,"mainWindow.html"),
        slashes:true,
        protocol:"file:"
    }));
})