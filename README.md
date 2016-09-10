# CGN Stats Dashboard

This is a dashboard I created for CGN surf (watch [this video](https://www.youtube.com/watch?v=cHUrHdr8Il0) if you're not familiar with it). The dashboard supports basic features such as viewing player profiles, map times, and map information, as well as advanced features like comparing your checkpoint times against any other times on a given map. This is a mirror of a private repository: Initial development took place from May 2015 to July 2015, with the most recent maintenance occurring in September of 2015. It is not currently under active maintenance.

The code here is not functional without the CGN API, which will not be released to the public. You're welcome to build and run it if you want, but you'll be greeted by many error messages :).

## Setup
1. Clone this repository
2. `npm install`
3. `jspm install`
4. Serve it from whatever web server you want, probably needs to be served at http://timer.dev

## Building
Gulp is used to manage builds and distribution. The tasks you will primarily be using are `sass`, `build`, and `dist`. Tasks are run by entering `gulp [taskname]` into the command line.

### `sass`
Compiles all SASS files and overwrites `css/cgn.css` with the result.

### `build`
Creates a build for testing locally. The build will be deposited in the `dist` directory, and can be accessed via http://timer.dev/dist. It is highly recommended you test your build prior to deploying.

### `dist`
Runs the `build` task and then creates a zip file with the contents of the `dist` directory.