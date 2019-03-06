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
import { connect } from 'react-redux'
import axios from 'axios';

class Forms extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            showPassword: false,
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
    }
    handleChangePassword = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };
    handleChangeEmail(event) {
        this.setState({ email: event.target.value })
    }
    handleChangeName(event) {
        this.setState({ name: event.target.value })
    }
    render() {
        const { createNewUser } = this.props
        const { email, name, password } = this.state
        return (
            <React.Fragment>
                <FormControl className={styles.form}>
                    <InputLabel htmlFor="name-input">Name</InputLabel>
                    <Input
                        id="name-input"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                        value={this.state.name}
                        onChange={this.handleChangeName}
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
                        value={this.state.email}
                        onChange={this.handleChangeEmail}
                    />
                </FormControl>
                <FormControl className={styles.form}>
                    <InputLabel htmlFor="password-input">Password</InputLabel>
                    <Input
                        id="adornment-password"
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={this.state.password}
                        onChange={this.handleChangePassword('password')}
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
                    <Fab variant="extended" size="medium"
                        onClick={() => createNewUser(name, email, password)}
                    >
                        <NavigationIcon />
                        Extended
                    </Fab>
                </div>
            </React.Fragment >
        )
    }
}
const mapDispatch = (dispatch) => ({
    createNewUser(name, email, password) {
        const user = {
            name,
            email,
            password
        }
        axios.post('/api/user', JSON.stringify(user))
            .then((res) => { console.log(res.data) })
            .catch((res) => { alert('no this api') })
    }
})
export default connect(null, mapDispatch)(Forms)