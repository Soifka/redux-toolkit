import React from 'react';
import  { connect } from 'react-redux';
import { increment, decrement, setStep } from '../../store/slices/counterSlice';
import { setLang } from '../../store/slices/langSlice';
import CONSTANTS from '../../constants';
import cx from 'classnames';
import styles from './Counter.module.scss';

const { LANGUAGE: { EN_US, UA_UA, DE_DE }, LANGUAGE, THEME } = CONSTANTS;

const translations = new Map([
    [
        EN_US.VALUE,
        {
            countText: 'Count',
            stepText: 'Step',
            incrementText: 'Increment',
            decrementText: 'Decrement'
        }
    ],
    [
        UA_UA.VALUE,
        {
            countText: 'Рахунок',
            stepText: 'Крок',
            incrementText: 'Інкремент',
            decrementText: 'Декремент'
        }
    ],
    [
        DE_DE.VALUE,
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
const { count, step, language, theme, increment, decrement, setStep, setLang } = props;

const translation = translations.get(language);
const { countText, stepText, incrementText, decrementText } = translation;

const className = cx({
    [styles.darkTheme]: theme === THEME.DARK,
    [styles.lightTheme]: theme === THEME.LIGHT
})

    return (
        <div className={className}>
            <select value={language} onChange={({target: { value }}) => setLang(value)}>
                {Object.values(LANGUAGE).map((langObj) => 
                    <option key={langObj.VALUE} value={langObj.VALUE}>{langObj.OPTION_TEXT}</option>
                )}
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
        language: state.lang,
        theme: state.theme
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
