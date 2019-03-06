import React from 'react'
import styles from './plate.module.css'
import PaperSheet from './paper'
import { connect } from 'react-redux'
import { actionCreators } from './store';


class Plate extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.jss1}>
                    <div className={styles.jss2}>
                        <h2 className={styles.jss3}>A Place for Entrepreneurs to Share and Discover New Stories</h2>
                    </div>
                </div>
                <div className={styles.jss4}>
                    <PaperSheet />

                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getPlateList()
        this.props.getButtonList()
    }
}
const mapDispatch = (dispatch) => ({
    getPlateList() {
        const action = actionCreators.getPlateDate()
        dispatch(action)
    },
    getButtonList() {
        const action = actionCreators.getButtonName()
        dispatch(action)
    }
})

export default connect(null, mapDispatch)(Plate); 