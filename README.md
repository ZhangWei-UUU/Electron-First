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

