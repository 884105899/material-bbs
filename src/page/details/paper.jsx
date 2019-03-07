import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import style from './detail.module.css'

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
                <div className={style.jss5}>
                    <div className={style.jss6}>
                        <h3 className={style.jss7}>The Castle Looks Different at Night...</h3>
                        <p>This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more. We are here to make life better.
                        <br></br>
                            <br></br>
                            And now I look and look around and there’s so many Kanyes I've been trying to figure out the bed design for the master bedroom at our Hidden Hills compound... and thank you for turning my personal jean jacket into a couture piece.
                        </p>
                        <blockquote className={style.jss8}>
                            <p className={style.jss9}>“And thank you for turning my personal jean jacket into a couture piece.”</p>
                            <small className={style.jss10}>Kanye West, Producer.</small>
                        </blockquote>
                    </div>
                    <div className={style.jss11}>
                        <div className={style.jss12}>
                            <div className={style.jss13}>
                                <img src={require('../../static/img/blog1.9313c5c1.jpg')} alt='...' />
                            </div>
                            <div className={style.jss13}>
                                <img src={require('../../static/img/blog3.a4ee46b8.jpg')} alt='...' />
                            </div>
                            <div className={style.jss13}>
                                <img src={require('../../static/img/blog4.5de2130f.jpg')} alt='...' />
                            </div>
                        </div>
                    </div>
                    <div className={style.jss14}>
                        <h3 className={style.jss15}>Rest of the Story:</h3>
                        <p>Kanyes I've been trying to figure out the bed design for the master bedroom at our Hidden Hills compound... and thank you for turning my personal jean jacket into a couture piece.
                            <br></br>
                            I speak yell scream directly at the old guard on behalf of the future. daytime All respect prayers and love to Phife’s family Thank you for so much inspiration.
                        </p>
                        <p>Thank you Anna for the invite thank you to the whole Vogue team And I love you like Kanye loves Kanye Pand Pand Panda I've been trying to figure out the bed design for the master bedroom at our Hidden Hills compound...The Pablo pop up was almost a pop up of influence. All respect prayers and love to Phife’s family Thank you for so much inspiration daytime I love this new Ferg album! The Life of Pablo is now available for purchase I have a dream. Thank you to everybody who made The Life of Pablo the number 1 album in the world! I'm so proud of the nr #1 song in the country. Panda! Good music 2016!
                        </p>
                        <p>I love this new Ferg album! The Life of Pablo is now available for purchase I have a dream. Thank you to everybody who made The Life of Pablo the number 1 album in the world! I'm so proud of the nr #1 song in the country. Panda! Good music 2016!
                        </p>
                    </div>
                    <div>
                        <h3 className={style.ass1}>Comments</h3>
                        <div className={style.ass5}>
                            <div className={style.ass2}>
                                <h4 className={style.ass3}>
                                    <span> "sjx"
                                    <small>.7 minutes ago</small>
                                    </span>
                                </h4>
                                <p className={style.ass4}>Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!
                            </p>
                                <div >
                                    <button className={style.ass6}>reply</button>
                                </div>
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