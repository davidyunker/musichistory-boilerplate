module.exports = function(grunt) {

   // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Project configuration.
  grunt.initConfig({
    jshint: {
      files: ['./**/*.js', '!./node_modules/**/*'],
      options: {
        jshintrc: true
      }
    },
    watch: {
      files: ['./**/*.js', '!./node_modules/**/*'],
      tasks: ['jshint'],
    }

  });

};