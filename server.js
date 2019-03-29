const express = require('express');
const helmet = require('helmet');

const actionRouter = require('./helpers/action-router');
// const projectRouter = require('./helpers/project-router')

const server = express();
server.use(express.json());
server.use(helmet());

server.use('/api/actions', actionRouter);
// server.use('/api/projects', projectRouter);



server.get('/', (req, res) => {
    res.send(" I is werkin")
});

module.exports = server;