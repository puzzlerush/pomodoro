import React from 'react';

function formatTime(seconds) {
    const hours = Math.floor(seconds/3600);
    seconds = seconds % 3600;
    const minutes = Math.floor(seconds/60);
    seconds = seconds % 60;
    return ('00' + hours).substr(-2) + ':' + 
           ('00' + minutes).substr(-2) + ':' + 
           ('00' + seconds).substr(-2);
    
}

class Countdown extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            timeRemaining: this.props.sessionDuration,
            lastUpdateTime: Date.now(),
            interval: null,
            onBreak: false
        }
        this.update = this.update.bind(this);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
        this.setState = this.setState.bind(this);
    }

    update() {
        const now = Date.now();
        const dt = now - this.state.lastUpdateTime;
        this.setState((state, props) => ({
            timeRemaining: state.timeRemaining - dt,
            lastUpdateTime: now,
        }));
        if (this.state.timeRemaining <= 0) {
            const alarm = document.getElementById('audio-element');
            alarm.play();
            this.setState((state, props) => ({
                timeRemaining: state.onBreak ? this.props.sessionDuration : this.props.breakDuration,
                onBreak: !state.onBreak,

            }));
        }
    }

    start() {
        if (!this.state.interval) {
            this.setState({
                lastUpdateTime: Date.now(),
                interval: setInterval(this.update, 1),
            });
        }
    }

    stop() {
        clearInterval(this.state.interval);
        this.setState({interval: null});
    }

    reset() {
        this.setState({
            timeRemaining: this.props.sessionDuration,
            onBreak: false
        });
    }

    render() {
        const seconds = Math.floor(this.state.timeRemaining / 1000);
        return (
            <div className="countdown">
                {this.state.onBreak ? <p>break</p> : <p>session</p>}
                <p>{formatTime(seconds)}</p>
                <button onClick={() => this.start()}>Start</button>
                <button onClick={() => {this.stop()}}>Pause</button>
                <button onClick={() => {this.reset()}}>Reset</button>
                <audio id="audio-element">
                    <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
                </audio>
            </div>
        );
    }
}

export default Countdown;