# [FootBrochure](https://youtu.be/9c6advkQfPw)

![image of api](https://i.imgur.com/3CLCJdE.gif)


This is the api for a new social media platform FootBrochure (yes, I seriously named it that, gotta have a sense of humor while learning).

this api allows for typical users, but those users are able to add friends, share thoughts(Posts) and React to posts.

this is still in the fledgling stages of new social media but the sole foundation has already been set.

I guess you can see we got off on the right foot.

[Click here for a video!](https://youtu.be/9c6advkQfPw)

## Api paths (watch your step!):
* Users:
  *  Get all users: `/api/users` Method: `Get`
  *  Create new user: `/api/users` Method: `Post`
  *  Get user by Id: `/api/users/:userid` Method: `Get`
  *  Update user: `/api/users/:userid` Method: `Put`
  *  Delete User: `/api/users/:userid` Method: `Delete`
* Thoughts:
  * Get all thoughts: `/api/thoughts` Method: `Get`
  * Get a thought by id:`/api/thoughts/:thoughtid` Method:`Get`
  * Create a new thought:`/api/thoughts` Method: `Post`
  * Update thought:`/api/thoughts/:thoughtid` Method: `Put`
  * Delete thought:`/api/thoughts/:thoughtid` Method: `Delete`
* Friends:
  * Add Friend: `/api/users/:userId/friends/:friendId` Method: `Post`
  * Remove Friend:`/api/users/:userId/friends/:friendId:` Method `Delete`
* Reactions: 
  * Add a reaction: `/api/thoughts/:thoughtid/reactions` Method: `Post`
  * Remover a Reaction: `/api/thoughts/:thoughtid/reactions/:reactionId` Method: `Delete`

## Technologies involved (They Step together!)

![secondimage](https://i.imgur.com/D4Qwtt3.gif)

* [MongoDb](https://www.mongodb.com/)
* [Mongoose](https://www.npmjs.com/package/mongoose)
* [express](https://www.npmjs.com/package/express)
* [moment](https://www.npmjs.com/package/moment)
* [node.js](https://nodejs.org/en/)

## Author (Kept his pace)
Hi Im [Drkeck](https://github.com/Drkeck) also know as alex! feel free to hit me up on Github or email me at k3ckl3y.a@gmail.com