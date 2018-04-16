module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'src/library/css/style.css' : 'src/library/scss/style.scss'
				}
			}
		},
		watch: {
			options: { livereload: true },
			grunt: { files: ['grunt.js'] },
			css: {
				files: '**/*.scss',
				tasks: ['sass'],
			},
      js: {
        files: ['src/library/js/*.js'],
        tasks: ['jshint','uglify']
      }
		},
		jshint: {
			all: {
				src: ['lib/*.js'],
			},
		},
		uglify: {
			my_target: {
				files: {
					'src/library/js/scripts.min.js': ['src/library/js/scripts.js']
				}
			}
		}
	});


	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	
	// grunt.registerTask('default',['watch']);
	grunt.registerTask('w',['watch']);
	grunt.registerTask('test',['jshint','uglify']);
}