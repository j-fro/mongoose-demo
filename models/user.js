var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    username: {type: String, unique: true},
    admin: Boolean,
    meta: {
        age: Number,
        website: String
    },
    created_at: Date
});

var User = mongoose.model('users', userSchema);
module.exports = User;
