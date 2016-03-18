import React, {Component} from 'react';
import config from './content.json';
import styles from './style.sass';

class Page extends Component {
    render() {
        return (
            <div className={styles.root}>
                <h1>{config.title}</h1>
                {config.description.map(function(value) {
                    return <p>{value}</p>
                })}
            </div>
        );
    }
}

export default Page
