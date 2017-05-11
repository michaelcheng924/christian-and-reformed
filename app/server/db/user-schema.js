import mongoose from 'mongoose';

export const User = mongoose.model('User', {
    email: String,
    password: String,
    data: Object
});
