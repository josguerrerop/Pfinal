const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/final', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        useFindAndModify: false
    })
    .then((db) => console.log("db is connected"))
    .catch((err) => console.error(err));