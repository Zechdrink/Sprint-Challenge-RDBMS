const express = require('express');
const Project = require('./projectDB');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const project = await Project.find();
        res.status(200).json(project);
    } catch(error){
        res.status(500).json(error);
    }
})

router.post('/', async (req, res) => {
    try {
        const project = await Project.insert(req.body);
        res.status(201).json(project);
    } catch(error) {
        res.status(500).json({
            message: 'error posting action'
        })
    }
})

router.get('/:id/actions', async (req, res) => {
    try {
        const actions = await Project.getProjectActions(req.params.id)
        res.status(200).send({actions})
    } catch(error){
        res.status(500).json({
            message: 'error getting actions'
        })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const project = await Project.get(req.params.id)
        if(project){
            res.status(200).json(project)
        } else {
            res.status(404).json('project not found')
        }
    } catch(error){
        res.status(500).json(error)
    }
})

module.exports = router;
