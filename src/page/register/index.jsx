import React from 'react'
import styles from './register.module.css'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Forms from './FormControl'


class Register extends React.Component {
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
                                    <CardActions style={{ display: 'block' }}>
                                        <div className={styles.card_box}>
                                            <Button className={styles.button}>Register</Button>
                                        </div>
                                    </CardActions>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default Register