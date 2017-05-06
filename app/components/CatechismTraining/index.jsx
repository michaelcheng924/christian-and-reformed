import React, { Component } from 'react';

import BOYS_GIRLS from 'app/constants/catechism-boys-girls';

class CatechismTraining extends Component {
    constructor(props) {
        super(props);
    }

    setParentState(object) {
        this.setState(object);
    }

    getAnswer(string) {
        return string.replace(/[^a-zA-Z ]/gm, '').toLowerCase();
    }

    render() {
        return (
            <div className="catechism-training">
                <div className="catechism-training__header">
                    <div className="catechism-training__header-title">Catechism for Boys and Girls Training</div>
                    <div className="catechism-training__header-subtitle">An app to help you and your children learn the catechism faster.</div>

                </div>
            </div>
        );
    }
}

export default CatechismTraining;
