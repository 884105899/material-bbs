import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import RecipeReviewCard from './card'
import style from './plate.module.css'


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <div>
          <div className={style.jss11}>
            <button className={style.jss12}>All</button>
            <button className={style.jss12}>bbb</button>
            <button className={style.jss12}>ccc</button>
            <button className={style.jss12}>ddd</button>
            <button className={style.jss12}>eee</button>
          </div>
          <div className={style.jss14}>
            <div className={style.jss13}>
              <div>
                <RecipeReviewCard />
              </div>
            </div>
            <div className={style.jss13}>
              <div>
                <RecipeReviewCard />
              </div>
            </div>
            <div className={style.jss13}>
              <div>
                <RecipeReviewCard />
              </div>
            </div>
            <div className={style.jss13}>
              <div>
                <RecipeReviewCard />
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);