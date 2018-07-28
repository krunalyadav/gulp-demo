module.exports = function() {
    var client = './src/client/';
    var clientApp = client + 'app/';
    var temp = './.temp/';
    var server = './src/server/';
    var root = './';

    var config = {
        alljs: ['./src/**/*.js', './*.js'],
        temp: temp,
        less: client + '/styles/styles.less',
        client: client,
        html: clientApp + '**/*.html',
        index: client + 'index.html',
        build: './build/',
        css: temp + 'styles.css',
        htmltemplates: clientApp + '**/*.html',
        js: [
            clientApp + '**/*.module.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js'
        ],
        fonts: './bower_components/font-awesome/fonts/**/*.*',
        images: client + 'images/**/*.*',
        bower: {
            json: require('./bower.json'),
            directory: './bower_components',
            ignorePath: '../..'
        },
        root: root,
        optimized: {
            app: 'app',
            lib: 'lib'
        },

        packages: ['./package.json', './bower.json'],

        server: server,

        browserReloadDelay: 1000,

        templateCache: {
            file: 'templates.js',
            options: {
                module: 'app.core',
                standAlone: false,
                root: 'app/'
            }
        },

        defaultPort: 7203,
        nodeServer: './src/server/app.js'
    };

    config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };

    return config;
};
