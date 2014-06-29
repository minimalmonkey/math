module.exports = function (grunt) {
	"use strict";

	var pkg = grunt.file.readJSON('package.json');

	grunt.initConfig({

		pkg: pkg,

		browserify: {
			production: {
				options: {
					aliasMappings: {
						cwd: 'src/',
						src: [pkg.name + '.js']
					}
				},
				src: 'src/' + pkg.name + '.js',
				dest: 'dist/' + pkg.name + '.js'
			},
			debug: {
				options: {
					aliasMappings: {
						cwd: 'src/',
						src: ['**/*.js']
					},
					debug: true
				},
				src: 'src/' + pkg.name + '.js',
				dest: 'dist/' + pkg.name + '.debug.js'
			}
		},

		karma: {
			options: {
				basePath: '.',
				frameworks: ['jasmine'],
				singleRun: true,
				browsers: ['Chrome'],
				reporters: ['dots']
			},
			unit: {
				options: {
					coverageReporter: {
						type: 'json',
						dir: 'build/log/coverage'
					},
					files: [
						'dist/' + pkg.name + '.js',
						'test/specs/**/*.js'
					],
					reporters: [
						'dots',
						'coverage'
					]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('build', [
		'browserify:production',
		'browserify:debug'
	]);

	grunt.registerTask('test', [
		'karma:unit'
	]);

	grunt.registerTask('default', [
		'build',
		'test'
	]);

};
