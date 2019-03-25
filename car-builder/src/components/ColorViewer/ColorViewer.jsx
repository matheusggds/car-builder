import React, { useState } from 'react';
import styles from '../StepsViewer/StepsViewer.module.scss';
import colorstyles from './ColorViewer.module.scss';

const colorviewer = (props) => {
    const { type: title, items: colors, description } = props.stepInfos;

    const [colorState, setColor] = useState({
        colors,
        selectedColor: colors[0]
    });

    const selectColor = (idx) => {
        const selectedColor = { ...colorState.colors[idx] },
            currentState = { ...colorState }; // copy state

        currentState.selectedColor = selectedColor;

        // update state
        setColor(currentState);
    }

    let { image, label, price } = colorState.selectedColor;

    return (
        <div className={styles.row + ' row'}>
            <div className="col-6">
            {
                <div>
                    <img src={image} alt="" />
                    <p className={colorstyles.legend}>{label}</p>
                    <span className={colorstyles.price}>{price === 0 ? 'Included' : price} </span>
                </div>
            }
            </div>
            <div className="col-6">
                <h2 className={styles.title}>{title}</h2>

                <div className={styles.description}>
                    { description }
                </div>

                <div className={colorstyles.items}>
                {
                    colorState.colors.map((color, idx) => {
                        const style = {
                            'backgroundColor': color.hexadecimal
                        }

                        return (
                            <span
                                key={idx}
                                className={colorstyles.item}
                                style={style}
                                onClick={selectColor.bind(this, idx)}
                            >
                            </span>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default colorviewer;