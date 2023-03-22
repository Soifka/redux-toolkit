import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { switchTheme } from '../../store/slices/themeSlice';
import CONSTANTS from '../../constants';
import cx from 'classnames';
import styles from './Header.module.scss';

const { THEME } = CONSTANTS;

const Header = (props) => {
    /*
    const {theme, language} = useSelector((state) => ({
        theme: state.theme,
        language: state.lang
    }));
    */

    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    const className = cx(styles.header, {
        [styles.darkTheme]: theme === THEME.DARK,
        [styles.lightTheme]: theme === THEME.LIGHT
    })

    return (
        <header className={className}>
            <h1>My site</h1>
            <nav>
                <ul className={styles.navList}>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                </ul>
            </nav>
            <div>
                <button onClick={() => dispatch(switchTheme())}>Switch theme</button>
            </div>
        </header>
    );
}

/*
const mStP = (state) => {
    return {
        theme: state.theme,
        language: state.lang
    }
}

const mDtP = {
    switchTheme
}

export default connect(mStP, mDtP)(Header);
*/

export default Header;
