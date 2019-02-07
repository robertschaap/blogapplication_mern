# Title
A blog application where users can signup, post and read as well as comment on posts.

##### Technologies
HTML5 | CSS3 | JavaScript | React-Redux | Node.js | Express | MongoDB | Mongoose

### Scope
##### What it was designed to do
+ Use REST routing with query parameters
+ Use a more traditional version of the MVC architecture
    * Controllers and routes are in the controller folder. These have purposely been designed to be relatively light. The controller itself does not actually speak to the database.
    * View contains all views
    * Models are in the models folder with relations and connections being set in the index.js file, the models themselves are set in separate files together with any attached methods.

##### What it wasn't designed to do
- Updating/editing. This can be built in but the focus of the project was more on the routing and the actual posting/reading. Also this is a continuation of the Node_Express version which uses Pug teplates to serve the page and is more feature complete, this mainly exists to test React-Redux.

### Installation Notes
Please feel free to download or clone the repository. Modules are all included in the package.json however you will need to have MongoDB installed. Use `npm run populate` to pre-populate the database with users.
