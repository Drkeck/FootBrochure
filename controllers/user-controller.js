const { Schema, model, Types} = require('mongoose');
const moment = require('moment');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function(v) {
                    return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,8})$/.test
                }
            }
        },
        thought: {
            type: Schema.Types.ObjectId,
            ref: 'thought'
        },
        friends: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },

    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }   
)

UserSchema.virtual('friendCount').get(function() {
    return this.friends.reduce((total, friends) => total + friends.length + 1, 0)
})