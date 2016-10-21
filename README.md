#Get Started
- NodeJS must be installed on you computer.
- Open the projects root dir in your computers command line.
  - Root has the "src" and "package.json" files/folders in it.
- Use the command ```npm install```.
  - This will take a bit while it installs all the dependencies.
- Use the command ```npm run build```.
  - This will transpile the JavaScript code.
- Use the command ```npm start```.
  - This will start an http server on port 8000. Make sure not to close the window.
- Open a web browser up and navigate to ```http://localhost:8000```.
  - The page should show up.
  
## File Locations
- public/index.html
  - Start page
- src/data/data.json
  - Data that the app uses to create game objects
- src/main.js
  - The entry point for my JavaScript
    
## Custom Data (src/data/data.json)
The custom data is in JSON format. Change the following file to add you own data "src/public/data/data.json". When this file is changed you will have to run ```npm run build``` before the changes will take effect.
```
{
  "name": "Name to be displayed in menu",
  "size": "This can be any unit of measure as long as it is consistent with all objects. I use miles",
  "image": "Path to image"
}
```
See the default file for more examples
