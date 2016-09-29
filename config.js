var mLabUrl = 'mongodb://user:password@ds027165.mlab.com:27165/mongo-shopping-list';

exports.DATABASE_URL = process.env.DATABASE_URL ||
    global.DATABASE_URL ||
    mLabUrl;
    /*
    (process.env.NODE_ENV === 'production' ?
        'mongodb://localhost/shopping-list' :
        'mongodb://localhost/shopping-list-dev');
        */
exports.PORT = process.env.PORT || 8080;
