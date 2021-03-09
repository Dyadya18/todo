import React, {Component} from 'react';
import "./todo-list-items.css"

export default class TodoListItem extends Component{

    render(){
        const {label, onDelete, onToggleIm, onToggleDo, important, done} = this.props;

        let classNames = "todoListItem";
        if (done){
            classNames += " done";
        }
        if (important){
            classNames += " important"
        }
        return( 
            <div className = {classNames}>
                <span className="todoListItemLabel"
                      onClick={onToggleDo}
                >{label}</span>
                <button type="button" className="btn btn-outline-success btn-sm float-right"
                    onClick={onToggleIm}
                >
                    <i className="fa fa-exclamation"/>
                </button>
                <button type="button" className="btn-outline-danger btn-sm float-right"
                onClick={onDelete}
                >
                    <i className="fa fa-trash-o"/>
                </button>
            </div>);
    }
} 
