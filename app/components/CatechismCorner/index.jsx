import React, { Component } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';

import BOYS_GIRLS from 'app/constants/catechism-boys-girls';
import SHORTER from 'app/constants/catechism-westminster-shorter';
import Settings from 'app/components/CatechismCorner/Settings';
import TypeMode from 'app/components/CatechismCorner/TypeMode';
import FillBlankMode from 'app/components/CatechismCorner/FillBlankMode';
import MultipleChoiceMode from 'app/components/CatechismCorner/MultipleChoiceMode';

class CatechismCorner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            catechism: 'boysGirls',
            mode: 'type',
            number: 1,
            numberInputValue: '',
            showAnswer: false
        };

        this.setParentState = this.setParentState.bind(this);
    }

    componentDidMount() {
        document.body.style.background = '#E0F7FA';
    }

    componentWillUnmount() {
        document.body.style.background = '#FFF';
    }

    setParentState(object) {
        this.setState(object);
    }

    getCatechism() {
        return this.state.catechism === 'boysGirls' ? BOYS_GIRLS : SHORTER;
    }

    renderAll() {
        if (this.state.mode !== 'all') { return null; }

        const catechism = this.getCatechism();

        return (
            <div className="catechism-corner__content--all">
                {
                    catechism.map(data => {
                        return (
                            <div key={data.id} style={{ marginBottom: 15 }}>
                                <h3>{`${data.id}) ${data.question}`}</h3>
                                <div style={{ fontSize: 18 }}>{data.answer}</div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    renderType() {
        if (this.state.mode !== 'type') { return null; }

        return (
            <TypeMode
                catechism={this.getCatechism()}
                number={this.state.number}
                setParentState={this.setParentState}
                showAnswer={this.state.showAnswer}
            />
        );
    }

    renderFillBlank() {
        if (this.state.mode !== 'fill') { return null; }

        return (
            <FillBlankMode
                catechism={this.getCatechism()}
                number={this.state.number}
                setParentState={this.setParentState}
                showAnswer={this.state.showAnswer}
            />
        );
    }

    renderMultipleChoice() {
        if (this.state.mode !== 'multiple') { return null; }

        return (
            <MultipleChoiceMode
                catechism={this.getCatechism()}
                number={this.state.number}
                setParentState={this.setParentState}
                showAnswer={this.state.showAnswer}
            />
        );
    }

    render() {
        return (
            <div className="catechism-corner">
                <Settings catechism={this.state.catechism} mode={this.state.mode} setParentState={this.setParentState} />

                {this.renderAll()}
                {this.renderType()}
                {this.renderFillBlank()}
                {this.renderMultipleChoice()}
            </div>
        );
    }
}

export default CatechismCorner;
