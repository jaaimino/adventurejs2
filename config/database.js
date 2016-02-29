var config = require('config');

module.exports = function (app, mongoose) {

    var connect = function () {
        var options = {
            server: {
                socketOptions: { keepAlive: 1 }
            },
            auto_reconnect:true
        };
        mongoose.connect("mongodb://heroku_xkng4vtl:445910l8n0lufhe28l689pmu0h@ds019038.mlab.com:19038/heroku_xkng4vtl", options);
        //console.log(process.env.MONGOLAB_URI);
        //mongoose.connect(config.get('chesshub.db'), options);
    };
    connect();

    // Error handler
    mongoose.connection.on('error', function (err) {
        console.error('MongoDB Connection Error. Please make sure MongoDB is running. -> ' + err);
    });

    // Reconnect when closed
    mongoose.connection.on('disconnected', function () {
        connect();
    });

};