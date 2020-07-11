const router = require('express').Router();
const { getAllThoughts, getThoughtbyId, createThought, updateThought, deleteThought, addReaction, removeReaction} = require('../../controllers/thought-controller');
const { route } = require('./user-routes');

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)
;
router
    .route('/:id')
    .get(getThoughtbyId)
    .put(updateThought)
    .delete(deleteThought)
;
router
    .route('/:id/reactions/:reactionid')
    .post(addReaction)
    .delete(removeReaction)
;

module.exports = router;