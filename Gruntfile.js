
var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

var folderMount = function folderMount(connect, point) {
  return connect.static(path.resolve(point));
};


module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      dist:{    // Dist target
        options: {
          mangle:false,
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        files: {
          'dist/<%= pkg.name %>.min.js':['src/notify.js']
        }
      }
    },

    connect: {
      livereload: {
        options: {
          port: 9001,
          middleware: function(connect, options) {
            return [lrSnippet, folderMount(connect, '.')]
          }
        }
      }
    },

    // Configuration to be run (and then tested)
    regarde: {
      fred: {
        files: ['src/**/*.*', 'example/**/*.*'],
        tasks: ['livereload']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-livereload');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

  grunt.registerTask('server', ['livereload-start', 'connect', 'regarde']);
};