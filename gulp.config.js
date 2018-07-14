module.exports = function() {
    var client = "./src/client/";
    var clientApp = client + "app/";
    var temp = "./.temp/";
    var config = {
        alljs: ["./src/**/*.js", "./*.js"],
        temp: temp,
        less: client + "/styles/styles.less",
        client: client,
        index: client + "index.html",
        css: temp + "styles.css",
        js: [
            clientApp + "**/*.module.js",
            clientApp + "**/*.js",
            "!" + clientApp + "**/*.spec.js"
        ],

        bower: {
            json: require("./bower.json"),
            directory: "./bower_components",
            ignorePath: "../.."
        }
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
