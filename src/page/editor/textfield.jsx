import React, { Fragment } from 'react'
import Editor from 'for-editor'
import style from './plate.module.css'

class TextField extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(value) {
        this.setState({
            value
        })
    }
    render() {
        const { value } = this.state
        return (
            <Fragment>
                <div className={style.editor_box}>
                    <Editor value={value} onChange={this.handleChange} />
                </div>
            </Fragment>
        )
    }
}
export default TextField