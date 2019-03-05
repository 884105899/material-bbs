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

const style = theme => ({
    margin: {
        margin: theme.spacing.unit,
        width: '100%',
        marginBottom: '30px'
    },
});

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
            </React.Fragment>
        )
    }
}
Forms.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(style)(Forms)