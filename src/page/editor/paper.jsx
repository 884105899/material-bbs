import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import style from './plate.module.css'
import { connect } from 'react-redux'
import TextField from './textfield'


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingRight: '0 !important',
    paddingLeft: '0 !important'
  },
});
class PaperSheet extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <div>
            <div className={style.jss14}>
              <TextField />
            </div>
          </div>
        </Paper>
      </div>
    )
  }
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(null, null)(withStyles(styles)(PaperSheet));