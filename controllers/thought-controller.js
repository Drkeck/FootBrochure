const {Thought} = require('../models');
const { findOneAndUpdate } = require('../models/User');
const User = require('../models/User');

const thoughtController = {

    getAllThoughts(req, res) {
        Thought.find({})
            .populate({
                path:'reactions',
                select:'reactionBody'
            })
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err)
            })
    },

    getThoughtbyId({ params }, res) {
        Thought.findOne({ _id: params.id})
            .populate({
                path:'reactions',
                select:'reactionBody'
            })
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
    },

    createThought({ body }, res) {
        Thought.create(body)
            .then(({_id}) => {
                return User.findOneAndUpdate( 
                    {username: body.username},
                    {$push: {thought: _id}},
                    {new: true}
                    )
            })
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    },

    addReaction({params, body}, res) {
        Thought.findOneAndUpdate(
            { _id: params.id},
            {$push: { reactions: body}},
            {new: true})
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought under this id to react to!'})
                    return;
                }
                res.json(dbThoughtData)
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
    },

    updateThought({params, body}, res) {
        Thought.findOneAndUpdate({_id: params.id}, body, {new: true})
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
    },

    deleteThought({ params }, res) {
        Thought.findOneAndDelete({_id: params.id})
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
    },

    removeReaction({ params }, res) {
        Thought.findOneAndUpdate({ _id: params.id}, {$pull: { reactions: { reactionId: params.reactionid} } }, { new: true } )
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No post to react to' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
    }
}

module.exports = thoughtController;