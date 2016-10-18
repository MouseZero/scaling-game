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
- src/public/index.html
  - Start page
- src/public/data/data.json
  - Data that the app uses to create game objects
- src/public/main.js
  - The entry point for my JavaScript
    
## Data File
- If you change the "data.json" you will need to transpile the code again. From the root dir use ```npm run build```
