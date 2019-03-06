import React from 'react'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import EmailRounded from '@material-ui/icons/EmailRounded'
import Lock from '@material-ui/icons/LockRounded'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { actionCreators } from './store'

const style = theme => ({
    margin: {
        margin: theme.spacing.unit,
        width: '100%',
        marginBottom: '30px'
    },
});

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showPassword: false,
        }
        this.handleChangeName = this.handleChangeName.bind(this);
    }
    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleChangeName(e) {
        this.setState({ email: e.target.value })
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="email-input">Email</InputLabel>
                    <Input
                        id="email-input"
                        startAdornment={
                            <InputAdornment position="start">
                                <EmailRounded />
                            </InputAdornment>
                        }
                        value={this.state.name}
                        onChange={this.handleChangeName}
                    />
                </FormControl>
                <FormControl className={classes.margin}>
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
                <div>
                    <Button onClick={() => { this.props.login(this.state.email, this.state.password) }}>Login</Button>
                </div>
            </React.Fragment>
        )
    }
}
Forms.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapDispatch = (dispatch) => ({
    login(email, password) {
        const action = actionCreators.getUserInfo(email, password)
        dispatch(action)
    }
})

export default connect(null, mapDispatch)((withStyles(style)(Forms)))