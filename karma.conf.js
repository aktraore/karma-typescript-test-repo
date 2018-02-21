"use strict";
module.exports = function (config) {
    config.set({

        frameworks: ["jasmine", "karma-typescript"],

        files: [{
            pattern: "app/**/*.ts"
        }],

        preprocessors: {
            "app/**/*.ts": ["karma-typescript"]
        },

        reporters: ["dots", "karma-typescript"],

        karmaTypescriptConfig: {
            tsconfig: "./tsconfig.json",
            bundlerOptions: {
                transforms: [
                    require('karma-typescript-es6-transform')()
                ],
                entrypoints: /\.spec\.ts$/,
            }
        },
        plugins: [
            require('karma-coverage'),
            require('karma-chrome-launcher'),
            require('karma-typescript'),
            require('karma-typescript-es6-transform'),
            require('karma-jasmine')
        ],

        browsers: ["Chrome"]
    });
};