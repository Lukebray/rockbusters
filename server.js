const express = require('express');
const mongoose = require('mongoose');

require('dotenv/config');

const app = express();

// Routes 
const rockbustersRoutes = require('./routes/rockbusters');

// BodyParser Middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Home page here!');
})

// Connect to MongoDB
mongoose.connect("mongodb://luke:mkQxJXm83CuhUkay@cluster0-shard-00-00.lbs3u.mongodb.net:27017,cluster0-shard-00-01.lbs3u.mongodb.net:27017,cluster0-shard-00-02.lbs3u.mongodb.net:27017/rockbusters?ssl=true&replicaSet=atlas-w9nu7p-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then (() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));

// Use routes
app.use('/rockbusters', rockbustersRoutes);

//const PORT = process.env.PORT || 5000;
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
//app.listen(PORT, () => console.log(`Server run at port ${PORT}`));