const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv/config');

const app = express();

// Routes 
const rockbustersRoutes = require('./routes/rockbusters');

// BodyParser Middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/pages/index.html'));
})

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION, {
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