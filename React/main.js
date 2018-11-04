const electron = require('electron');
const url = require('url');

const { app, BrowserWindow,Menu } = electron;

const MenuArray = [
    {label:"Electron",submenu:[
        {label:"开发者工具",accelerator:process.platform === 'darwin'?"Command+I":"Ctrl+F12",
        click(item,focusWindow){
            focusWindow.toggleDevTools();
        }
    },
        
    ]},
    {label:"操作",submenu:[
        {label:"退出",
        accelerator:process.platform === 'darwin'?"Command+Q":"Ctrl+Q",
        click(){
            app.quit();
        }
    }
    ]},

]
app.on('ready',function(){
    let mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL(url.format("http://localhost:3000"));

    const HeadMenu = Menu.buildFromTemplate(MenuArray);
    Menu.setApplicationMenu(HeadMenu)
})