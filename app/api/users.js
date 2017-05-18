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

export const getAppData = createClient({
    actionTypePrefix: 'users:getAppData',
    requestType: 'POST',
    url: '/api/global/getappdata'
});

export const addScore = createClient({
    actionTypePrefix: 'users:addScore',
    requestType: 'POST',
    url: '/api/global/addscore'
});

export const deleteScore = createClient({
    actionTypePrefix: 'users:deleteScore',
    requestType: 'DELETE',
    url: '/api/global/deletescore'
});

export const addLeaderboard = createClient({
    actionTypePrefix: 'users:addLeaderboard',
    requestType: 'POST',
    url: '/api/global/addleaderboard'
});

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
