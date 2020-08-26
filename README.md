# SSleepy Server
Server to control Windows remotely.

![SSleepy Server](https://i.imgur.com/s18dZiU.png)

### Prerequisites
* [Node.js](https://nodejs.org/en/) - Node.js

### Running
The application run locally, just package and use.

### Windows Build Tools
````
npm install -g --production windows-build-tools
````

### Node GYP
````
npm install -g node-gyp
````

### Run
````
# Install dependencies
npm install

# Rebuild RobotJS
npm run rebuild

# Start
npm start
````

### cURL Example
````
curl --location --request POST 'http://localhost:1905/playpause/'
curl --location --request POST 'http://localhost:1905/next/'
curl --location --request POST 'http://localhost:1905/previous/'
curl --location --request POST 'http://localhost:1905/volumeup/'
curl --location --request POST 'http://localhost:1905/volumedown/'
curl --location --request POST 'http://localhost:1905/mute/'
curl --location --request POST 'http://localhost:1905/fullscreen/'
curl --location --request POST 'http://localhost:1905/close/'
curl --location --request POST 'http://localhost:1905/shutdown/'
curl --location --request POST 'http://localhost:1905/restart/'
````

### Build
````
# Package
npm run package-windows

# Get your version
release-builds/SSleepy Server-win32-x64/SSleepy Server.exe
````

### Built With
* [Node.js](https://nodejs.org/en/)
* [Electron](https://electronjs.org/)

### Authors
* **Giovani de Oliveira** - [xxgicoxx](https://github.com/xxgicoxx)

### Acknowledgments
* [FlatIcon](https://www.flaticon.com/) - Icon