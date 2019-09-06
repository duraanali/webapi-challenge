const express = require('express');


const db = require('../data/helpers/projectModel');


const router = express.Router();


router.post('/', (req, res) => {
    const projects = req.body;
    db.insert(projects)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Yo Error adding project" });
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
    db.get()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Error getting projects" });
        });
});


router.delete('/:id', (req, res) => {
    const { id } = req.project;
    db.remove(id)
        .then(() => res.status(204).end())
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Error deleting project" });
        });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const description = req.body.description;
    db.update(id, { description })
        .then(() => {
            project.getById(id)
                .then(project => res.status(200).json(project))
                .catch(err => {
                    console.log(err);
                    res.status(500).json({ error: "Error getting project" });
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Error getting updating project" });
        });
});


module.exports = router;