const express = require('express');


const db2 = require('../data/helpers/actionModel');


const router = express.Router();


router.post('/', (req, res) => {
    const newAction = req.body;
    db2.insert(newAction)
        .then(actions => {
            res.status(201).json(actions);
        })
        .catch(err => {
            res.status(500).json({
                err: err,
                message: "can not create anything bro"
            });
        });
});


router.get('/', (req, res) => {
    db2.get()
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Error getting projects" });
        });
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db2.remove(id)
        .then(deletedUser => {
            if (deletedUser) {
                res.json(deletedUser);
            } else {
                res.status(404).json({
                    message: "invalid id"
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                err: err,
                message: "can not update anything bro"
            });
        });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    db2.update(id, changes)
        .then(updated => {
            if (updated) {
                res.json(updated);
            } else {
                res.status(404).json({
                    message: "invalid id"
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                err: err,
                message: "can not update anything bro"
            });
        });
});


module.exports = router;