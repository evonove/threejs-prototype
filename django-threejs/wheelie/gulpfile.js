require('gulp');

// importing Wheelie instance and the base Wheelie recipe
var wheelie = require('wheelie');
var recipe = require('wheelie-recipe');

// adding the base recipe to Wheelie
wheelie.add(recipe);
wheelie.setDefault('watch');

// build customizations
var vendors = [
    // put here your vendors installed via bower, npm, or whatever
    // with a base PATH of `client/vendors/` folder
];

var scripts = [
    // add here your JavaScript files
    // with a base PATH of `client/js/` folder
];

wheelie.update('uglify', {
  scripts: scripts,
  vendors: vendors
});

// the production and the live building, output processed files
// in the `wheelie/static/` folder
wheelie.setBuild('static/');
wheelie.setDist('static/');
wheelie.build();
