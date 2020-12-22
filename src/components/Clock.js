import React from 'react';
import moment from 'moment';
import './Clock.css';

class TimeSetter extends React.Component {
    constructor(props, name) {
        super(props);
        this.name = name;
    }
    render() {
        return (
            <div>
                <div class="incdec" onClick={this.props.clickDec}>-</div>
                {this.name + ' length: '}
                {this.props.value}
                <div class="incdec" onClick={this.props.clickInc}>+</div>
                
            </div>
        );
    }
}

class BreakSetter extends TimeSetter {
    constructor(props) {
        super(props, 'break');

    }

}

class SessionSetter extends TimeSetter {
    constructor(props) {
        super(props, 'session');

    }
}

class Countdown extends React.Component {
    constructor(prpos) {
        super(props);
        this.startCountdown = this.startCountdown.bind(this);
    }

    startCountdown(duration) {
        const now = new Date().getTime();
        const countdownDate = now + 
    }

}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breakLength: 5,
            sessionLength: 25
        };
        this.incrementBreak = this.incrementBreak.bind(this);
        this.decrementBreak = this.decrementBreak.bind(this);
        this.incrementSession = this.incrementSession.bind(this);
        this.decrementSession = this.decrementSession.bind(this);
    }

    incrementBreak() {
        this.setState((state, props) => this.setState({
            breakLength: state.breakLength + 1
        }));
    }
    
    decrementBreak() {
        this.setState((state, props) => this.setState({
            breakLength: state.breakLength - 1
        }));
    }
    
    incrementSession() {
        this.setState((state, props) => this.setState({
            sessionLength: state.sessionLength + 1
        }));
    }

    decrementSession() {
        this.setState((state, props) => this.setState({
            sessionLength: state.sessionLength - 1
        }));
    }

    render() {
        return (
            <div>
                <BreakSetter
                    value={this.state.breakLength} 
                    clickInc={this.incrementBreak} 
                    clickDec={this.decrementBreak}
                />
                <SessionSetter
                    value={this.state.sessionLength} 
                    clickInc={this.incrementSession} 
                    clickDec={this.decrementSession}
                />
            </div>
        );
    }
}

export default Clock;