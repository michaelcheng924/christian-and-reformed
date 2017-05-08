import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Drawer, MenuItem } from 'material-ui';

import { APP_LIST } from 'app/constants/global';

export default class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };

        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    handleClose() {
        this.setState({open: false});
    }

    renderDrawerItems() {
        return APP_LIST.map(app => {
            return (
                <Link key={app.title} to={app.url}>
                    <MenuItem onTouchTap={this.handleClose}>{app.shortTitle || app.title}</MenuItem>
                </Link>
            );
        });
    }

    render() {
        return (
            <div>
                <AppBar
                    title="Reformed Christian App"
                    onLeftIconButtonTouchTap={this.handleToggle}
                    className="app-bar"
                />
                <Drawer
                    docked={false}
                    width={300}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <Link to="/">
                        <MenuItem onTouchTap={this.handleClose}>Home</MenuItem>
                    </Link>
                    {this.renderDrawerItems()}
                </Drawer>
            </div>
        );
    }
}
