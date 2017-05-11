import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { map, partial } from 'lodash';

import { getAllUsers, deleteUser } from 'app/api/users';
import { logout } from 'app/actions/AppActions';

class Admin extends Component {
    constructor(props) {
        super(props);
        
        this.onDeleteUser = this.onDeleteUser.bind(this);
    }

    componentWillMount() {
        this.props.onGetAllUsers();
    }

    onDeleteUser(email) {
        if (typeof window !== 'undefined') {
            const confirm = window.confirm('Are you sure you want to delete this user?');

            if (confirm) {
                this.props.onDeleteUser({ email });
            }
        }
    }

    render() {
        const { allUsers, onLogout } = this.props;

        return (
            <div className="admin">
                <span onClick={onLogout}>Logout</span>
                <div>
                    {
                        allUsers.map(user => {
                            return (
                                <div key={user.email}>
                                    <div>
                                        <strong><u>{user.email}</u></strong>
                                        <i className="fa fa-times" aria-hidden="true" onClick={partial(this.onDeleteUser, user.email)} />
                                    </div>
                                    {
                                        map(user.data, (value, key, index) => {
                                            return (
                                                <div key={index}><strong>{key}:</strong> {value}</div>
                                            );
                                        })
                                    }
                                </div>
                            );
                        })
                    }
                </div>
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
    onDeleteUser: deleteUser,
    onLogout: logout
}

export default connect(mapStateToProps, mapActionsToProps)(Admin);
