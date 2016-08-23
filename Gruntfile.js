// *************************************************
// ** Remember to npm install grunt-contrib-sass` **
// *************************************************

module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      '../dist/app.js': ['../js/quiz.js']
    },
    jshint: {
      options: {
        predef: [ "document", "console" ],
        esnext: true,
        globalstrict: true,
        browserify: true
      },
      files: ['../js/**/*.js']
    },
    sass: {
      dist: {
        files: {
          '../css/main.css': '../sass/main.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../js/**/*.js'],
        tasks: ['jshint', 'browserify']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
};