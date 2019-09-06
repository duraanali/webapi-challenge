const express = require('express');


const db2 = require('../data/helpers/actionModel');


const router = express.Router();


router.post('/', (req, res) => {
    const actions = req.body;
    db2.insert(actions)
        .then(action => {
            res.status(201).json(action);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Yo Error adding action" });
        });
});

// router.post('/', (req, res) => {
//     const description = req.body;
//     console.log(description);
//     projects.insert(description)
//         .then(project => {
//             res.status(201).json(project);
//         })
//         .catch(err => {
//             res.status(500).json({
//                 err: err
//             });
//         });
// });

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
    const { id } = req.project;
    db2.remove(id)
        .then(() => res.status(204).end())
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Error deleting action" });
        });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const description = req.body.description;
    db2.update(id, { description })
        .then(() => {
            action.getById(id)
                .then(action => res.status(200).json(action))
                .catch(err => {
                    console.log(err);
                    res.status(500).json({ error: "Error getting action" });
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Error getting updating action" });
        });
});


module.exports = router;