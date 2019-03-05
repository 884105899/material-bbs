import React from 'react'
import Editors from 'for-editor'
import { withStyles } from '@material-ui/core';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import Fab from '@material-ui/core/Fab';
import EditorCss from './editor.module.css'
const styles = theme => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 10,
        right: theme.spacing.unit * 10
    }
})
class Editor extends React.Component {
    constructor() {
        super()
        this.state = {
            value: '',
        }
    }

    handleChange(value) {
        this.setState({
            value
        })
    }

    render() {
        const { value, } = this.state
        const { classes } = this.props
        const fab = {
            color: 'secondary',
            className: classes.fab,
            icon: <UpIcon />
        }
        return (
            <React.Fragment>
                <div className={EditorCss.editor_box}>
                    <div className={EditorCss.editor}>
                        <Editors value={value} onChange={this.handleChange.bind(this)} />
                    </div>
                </div>
                <Fab className={fab.className} color={fab.color}>
                    {fab.icon}
                </Fab>
            </React.Fragment>
        )
    }
}
export default withStyles(styles, { withTheme: true })(Editor)