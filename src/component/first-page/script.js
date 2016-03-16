import React, {Component} from 'react';
import config from './content.json';
import styles from './style.sass';

class Page extends Component {
    render() {
        return (
            <div className={styles.root}>
                <div className={styles.header}>
                    <h1>{config.title}</h1>
                    <h3>{config.description}</h3>
                </div>
                <p className={styles.downward}>⬇</p>
            </div>
        );
    }
}

export default Page
