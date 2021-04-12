# Chrome-Extension-CRA-Material-Ui
This Project is for a simple start into Chrome Extensions based on React with Material-Ui. My Chrome Extension is build with the Manifest Version 3. It was created with create-react-app and includes also a background file.

## Getting started
### Build
If you just want to use the extension, go to your chrome browser and type ```chrome://extensions```. You should enable Developer-Options and see the options to load a package. Just choose the ```build``` directory and it should work. See  [Here](https://support.google.com/chrome_webstore/answer/2664769?hl=en) for more Informations
### Code
At first you should download node.js if you did not.
Download this project and run ```npm install``` in the same directory of the ```package.json``` file. If you want to test your code, run ```npm run build``` in the same directory of the ```package.json``` file.

### Chrome Manifest V3
See [Here](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/) for more informations of Manifest V3 as it is more limited than V2. If you want to use a permission of Chrome, please double-check if your permission is usable on V3.

## Useful Links
If you want to learn more about Chrome Extensions and it lifecycles, check these links:

 - [Getting Started](https://developer.chrome.com/docs/extensions/mv3/getstarted/) of Chrome Extensions (without React)
 - [API Reference](https://developer.chrome.com/docs/extensions/reference/)
 - [Samples](https://github.com/GoogleChrome/chrome-extensions-samples)
 - [Extensions Development Overview](https://developer.chrome.com/docs/extensions/mv3/devguide/)

 ## Create-React-App and Material UI
 If you are new to React or create-react-app, check the [Create-React-App](https://github.com/facebook/create-react-app) Github-Page. You could also check the [Material-UI](https://material-ui.com/) Page.