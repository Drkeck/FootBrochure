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
    .put(addFriend)
    .delete(deleteUser)


router
    .route('/:userid/:friendid')
    .put(removeFriend)