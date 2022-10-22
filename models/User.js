const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    username: { type: String, require: true, unique: true, minlength: [5, 'Username must be at least 5 characters long'] },
    hashedPassword: { type: String, require: true }
});


userSchema.index({ username: 1 }, {
    //unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;