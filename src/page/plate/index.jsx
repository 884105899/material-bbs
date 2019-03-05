import React from 'react'
import styles from './plate.module.css'
import PaperSheet from './paper'

class Plate extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.jss1}>
                    <div className={styles.jss2}>
                        <h2 className={styles.jss3}>A Place for Entrepreneurs to Share and Discover New Stories</h2>
                    </div>
                </div>
                <div className={styles.jss4}>
                    <PaperSheet />
                </div>
            </div>
        )
    }
}

export default Plate; 