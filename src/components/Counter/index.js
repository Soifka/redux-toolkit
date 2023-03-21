import React from 'react';
import  { connect } from 'react-redux';
import { increment, decrement, setStep } from '../../store/slices/counterSlice';
import { setLang } from '../../store/slices/langSlice';
import CONSTANTS from '../../constants';

const { LANGUAGE: { EN_US, UA_UA, DE_DE } } = CONSTANTS;

const translations = new Map([
    [
        EN_US,
        {
            countText: 'Count',
            stepText: 'Step',
            incrementText: 'Increment',
            decrementText: 'Decrement'
        }
    ],
    [
        UA_UA,
        {
            countText: 'Рахунок',
            stepText: 'Крок',
            incrementText: 'Інкремент',
            decrementText: 'Декремент'
        }
    ],
    [
        DE_DE,
        {
            countText: 'Punktzahl',
            stepText: 'Schritt',
            incrementText: 'Zuwachs',
            decrementText: 'Dekrementieren'
        }
    ]
])

const Counter = (props) => {
console.log(props)
const { count, step, language, increment, decrement, setStep, setLang } = props;

const translation = translations.get(language);
const { countText, stepText, incrementText, decrementText } = translation;

    return (
        <div>
            <select value={language} onChange={({target: { value }}) => setLang(value)}>
                <option value={EN_US}>English</option>
                <option value={UA_UA}>Ukranian</option>
                <option value={DE_DE}>Deutsch</option>
            </select>
            <p>{countText}: {count}</p>
            <label>
                {stepText}: <input type="number" value={step} onChange={({target: {value}}) => setStep(value)} />
            </label>
            <button onClick={() => decrement()}>{decrementText}</button>
            <button onClick={() => increment()}>{incrementText}</button>
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
    return {
        ...state.counter,
        language: state.lang
    };
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
    setStep,
    setLang
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
