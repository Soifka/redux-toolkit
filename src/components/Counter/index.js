import React from 'react';
import  { connect } from 'react-redux';
import { increment, decrement, setStep } from '../../store/slices/counterSlice';

const Counter = (props) => {
console.log(props)
const { count, step, increment, decrement, setStep } = props;

    return (
        <div>
            <p>Count: {count}</p>
            <label>
                Step: <input type="number" value={step} onChange={({target: {value}}) => setStep(value)} />
            </label>
            <button onClick={() => decrement()}>Decrement</button>
            <button onClick={() => increment()}>Increment</button>
        </div>
    );
}

/* подписка на весь стейт -->
function mapStateToProps(state) {
    return state;
}
*/

 // подписка на часть стейта -->
function mapStateToProps(state) {
    return state.counter;
}


// компонент высшего порядка со стейтом -->
// const withState = connect(mapStateToProps);

// const CounterWithState = withState(Counter);

//export default CounterWithState;

/* !!!!!
mapDispatchToProps --> функциональный вид
function  mapDispatchToProps(dispatch) {
    return {
        incrementCb: () => dispatch(increment()),
        decrementCb: () => dispatch(decrement()),
        setStepCb: ({target: {value}}) => dispatch(setStep(value))
    }
}
*/

const mapDispatchToProps = {
    increment,
    decrement,
    setStep
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
