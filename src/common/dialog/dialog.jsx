import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import { actionCreators } from './store'

const DialogTitle = withStyles(theme => ({
    root: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        margin: 0,
        padding: theme.spacing.unit * 2,
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing.unit,
        top: theme.spacing.unit,
        color: theme.palette.grey[500],
    },
}))(props => {
    const { children, classes, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing.unit * 2,
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        borderTop: `1px solid ${theme.palette.divider}`,
        margin: 0,
        padding: theme.spacing.unit,
    },
}))(MuiDialogActions);

class CommonDialog extends React.Component {
    handleClose = () => {
        this.props.closeDialog();
    };

    render() {
        return (
            <div>
                <Dialog
                    onClose={this.handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={this.props.status}
                >
                    <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                        Modal title
                    </DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom>
                            {this.props.msg}
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Exit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
const mapState = (state) => ({
    status: state.getIn(['dialog', 'dialogStatus']),
    msg: state.getIn(['dialog', 'dialogMessage'])
})
const mapDispatch = (dispatch) => ({
    handleClose() {
        const action = actionCreators.closeDialog();
        dispatch(action)
    }
})


export default connect(mapState, mapDispatch)(CommonDialog);