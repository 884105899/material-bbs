import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import RecipeReviewCard from './card'
import style from './plate.module.css'
import { connect } from 'react-redux'
import { actionCreators } from './store';
import FloatingActionButtons from './floatButton'


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});
class PaperSheet extends React.Component {

  render() {
    const { classes, plateList, buttonList, handlePlateSelect, nowButton } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <div>
            <div className={style.jss11}>
              {buttonList.map((item, index) =>
                <button className={style.jss12} key={item.get('uuid')}
                  onClick={() => handlePlateSelect(item.get('uuid'))}>
                  {item.get('name')}
                </button>)}
            </div>
            <div className={style.jss14}>
              {plateList.map((item) => {
                if (item.get('class') === nowButton) {
                  return (<div className={style.jss13} key={item.get('id')}>
                    <div>
                      <RecipeReviewCard title={item.get('title')} subheader={item.get('subheader')} comment={item.get('comment')} />
                    </div>
                  </div>)
                }
                else return null;
              })
              }
              <FloatingActionButtons />
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
const mapDispatch = (dispatch) => ({
  handlePlateSelect(index) {
    const action = actionCreators.selectPlateClass(index)
    dispatch(action)
  }
})

const mapState = (state) => ({
  plateList: state.getIn(['plate', 'plates']),
  buttonList: state.getIn(['plate', 'buttons']),
  nowButton: state.getIn(['plate', 'nowButton'])
})

export default connect(mapState, mapDispatch)(withStyles(styles)(PaperSheet));