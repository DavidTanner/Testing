var fs = require('fs');

module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        bumpup: {
                file: 'package.json'
        }

    });
    
    grunt.loadNpmTasks('grunt-bumpup');
   
};
