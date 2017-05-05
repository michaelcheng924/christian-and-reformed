import React, { createClass } from 'react';
import { partial } from 'lodash';

const Login = createClass({
    displayName: 'Login',

    onChangeMode(mode) {
        this.props.setParentState({ mode });
    },

    render() {
        return (
            <div className="login">
                <div className="login__box mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__supporting-text">
                        <form action="#">
                          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" type="text" id="sample3" />
                            <label className="mdl-textfield__label" htmlFor="sample3">Text...</label>
                          </div>
                        </form>
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                            Get Started
                        </a>
                    </div>
                </div>
                <div className="login__overlay" />
            </div>
        );
    }
});

export default Login;
