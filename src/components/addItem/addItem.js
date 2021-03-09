import React, {Component} from 'react';
import "../addItem/addItem.css"

export default class AddItem extends Component{
    submitButton = React.createRef();
    state = {
        label: ""
    }
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.label)
        //this.submitButton.current.value = "";
        this.setState({
            label: ""
        })
    }

    render() {
        return (
            <form className="add-item-form"
            onSubmit={this.onSubmit}
            >
                <input type="text" className="form-control" onChange={this.onLabelChange} placeholder="What do you wants add?"
                       ref={this.submitButton}
                        value={this.state.label}
                />
                <button type="submit" className="btn btn-outline-primary">
                <i className="fa fa-plus"></i>
                </button>
            </form>

        )
    }
}