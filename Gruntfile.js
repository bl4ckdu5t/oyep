module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/built.js',
        dest: 'js/script.min.js'
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/vendor/jquery-2.1.1.min.js', 'js/vendor/responsiveslides.min.js', 'bower_components/owl-carousel/owl-carousel/owl.carousel.js','js/script.js'],
        dest: 'js/built.js',
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['concat','uglify']);

};
