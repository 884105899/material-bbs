import React from 'react'
import styles from './plate.module.css'
import PaperSheet from './paper'
import { connect } from 'react-redux'

class Editor extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.jss1}>
                    <div className={styles.jss2}>
                        <h2 className={styles.jss3}>Publish your new story</h2>
                    </div>
                </div>
                <div className={styles.jss4}>
                    <PaperSheet />
                </div>
            </div>
        )
    }
}

export default connect(null, null)(Editor); 