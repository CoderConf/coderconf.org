import React, {Component} from 'react';
import config from './content.json';
import styles from './style.sass';

class Page extends Component {
    render() {
        return (
            <div className={styles.root}>
                <h2>{config.title}</h2>
                {config.description.map(function(value) {
                    return <p>{value}</p>
                })}
            </div>
        );
    }
}

export default Page
