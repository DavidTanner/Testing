module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        bumpup: {
                file: 'package.json'
        }
    });
    
    grunt.loadNpmTasks('grunt-bumpup');

    grunt.registerTask('version', ['bumpup:build']);
    
};
