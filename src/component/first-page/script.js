import React, {Component} from 'react';
import config from './config.json';
import styles from './style.sass';

class FirstPage extends Component {
    render() {
        return (
            <div className={styles.root}>
                {config.contentText}
            </div>
        );
    }
}

export default FirstPage
