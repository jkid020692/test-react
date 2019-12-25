import React from 'react';
import ReactDOM from 'react-dom';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <span>Chào {this.props.username}</span>
            </div>
        );
    }
}
export default Dashboard