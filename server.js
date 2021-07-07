const express = require('express');

const server = express();
server.use(express.json());


const projectRouter = require('./projects/projectsRouter');
server.use('/api/projects', projectRouter);

const actionRouter = require('./actions/actionsRouter');
server.use('/api/actions', actionRouter);


module.exports = server;