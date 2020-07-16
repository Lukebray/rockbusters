const express = require('express');
const router = express.Router();

// Rockbusters model
const Rockbusters = require('../models/Rockbuster');

// @routes GET /rockbusters
// @description GET all rockbusters
router.get('/', async (req, res) => {
    try {
        const rockbusters = await Rockbusters.find();
        if(!rockbusters) throw Error('No items found.');
        res.status(200).json(rockbusters);
    } catch(error) {
        res.status(400).json({ msg:error });
    }
});

// @routes GET /rockbusters/:id
// @description GET a rockbusters by id
router.get('/:id', async (req, res) => {
    try {
        const rockbusters = await Rockbusters.findById(req.params.id);
        if(!rockbusters) throw Error('No items found.');
        res.status(200).json(rockbusters);
    } catch(error) {
        res.status(400).json({ msg:error });
    }
});

// @routes POST /rockbusters/add
// @description Create a rockbuster
router.post('/add', async (req, res) => {
    const newRockbuster = new Rockbusters(req.body);

    try {
        const rockbuster = await newRockbuster.save();
        if(!rockbuster) throw Error('Something went wrong while saving the rockbuster. Play a record. :(');
        res.status(200).json(rockbuster);
    } catch(error) {
        res.status(400).json({ msg: error });
    }
});

module.exports = router;