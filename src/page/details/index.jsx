import React from 'react'
import styles from './detail.module.css'
import PaperSheet from './paper'

class Detail extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.jss1}>
                    <div className={styles.jss2}>
                        <div className={styles.jss3}>
                            <h1>How We Built the Most Successful Castle Ever</h1>
                            <h4>The last 48 hours of my life were total madness. This is what I did.</h4>
                        </div>
                    </div>
                </div>
                <div className={styles.jss4}>
                    <PaperSheet />
                </div>
            </div>
        )
    }
}

export default Detail;