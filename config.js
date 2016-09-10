System.config({
  "baseURL": "./",
  "transpiler": "babel",
  "babelOptions": {
    "stage": 0,
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.4.1",
    "angular-animate": "github:angular/bower-angular-animate@1.4.1",
    "angular-bootstrap": "github:angular-ui/bootstrap-bower@0.13.0",
    "angular-cache": "npm:angular-cache@4.2.0",
    "angular-route": "github:angular/bower-angular-route@1.3.15",
    "angular-sanitize": "github:angular/bower-angular-sanitize@1.4.1",
    "babel": "npm:babel-core@5.4.7",
    "babel-runtime": "npm:babel-runtime@5.4.7",
    "bootstrap": "github:twbs/bootstrap@3.3.4",
    "core-js": "npm:core-js@0.9.11",
    "d3": "github:mbostock/d3@3.5.5",
    "jquery": "github:components/jquery@2.1.4",
    "moment": "github:moment/moment@2.10.3",
    "moment-duration-format": "npm:moment-duration-format@1.3.0",
    "tameraydin/ngToast": "github:tameraydin/ngToast@1.5.4",
    "github:angular/bower-angular-animate@1.4.1": {
      "angular": "github:angular/bower-angular@1.4.1"
    },
    "github:angular/bower-angular-route@1.3.15": {
      "angular": "github:angular/bower-angular@1.4.1"
    },
    "github:angular/bower-angular-sanitize@1.4.1": {
      "angular": "github:angular/bower-angular@1.4.1"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:twbs/bootstrap@3.3.4": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:core-js@0.9.11": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});

