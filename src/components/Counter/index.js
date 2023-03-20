import React from 'react';
import  { connect } from 'react-redux';
import { increment, decrement } from '../../store/slices/counterSlice';

const Counter = (props) => {
console.log(props)
const { count, step, dispatch } = props;

    return (
        <div>
            <p>Count: {count}</p>
            <p>Step: {step}</p>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
    );
}

function mapStateToProps(state) {
    return state;
}
 /* подписка на часть стейта -->
function mapStateToProps(state) {
    return {
        count: state.count,
        step: state.step
    };
}
*/

// компонент высшего порядка со стейтом -->
// const withState = connect(mapStateToProps);

// const CounterWithState = withState(Counter);

//export default CounterWithState;

export default connect(mapStateToProps)(Counter);
