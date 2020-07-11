const router = require('express').Router();
const { getAllUsers, getUserId, createUser, addFriend, updateUser, deleteUser, removeFriend } = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

router
    .route('/:userid')
    .get(getUserId)
    .put(updateUser)
    .delete(deleteUser)

router
    .route('/:userid/friends/:friendid')
    .post(addFriend)
    .delete(removeFriend)

module.exports = router;