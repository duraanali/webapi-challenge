const express = require('express');

const server = express();

const userRouter = require('./projects/projectsRouter');
server.use('/api/projects', userRouter);


module.exports = server;