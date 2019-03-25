import React from 'react';
import ColorViewer from '../ColorViewer/ColorViewer';
import styles from './StepsViewer.module.scss';

const stepsviewer = (props) => {
    const { type } = props.currentStep;


    const resolveType = () => {
        if ( type === 'color') return <ColorViewer stepInfos={props.currentStep} />
        // if ( type === 'engine') return <ColorViewer stepInfos={this.props.currentStep} />
        // if ( type === 'wheels') return <ColorViewer stepInfos={this.props.currentStep} />
    }

    return (
        <main className={styles.wrapper}>
            <div className={styles.container + ' container'}>
                {
                    resolveType()
                }
            </div>
        </main>
    )
};

export default stepsviewer;