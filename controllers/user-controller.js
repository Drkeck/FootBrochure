const {User} = require('../models');

const usercontroller = {

    getAllUsers(req, res) {
        User.find()
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    getUserId({ params }, res) {
        User.findById({ _id: params.userid})
            .populate('friends')
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user with this id'})
                    return
                }
                res.json(dbUserData)
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
    },

    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
    },

    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userid},
            {$push: {friends: params.friendsid}},
            {new: true}
            )
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No one found with this id'})
                    return
                }
                res.json(dbThoughtData)
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
    },

    updateUser({ params, body }, res) {
        User.findOneAndUpdate(
            {_id: params.userid}, 
            body,
            {new: true})
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No uses found under this id.'})
                    return;
                }
                res.json(dbUserData)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    },

    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.userid })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'no user found under this id'})
                    return
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
    },
    
    removeFriend({params, body}, res) {
        User.findOneAndUpdate(
            {_id: params.userid},
            {$pull: {friends: params.friendid} },
            { new: true })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id'})
                    return
                }
                res.json(dbThoughtData)
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
    }
}

module.exports = usercontroller;