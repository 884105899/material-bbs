import React from 'react'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import EmailRounded from '@material-ui/icons/EmailRounded'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Lock from '@material-ui/icons/LockRounded'
import styles from './form.module.css'
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

class Forms extends React.Component {
    state = {
        password: '',
        showPassword: false,
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };
    render() {
        return (
            <React.Fragment>
                <FormControl className={styles.form}>
                    <InputLabel htmlFor="email-input">Email</InputLabel>
                    <Input
                        id="email-input"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl className={styles.form}>
                    <InputLabel htmlFor="email-input">Email</InputLabel>
                    <Input
                        id="email-input"
                        startAdornment={
                            <InputAdornment position="start">
                                <EmailRounded />
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl className={styles.form}>
                    <InputLabel htmlFor="password-input">Password</InputLabel>
                    <Input
                        id="adornment-password"
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        startAdornment={
                            <InputAdornment position="start">
                                <Lock />
                            </InputAdornment>
                        }
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={this.handleClickShowPassword}
                                >
                                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <div className={styles.button}>
                    <Fab variant="extended" size="medium">
                        <NavigationIcon />
                        Extended
                </Fab>
                </div>
            </React.Fragment >
        )
    }
}
export default Forms