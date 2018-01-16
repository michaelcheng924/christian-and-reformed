import React, { Component } from 'react';
import css from 'classnames';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';

class CatechismCorner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberInputValue: '',
            show: true
        };

        this.onNumberChange = this.onNumberChange.bind(this);
        this.onNumberSubmit = this.onNumberSubmit.bind(this);
    }

    componentWillUpdate(nextProps) {
        if (this.props.mode !== nextProps.mode) {
            document.body.style.background = '#E0F7FA';
        }
    }

    onNumberChange(event) {
        this.setState({ numberInputValue: Number(event.target.value) });
    }

    onNumberSubmit(event) {
        event.preventDefault();

        const currentNumber = this.props.number;
        const number = this.state.numberInputValue;

        if (
            this.props.catechism === 'boysGirls' && number >= 1 && number <= 135 ||
            this.props.catechism === 'shorter' && number >= 1 && number <= 107
        ) {
            this.props.setParentState({ number });
        }
        
        this.setState({ numberInputValue: '' });
    }

    render() {
        const selectContainerClassNames = css('catechism-corner__select-container', {
            'catechism-corner__select-container--hide': !this.state.show
        });

        return (
            <div className="catechism-corner__settings">
                <div className={selectContainerClassNames}>
                    <div className="catechism-corner__select">
                        <h3>Select a catechism:</h3>
                        <div className="catechism-corner__select-options">
                            <RadioButtonGroup
                                name="options"
                                onChange={event => this.props.setParentState({ catechism: event.target.value, number: 1 })}
                                valueSelected={this.props.catechism}
                            >
                                <RadioButton
                                    value="boysGirls"
                                    label="Catechism for Boys and Girls"
                                />
                                <RadioButton
                                    value="shorter"
                                    label="Westminster Shorter Catechism"
                                />
                            </RadioButtonGroup>
                            {
                                this.props.mode === 'all'
                                    ? null
                                    : (
                                        <form className="catechism-corner__jump-to-number-form" onSubmit={this.onNumberSubmit}>
                                            <input
                                                className="catechism-corner__jump-to-number-input"
                                                placeholder={`Jump to number (1 - ${this.props.catechism === 'boysGirls' ? 135 : 107})`}
                                                type="number"
                                                onChange={this.onNumberChange}
                                                value={this.state.numberInputValue}
                                            />
                                        </form>
                                    )
                            }
                        </div>
                    </div>
                    <div className="catechism-corner__select">
                        <h3>Select a mode:</h3>
                        <div className="catechism-corner__select-options">
                            <RadioButtonGroup
                                name="mode"
                                onChange={event => this.props.setParentState({ mode: event.target.value })}
                                valueSelected={this.props.mode}
                            >
                                <RadioButton
                                    value="all"
                                    label="View all"
                                />
                                <RadioButton
                                    value="type"
                                    label="Type answer"
                                />
                                <RadioButton
                                    value="fill"
                                    label="Fill in the blank"
                                />
                                <RadioButton
                                    value="multiple"
                                    label="Multiple choice"
                                />
                            </RadioButtonGroup>
                            <Checkbox
                                label="Show answer"
                                onCheck={event => this.props.setParentState({ showAnswer: event.target.checked })}
                            />
                        </div>
                    </div>
                </div>
                <div className="catechism-corner__show-hide" onClick={() => this.setState({ show: !this.state.show })}>
                    {this.state.show ? <strong>Hide settings <span className="fa fa-angle-up" /></strong> : <strong>Show settings <span className="fa fa-angle-down" /></strong>}
                </div>
            </div>
        );
    }
}

export default CatechismCorner;
