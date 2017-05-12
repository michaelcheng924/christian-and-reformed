import React, { Component } from 'react';

export default class VideoAudo extends Component {
    constructor(props) {
        super(props);

        
    }

    componentWillMount() {
        if (typeof window !== 'undefined') {
            document.title = 'Reformed Video and Audio';
            document.body.style.background = '#FFCDD2';
        }
    }

    render() {
        return (
            <div className="video-audio">
                <div className="catechism-training__header">
                    <div className="catechism-training__header-title">Catechism for Boys and Girls Training</div>
                    <div className="catechism-training__header-subtitle">An app to help you and your children learn the catechism faster.</div>
                </div>
            </div>
        );
    }
}
