import React from 'react';

import ToDoListItem from "../todoListItems/todo-list-items";
import "./todo-list.css";

const ToDoList = ({todos, onDeleted, onToggleIm, onToggleDo}) =>{

    const items = todos.map((item) => {

        const {id, ... itemProps} = item;

        return(
        <li key = {id} className = "list-group-item">
            <ToDoListItem { ... itemProps }
                onDelete={()=> onDeleted(id)}
                onToggleIm={()=> onToggleIm(id)}
                onToggleDo={()=> onToggleDo(id)}
            />
        </li>
        );
    });
    return(
        <ul className="list-group todo-list">
            { items }
        </ul>
    ); 
}
export default ToDoList;