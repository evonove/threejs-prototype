var gulp = require('gulp');
var wheelie = require('wheelie');
var recipe = require('wheelie-recipe');

wheelie.add(recipe);
wheelie.setDefault('watch');

// build customizations
var vendors = [
    // put here your vendors installed via bower (or whatever), available in `vendors/` folder
    'three.js/build/three.min.js'
];

var scripts = [
    // add here your JS files available in `client/js/` folder
    'main.js'
];

wheelie.update('uglify', {
  scripts: scripts,
  vendors: vendors
});

wheelie.setBuild('static/');
wheelie.setDist('static/');
wheelie.build();
