import React from 'react';
import  { connect } from 'react-redux';
import { increment, decrement, setStep } from '../../store/slices/counterSlice';

const Counter = (props) => {
console.log(props)
const { count, step, incrementCb, decrementCb, setStepCb } = props;

    return (
        <div>
            <p>Count: {count}</p>
            <label>
                Step: <input type="number" value={step} onChange={setStepCb} />
            </label>
            <button onClick={decrementCb}>Decrement</button>
            <button onClick={incrementCb}>Increment</button>
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


function  mapDispatchToProps(dispatch) {
    return {
        incrementCb: () => dispatch(increment()),
        decrementCb: () => dispatch(decrement()),
        setStepCb: ({target: {value}}) => dispatch(setStep(value))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Counter);
