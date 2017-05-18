import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import { addScore } from 'app/api/users';

class SaveScoreModal extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            saveName: ''
        };

        this.handleClose = this.handleClose.bind(this);
        this.saveScore = this.saveScore.bind(this);
    }

    handleOpen() {
        this.props.setParentState({ open: true });
    }

    handleClose() {
        this.props.setParentState({ open: false });
    }

    saveScore() {
        const { onAddScore, keyValue, score } = this.props;

        onAddScore({
            key: keyValue,
            score: {
                score,
                name: this.state.saveName
            }
        });

        this.handleClose();
    }

    render() {
        const { open, displayScore } = this.props;

        if (!this.props.open) { return null; }

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                disabled={!this.state.saveName}
                keyboardFocused={Boolean(this.state.saveName)}
                label="Submit"
                primary={true}
                onTouchTap={this.saveScore}
            />,
        ];

        return (
            <div>
                <Dialog
                    title="Save score?"
                    actions={actions}
                    modal={true}
                    open={open}
                >
                    <div>Your score (<strong>{displayScore}</strong>) is in the Top 10! To save your score, enter your name below and click <strong>Submit</strong>. If you do not want to save your score, click <strong>Cancel</strong>.</div>
                    <TextField
                        floatingLabelText="Enter your name here"
                        onChange={event => this.setState({ saveName: event.target.value })}
                    />
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = createSelector(
    state => state.app,
    app => ({ ...app })
);

const mapActionsToProps = {
    onAddScore: addScore
}

export default connect(mapStateToProps, mapActionsToProps)(SaveScoreModal);
