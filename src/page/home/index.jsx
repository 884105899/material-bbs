import React from 'react'
import styles from './home.module.css'
import FloatingActionButtons from './button'

class Home extends React.Component{
    render(){
        return(<div className={styles.jss1}>
            <div className={styles.jss2}>
                <div className={styles.jss3} >
                    <h1 className={styles.jss4}>
                        Your Story Starts With Us.
                    </h1>
                    <h4>
                    Every landing page needs a small description after the big bold title, that's why we added this text here. Add here all the information that can make you or your product create the first impression.
                    </h4>
                    <FloatingActionButtons />
                </div>
            </div>
            <div className={styles.jss11}>

            </div>
        </div>)
     }
}

export default Home; 