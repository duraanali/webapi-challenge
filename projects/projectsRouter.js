const express = require('express');

const projects = require('../data/helpers/projectModel');

const router = express.Router();

// router.post('/', (req, res) => {
//     const user = req.body;

//     User.insert(user)
//         .then(user => {
//             res.status(201).json(user);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({ error: "Error inserting user" });
//         });
// });

// router.post('/:id/posts', (req, res) => {
//     const post = req.body;
//     Post.insert(post)
//         .then(post => {
//             res.status(201).json(post);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({ error: "Error adding post" });
//         });
// });

router.get('/', (req, res) => {
    projects.get()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Error getting projects" });
        });
});

// router.get('/:id', validateUserId, (req, res) => {
//     res.status(200).json(req.user);
//     // const { id } = req.params;
//     // User.getById(id)
//     //   .then(user => {
//     //     if (user) {
//     //       res.status(200).json(user);
//     //     } else {
//     //       res.status(404).json({error: "User with id does not exist"});
//     //     }
//     //   });
// });

// router.get('/:id/posts', (req, res) => {
//     const { id } = req.params;
//     User.getUserPosts(id)
//         .then(posts => res.status(200).json(posts))
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({ error: "Error getting user posts" });
//         });
// });

// router.delete('/:id', (req, res) => {
//     const { id } = req.user;
//     User.remove(id)
//         .then(() => res.status(204).end())
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({ error: "Error deleting user" });
//         });
// });

// router.put('/:id', (req, res) => {
//     const { id } = req.params;
//     const { name } = req.body;
//     User.update(id, { name })
//         .then(() => {
//             User.getById(id)
//                 .then(user => res.status(200).json(user))
//                 .catch(err => {
//                     console.log(err);
//                     res.status(500).json({ error: "Error getting user" });
//                 });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({ error: "Error getting updating user" });
//         });
// });



module.exports = router;