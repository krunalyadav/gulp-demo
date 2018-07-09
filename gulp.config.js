module.exports = function() {
    var client = './src/client';
    var config = {
        alljs: ['./src/**/*.js', './*.js'],
        temp: './.temp/',
        less: client + '/styles/styles.less'
    };

    return config;
};
