import { createClient } from 'app/api/utils';

export const signup = createClient({
    actionTypePrefix: 'users:signup',
    requestType: 'POST',
    url: '/api/users/signup'
});

export const login = createClient({
    actionTypePrefix: 'users:login',
    requestType: 'POST',
    url: '/api/users/login'
});

export const loginWithToken = createClient({
    actionTypePrefix: 'users:loginWithToken',
    requestType: 'POST',
    url: '/api/users/loginwithtoken'
});

export const passwordResetEmail = createClient({
    actionTypePrefix: 'users:passwordResetEmail',
    requestType: 'POST',
    url: '/api/users/passwordresetemail'
});

// ******** ADMIN ********

export const getAllUsers = createClient({
    actionTypePrefix: 'users:getAllUsers',
    requestType: 'GET',
    url: '/api/users/allusers'
});

export const deleteUser = createClient({
    actionTypePrefix: 'users:deleteUser',
    requestType: 'DELETE',
    url: '/api/users/delete'
});
