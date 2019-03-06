import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import RecipeReviewCard from './card'
import style from './plate.module.css'
import { connect } from 'react-redux'


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});
class PaperSheet extends React.Component {

  render() {
    const { classes, plateList } = this.props;
    const BtnList = [
      'All', '111'
    ]
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <div>
            <div className={style.jss11}>
              {BtnList.map((item,index) => <button className={style.jss12} key={index}>{item}</button>)}
            </div>
            <div className={style.jss14}>
              {plateList.map((item) => {
                return (<div className={style.jss13} key={item.get('id')}>
                  <div>
                    <RecipeReviewCard title={item.get('title')} subheader={item.get('subheader')} comment={item.get('comment')} />
                  </div>
                </div>)
              })
              }
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
const mapState = (state) => ({
  plateList: state.getIn(['plate', 'plates']),
})

export default connect(mapState, null)(withStyles(styles)(PaperSheet));