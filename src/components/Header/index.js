import React from 'react';
import { connect } from 'react-redux';
import { switchTheme } from '../../store/slices/themeSlice';
import cx from 'classnames';
import styles from './Header.module.scss';

const Header = (props) => {
    return (
        <header className=''>
            <h1>Counter</h1>
            <nav>
                <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                </ul>
            </nav>
            <div>
                <button onClick={() => switchTheme()}>Switch theme</button>
            </div>
        </header>
    );
}


function mapStateToProps(state) {
    return state.theme;
}

const mapDispatchToProps = {
    switchTheme
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
