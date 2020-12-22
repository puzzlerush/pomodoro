import React from 'react';
import Countdown from './Countdown';
import {BreakSetter, SessionSetter} from './TimeSetter';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breakLength: 5,
            sessionLength: 25,
        };
        this.incrementBreak = this.incrementBreak.bind(this);
        this.decrementBreak = this.decrementBreak.bind(this);
        this.incrementSession = this.incrementSession.bind(this);
        this.decrementSession = this.decrementSession.bind(this);
    }

    incrementBreak() {
        this.setState((state, props) => ({
            breakLength: state.breakLength + 1
        }));
    }
    
    decrementBreak() {
        if (this.state.breakLength <= 1) {
            return;
        }
        this.setState((state, props) => ({
            breakLength: state.breakLength - 1
        }));
    }
    
    incrementSession() {
        this.setState((state, props) => ({
            sessionLength: state.sessionLength + 1
        }));
    }

    decrementSession() {
        if (this.state.sessionLength <= 1) {
            return;
        }
        this.setState((state, props) => ({
            sessionLength: state.sessionLength - 1
        }));
    }

    render() {
        return (
            <div>
                <Countdown 
                    sessionDuration={this.state.sessionLength * 60 * 1000} 
                    breakDuration={this.state.breakLength * 60 * 1000}
                />
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