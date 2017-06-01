import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../../components/button';

import {
    increment,
    decrement,
} from './actions'

class Example extends Component {
    render() {
        const {
            counter,
            doIncrement,
            doDecrement,
        } = this.props;

        return <div>
            <Button onClick={doIncrement}>+</Button>
            <Button onClick={doDecrement}>-</Button>
            <p>{counter}</p>
        </div>;
    }
}

const mapStateToProps = (state, props) => ({
    counter: state.counter
});

const mapDispatchToProps = (dispatch, props) => ({
    doIncrement: () => dispatch(increment()),
    doDecrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Example);