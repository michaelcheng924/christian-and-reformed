import React, { Component } from 'react';
import css from 'classnames';
import Confetti from 'react-confetti';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class TypeMode extends Component {
    constructor(props) {
        super(props);

        this.state = {
            answer: '',
            correct: false
        };

        this.onAnswerChange = this.onAnswerChange.bind(this);
        this.onAnswerKeyDown = this.onAnswerKeyDown.bind(this);
        this.onEnter = this.onEnter.bind(this);
        this.onNavigateNext = this.onNavigateNext.bind(this);
        this.onNavigatePrevious = this.onNavigatePrevious.bind(this);        
        this.onNext = this.onNext.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.answerInput.focus();
    }

    componentWillUpdate(nextProps) {
        if (this.props.number !== nextProps.number || this.props.catechism !== nextProps.catechism) {
            this.setState({
                answer: '',
                correct: false
            });

            document.body.style.background = '#E0F7FA';

            window.removeEventListener('keydown', this.onEnter);
        }
    }

    componentDidUpdate() {
        this.answerInput && this.answerInput.focus();
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onEnter);
    }

    onEnter(event) {
        event.preventDefault();

        if (event.which === 13 && this.state.correct) {
            this.onNext();
        }
    }

    onAnswerChange(event) {
        this.setState({ answer: event.target.value });

        document.body.style.background = '#E0F7FA';
    }

    onAnswerKeyDown(event) {
        if (event.which === 13) {
            event.preventDefault();

            this.onSubmit();
        }
    }

    onNavigateNext() {
        this.props.setParentState({ number: this.props.number + 1 });
    }

    onNavigatePrevious() {
        this.props.setParentState({ number: this.props.number - 1 });
    }

    onNext() {
        this.props.setParentState({ number: this.props.number + 1 });

        this.setState({
            answer: '',
            correct: false
        });

        document.body.style.background = '#E0F7FA';
    }

    onSubmit(event) {
        const { catechism, number, setParentState } = this.props;

        if (event) {
            event.preventDefault();
        }

        const input = this.getAnswer(this.state.answer);
        const answer = catechism[number - 1].answer;

        if (input && answer && input.toLowerCase() === answer.toLowerCase()) {
            setTimeout(() => {
                window.addEventListener('keydown', this.onEnter);
            }, 100);

            this.setState({ correct: true });

            document.body.style.background = '#C8E6C9';
        } else {
            document.body.style.background = '#FFCDD2';
        }
    }

    getAnswer(string) {
        return string.replace(/[^a-zA-Z ]/gm, '').toLowerCase();
    }

    render() {
        const { contentHeight, correct } = this.state;
        const { catechism, number, showAnswer } = this.props;

        const navPreviousClassNames = css('fa fa-angle-left', {
            'catechism-corner__navigation--hidden': number <= 1
        });

        const navNextClassNames = css('fa fa-angle-right', {
            'catechism-corner__navigation--hidden': number >= catechism.length
        });

        return (
            <div className="catechism-corner__content" ref={type => this.type = type}>
                <div>
                    {
                        correct
                            ? (
                                <div className="catechism-corner__navigation">
                                    <div className="catechism-corner__number">{number}</div>
                                </div>
                            )
                            : (
                                <div className="catechism-corner__navigation">
                                    <div className={navPreviousClassNames} onClick={this.onNavigatePrevious} />
                                    <div className="catechism-corner__number">{number}</div>
                                    <div className={navNextClassNames} onClick={this.onNavigateNext} />
                                </div>
                            )
                    }

                    <div className="catechism-corner__question">{catechism[number - 1].question}</div>

                    {
                        correct
                            ? (
                                <div>
                                    <Confetti height={1000} width={2000} />
                                    <div className="catechism-corner__answer">{catechism[number - 1].answer}</div>
                                    <div><RaisedButton label="Next" primary={true} onClick={this.onNext} /></div>
                                </div>
                            )
                            : (
                                <div>
                                    <TextField
                                        className="catechism-corner__answer-input"
                                        hintText="Answer"
                                        multiLine
                                        underlineStyle={{ borderColor: '#333' }}
                                        underlineFocusStyle={{ borderColor: '#00838F' }}
                                        onChange={this.onAnswerChange}
                                        onKeyDown={this.onAnswerKeyDown}
                                        value={this.state.answer}
                                        ref={answerInput => this.answerInput = answerInput}
                                    />
                                    {
                                        showAnswer ? <div className="catechism-corner__show-answer"><strong>{catechism[number - 1].answer}</strong></div> : null
                                    }
                                    <div><RaisedButton label="Submit" primary={true} onClick={this.onSubmit} /></div>
                                </div>
                            )
                    }
                </div>
            </div>
        );
    }
}

export default TypeMode;
