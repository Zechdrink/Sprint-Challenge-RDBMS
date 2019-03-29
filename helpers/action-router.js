const express = require('express');
const Action = require('./actionDB');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const action = await Action.find();
        res.status(200).json(action);
    } catch(error){
        res.status(500).json(error);
    }
})

router.post('/', async (req, res) => {
    try {
        const action = await Action.insert(req.body);
        res.status(201).json(action);
    } catch(error) {
        res.status(500).json({
            message: 'error posting action'
        })
    }
})

module.exports = router;