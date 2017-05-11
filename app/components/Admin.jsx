import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { getAllUsers, deleteUser } from 'app/api/users';

class Admin extends Component {
    render() {
        return (
            <div>
                ADMIN
            </div>
        );
    }
}

const mapStateToProps = createSelector(
    state => state.app,
    app => ({ ...app })
);

const mapActionsToProps = {
    onGetAllUsers: getAllUsers,
    onDeleteUser: deleteUser
}

export default connect(mapStateToProps, mapActionsToProps)(Admin);
