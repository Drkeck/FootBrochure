const express = require('express')
const mongoose = require('mongoose');
const { urlencoded } = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json())
app.use(urlencoded({ extended: true }))

app.use(require('./routes'))

mongoose.connect(process.env.MONGOD_URI || 'mongodb://localhost/footbrochuredb', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`App is listening at port: ${PORT}`))
