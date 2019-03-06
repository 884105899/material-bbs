import React from 'react'
import styles from './login.module.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Forms from './FormControl'


class Login extends React.Component {
    render() {

        return (
            <div className={styles.root}>
                <div className={styles.in_root}>
                    <div className={styles.in_root_box}>
                        <div className={styles.in_root_box_card}>
                            <div className={styles.in_card}>
                                <Card className={styles.login_card}>
                                    <CardContent>
                                        <Forms />
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default Login