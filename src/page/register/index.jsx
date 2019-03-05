import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import styles from './register.module.css'
import Forms from './FormControl'

class Register extends React.Component {
    render() {
        return (
            <div className={styles.jss592}>
                <div className={styles.jss265}>
                    <div className={styles.jss363}>
                        <Card className={styles.jss442}>
                            <CardContent>
                                <div className={styles.jss595}>Register</div>
                                <div className={styles.jss471}>
                                    <div className={styles.jss265}>
                                        <div className={styles.jss267}>
                                            <div className={styles.jss626}>
                                                <div className={styles.jss378}>
                                                    <div className={styles.jss379}>Marketing</div>
                                                    <div className={styles.jss380}>We've created the marketing campaign of the website. It was a very interesting collaboration.</div>
                                                </div>
                                            </div>
                                            <div className={styles.jss626}>
                                                <div className={styles.jss378}>
                                                    <div className={styles.jss379}>Marketing</div>
                                                    <div className={styles.jss380}>We've created the marketing campaign of the website. It was a very interesting collaboration.</div>
                                                </div>
                                            </div>
                                            <div className={styles.jss626}>
                                                <div className={styles.jss378}>
                                                    <div className={styles.jss379}>Marketing</div>
                                                    <div className={styles.jss380}>We've created the marketing campaign of the website. It was a very interesting collaboration.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.jss268}>
                                            <Forms />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                            <CardActions>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;