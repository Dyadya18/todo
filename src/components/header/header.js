import React from "react";
import "./header.css"

const Header = ({moreToDo, done}) => {
    return (
    <div className="header_label">
        <h1 className = "header_name">To Do List</h1> 
        <h2 className = "header_info">{moreToDo} more to do, {done} done</h2>
    </div>);
}
export default Header;