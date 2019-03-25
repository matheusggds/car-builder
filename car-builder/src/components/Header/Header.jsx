import React from 'react';
import logo from '../../images/RV-logo.svg';
import styles from './Header.module.scss';

const header = (props) => {
    const MODELS = [
        {
            name: 'MODEL R',
            code: '41ORKNZDU',
        },
        {
            name: 'MODEL IQ',
            code: null,
        },
        {
            name: 'MODEL MOBI',
            code: null,
        },
        {
            name: 'MODEL CHARLIE',
            code: null,
        },
        {
            name: 'MODEL ITALY',
            code: null,
        }
    ];


    return (
        <header>
            <div className="container">
                <div className={styles.wrapper}>
                    <h1 className={styles.logo}>
                        <img src={logo} alt="Red Ventures" title="Red Ventures Logo"/>
                    </h1>
                    <ul className={styles.menu}>
                    {
                        MODELS.map((model, i) => {
                            return (
                                <li key={i}>
                                    <a href={`#${model.name}`} onClick={props.chooseModelHandler.bind(this, model.code)}>
                                        {model.name}
                                    </a>
                                </li> // idx as key - not recommended
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default header;