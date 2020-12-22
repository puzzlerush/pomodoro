import React from 'react';
import './TimeSetter.css';

class TimeSetter extends React.Component {
    constructor(props, name) {
        super(props);
        this.name = name;
    }
    render() {
        return (
            <div className="timeSetter">
                {this.name}
                <div className="incdec" onClick={this.props.clickInc}>+</div>
                {this.props.value}
                <div className="incdec" onClick={this.props.clickDec}>-</div>
                
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

export {BreakSetter, SessionSetter};