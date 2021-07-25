import React from 'react';
import { connect } from 'react-redux';

import Card from '../card/card.component';

import { onIncrement, onDecrement } from '../../redux/app.actions';


const SagaExample = ({ increment, decrement, value }) => (

    <Card>
        {value}
        <button onClick={increment}>Add 1</button>
        <button onClick={decrement} >Minus 1</button>
    </Card>
);

const mapStateToProps = state => ({
    value: state.app.value
});

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(onIncrement()),
    decrement: () => dispatch(onDecrement())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(SagaExample);