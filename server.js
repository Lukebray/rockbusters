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
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then (() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));

// Use routes
app.use('/rockbusters', rockbustersRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server run at port ${PORT}`));