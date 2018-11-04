# Electron-First

## Preperation

```
npm init
yarn add electron --dev
```

## Head Mene

Creating a menu array,then use Menu object from electron module.

```js
// create menu template
const headMenu = Menu.buildFromTemplate(menuArray);
// setting
Menu.setApplicationMenu(headMenu);
```

## Packager

```
yarn add electron-packager --dev
```

```json
    {"package-mac": "electron-packager . --overwrite --platform=darwin --arch=x64 --prune=true --out=release-builds"}
```

Enter into release-builds folder,you can see some folders for different system, such as xx-darwin-x64,which is suited for MacOS.

Now a simple electron desktop app is finished, obsolutely, It is not enough, it lack apis and font end UI and frame.

## Electron + React

其原理十分简单，首先照常启动一个简单的React Single Page App, 然后创建一个简单Electron的壳，将壳通过http连接到这个SPA即可。

打包文件同理，首先打包React，然后将打包文件连接到Electron. 然后打包Electron即可。