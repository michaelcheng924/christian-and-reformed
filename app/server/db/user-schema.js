import mongoose from 'mongoose';

export const User = mongoose.model('User', {
    email: String,
    password: String,
    data: Object
});

export const AppData = mongoose.model('AppData', {
    data: Object,
    name: String
});
