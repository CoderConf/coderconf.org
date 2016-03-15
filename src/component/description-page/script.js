import React, {Component} from 'react';
import config from './config.json';
import styles from './style.sass';

class Page extends Component {
    render() {
        return (
            <div className={styles.root}>
                <h1>{config.title}</h1>
                <p>{config.description}</p>
                <p>{config.description}</p>
                <p>{config.description}</p>
                <p>{config.description}</p>
                <p>{config.description}</p>
                <p>{config.description}</p>
                <p>{config.description}</p>
                <p>{config.description}</p>
                <p>{config.description}</p>
                <p>{config.description}</p>
                <p>{config.description}</p>
                <p>{config.description}</p>
                <p>{config.description}</p>
                <p>{config.description}</p>
            </div>
        );
    }
}

export default Page
