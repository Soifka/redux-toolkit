import React from 'react';
import  { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
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
    const language = useSelector((state) => state.lang);
    const theme = useSelector((state) => state.theme);
    const { count, step } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const actionCreators = bindActionCreators(
        {setLang, setStep, increment, decrement}, 
        dispatch);

    const translation = translations.get(language);
    const { countText, stepText, incrementText, decrementText } = translation;

    const className = cx({
        [styles.darkTheme]: theme === THEME.DARK,
        [styles.lightTheme]: theme === THEME.LIGHT
    })

    return (
        <div className={className}>
            <select value={language} onChange={({target: { value }}) => actionCreators.setLang(value)}>
                {Object.values(LANGUAGE).map((langObj) => 
                    <option key={langObj.VALUE} value={langObj.VALUE}>{langObj.OPTION_TEXT}</option>
                )}
            </select>
            <p>{countText}: {count}</p>
            <label>
                {stepText}: <input type="number" value={step} onChange={({target: {value}}) => actionCreators.setStep(value)} />
            </label>
            <button onClick={() => actionCreators.decrement()}>{decrementText}</button>
            <button onClick={() => actionCreators.increment()}>{incrementText}</button>
        </div>
    );
}


export default Counter;
