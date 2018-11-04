const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow,Menu } = electron;

const addItem = () =>{
    let smallWindow = new BrowserWindow({width: 200, height: 600});
    smallWindow.loadURL(url.format({
        pathname:path.join(__dirname,"smallWindow.html"),
        slashes:true,
        protocol:"file:"
    }));
    smallWindow.on('close',()=>{
        smallWindow = null
    })
}
const MenuArray = [
    {label:"Electron",submenu:[
        {label:"新增",
        click(){
          addItem()
        }
    },
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
    mainWindow.loadURL(url.format({
        pathname:path.join(__dirname,"mainWindow.html"),
        slashes:true,
        protocol:"file:"
    }));

    const HeadMenu = Menu.buildFromTemplate(MenuArray);
    Menu.setApplicationMenu(HeadMenu)
})