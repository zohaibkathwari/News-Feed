/*jslint vars: true, plusplus: true, browser: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */
/*global $, module*/
module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            src: {
                files: ['index.html', 'Gruntfile.js', 'css/overide.css', 'js/controller.js', 'js/service.js']
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'index.html',
                        'css/overide.css',
                        'js/service.js',
                        'js/controller.js',
                        'js/app.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './',
                    injectChanges: false
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', ['browserSync', 'watch']);
};